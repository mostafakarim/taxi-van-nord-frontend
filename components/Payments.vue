<template>
  <div>
    <div class="relative">
      <fwb-modal v-if="isModalShown" @close="closeModal">
        <template #header>
          <div class="flex items-center text-lg">
            Formulaire de reservation
          </div>
        </template>
        <template #body>
          <form @submit.prevent="sendEmailValidation">
            <fwb-input class="mb-2" required v-model="mapPayload.firstname" label="Prénom *" placeholder="Jean" size="md" />
            <fwb-input class="mb-2" required v-model="mapPayload.lastname" label="Nom *" placeholder="Charles" size="md" />
            <fwb-input class="mb-2" required v-model="mapPayload.phone" type="tel" label="Téléphone *" placeholder="0645394959" size="md" />
            <fwb-input class="mb-2" required v-model="mapPayload.reply_to" type="email" label="Email *" placeholder="jean.charles@gmail.com" size="md" />
            <h2 class="heading-small mt-5 mb-3">Moyen de paiement</h2>
            <div id="card-element"></div>
            <p class="my-3">
              Après confirmation, vous serez contacté par votre chauffeur afin de valider avec vous le trajet. 
            </p>
            <div class="flex justify-between">
              <fwb-button @click="closeModal" color="alternative">
                Annuler
              </fwb-button>
              <fwb-button :disabled="isPaymentLoading" type="submit" class="bg-[#ddaf00] hover:bg-[#b18c00]">
                <span v-if="isPaymentLoading">
                  <fwb-spinner size="6" class="fill-[#b18c00!important]" />
                </span>
                <span v-else>
                  Confirmer
                </span>
              </fwb-button>
            </div>
          </form>
        </template>
      </fwb-modal>
    </div>
    
  </div>
</template>
  

<script lang="ts" setup>
import { FwbButton, FwbModal, FwbInput, FwbSpinner } from 'flowbite-vue';
import axios from 'axios';
import { loadStripe, type StripeElements } from '@stripe/stripe-js'
import emailjs from '@emailjs/browser';
import { usePaymentStore } from '@/stores/payment'

const paymentStore = usePaymentStore();
const emit = defineEmits(['modalClosed','paymentSuccess']);
const mapPayload = ref({});
const isPaymentLoading = ref(false);
const props = defineProps({
  payload: {
    type: Object,
    required: false,
  },
});
let stripe = null;
let cardElement = null as unknow as StripeElements|undefined; 
let clientSecret = null;
let paymentIntentId = null;
let elements = null;
const config = useRuntimeConfig();
const isModalShown = computed(() => paymentStore.isModalShown);

const initStripe = async () => {
  const stripeKey = config.public.STRIPE.API_KEY;
  stripe = await loadStripe(stripeKey);
  await axios.post(`${config.public.APP.BACKEND_BASE_URL}/create-payment-intent`, {
    amount: props.payload.amount*100,
    currency: 'eur',
    capture_method: 'manual'
  }).then((data) => {
      paymentIntentId = data.data.paymentIntentId;
      clientSecret = data.data.clientSecret;
    });
  
  const options= {
    layout: {
      type: 'tabs',
      defaultCollapsed: false,
    }
  }
  const appearance = { 
    theme: 'stripe',
    variables: { colorPrimaryText: '#262626' }
  };
  elements = stripe?.elements({clientSecret, appearance});
  cardElement = elements?.create('payment', options) as StripeElements|undefined; 
  cardElement?.mount('#card-element');
}

watch(() => props.payload, async (newValue, oldValue) => {
  await initStripe();
},
{immediate: true});

const closeModal = (props: {isSuccess: boolean} = {isSuccess: false}) => {
  isPaymentLoading.value = false;
  paymentStore.closeModal();
  if(props.isSuccess) 
    emit('paymentSuccess');
  else 
    emit('modalClosed');
}

const confirmPayment = async () => {
  isPaymentLoading.value = true;
  await elements.submit();
  await stripe.confirmPayment({
    payment_method: 'card',
    card: cardElement,
    clientSecret,
    elements,
    redirect: 'if_required'
  }).then(async () => {
    const metadata = {
      client: {
        ...mapPayload.value
      },
      booking: {
        phone: mapPayload.value.phone,
        ...props.payload,
      }
    };
    await axios.post(`${config.public.APP.BACKEND_BASE_URL}/update-payment-intent/${paymentIntentId}`, metadata);
  });
}

const sendEmailValidation = async () => {
  await confirmPayment().then(() => {
    const test = config.public.STRIPE.TEST ? '/test' : '';
    const stripeUrl = `${config.public.STRIPE.BASE_URL}${test}/payments/${paymentIntentId}`;
    const payload = {
      ...props.payload,
      ...mapPayload.value,
      origin: props.payload.origin.address,
      destination: props.payload.destination.address,
      stripeUrl
    };

    emailjs
      .send(config.public.EMAIL_JS.SERVICE_ID, config.public.EMAIL_JS.TEMPLATE_ID, payload, {
        publicKey: config.public.EMAIL_JS.API_KEY,
      })
      .then(
        () => {
          closeModal({isSuccess: true});
        },
        (error) => {
          console.log('FAILED...', error.text);
          closeModal({isSuccess: false, message: 'Une erreur est survenue, merci de réessayer ultérieurement'});
        },
        () => {
          isPaymentLoading.value = false;
        }
      );
    })
}


</script>
<style>
div#card-element [data-field="country"] {
    display: none;
}
</style>