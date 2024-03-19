<template>
    <div id="card-element"></div>
    <button type="button" @click="pay">Pay</button>
</template>
  

<script lang="ts">
import axios from 'axios';
import { loadStripe, type PaymentMethodResult, type Stripe, type StripeElements } from '@stripe/stripe-js'
import { defineComponent, ref, onBeforeMount } from 'vue'
 
const stripeKey = ref(process.env.STRIPE_PUBLISHABLE_KEY)
let cardElement = null as unknown as StripeElements|undefined;
let  stripe = null as unknown as Stripe|null;   

export default {
  async setup() {
    stripe = await loadStripe(stripeKey.value);
    const elements = stripe?.elements();
    cardElement = elements?.create('card') as StripeElements|undefined; 
    cardElement?.mount('#card-element');
    
    console.log(stripe, elements)
    
    onMounted(() => {
    })

    const pay = async () => {
      const { paymentMethod, error } = await stripe?.createPaymentMethod({
        type: 'card',
        card: cardElement,
      }) as PaymentMethodResult;

      if (error) {
        console.error(error);
        // Gérer l'erreur (par exemple, afficher un message à l'utilisateur)
      } else {
        // Envoyer le paymentMethod.id à votre backend pour valider le paiement
        // Vous pouvez utiliser axios ou fetch pour envoyer la demande

        await axios.post(process.env.BACKEND_URL+'/create-payment-intent', {
          amount: 1500,
          currency: 'eur',
          capture_method: 'manual',
          payment_method: paymentMethod.id,
          confirm: true,
          return_url: process.env.FRONTEND_URL
        });
      }
    }

    return {
      stripeKey,
      pay
    }
  }
}
</script>