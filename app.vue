<template>
  <div>
    <!-- <div class="w-full flex justify-center fixed bottom-4 z-[100]">
      <fwb-toast class="shadow-md" closable alignment="start" type="success">
        Réservation validée ! Vous serez contacté très prochainement.
      </fwb-toast>
    </div> -->

   <Payments />
    <div id="main-body" class="flex flex-col h-full overflow-y-auto overflow-x-hidden smooth-scroll transition-all">
      <header id="website-header" class="sticky !z-[99]" style="background-color: rgb(18 18 18)">
        <div class="grid items-center lg:gap-6 xl:gap-10 mx-auto pt-4 pb-4 px-6 lg:px-12"
          style="grid-template-columns:1fr auto 1fr">
          <div class="lg:w-auto whitespace-nowrap"></div>
          <div class="flex justify-center"><a class="grid max-w-full" target="_self" href="/fr">
              <h2 class="text-xl heading-medium lg:heading-medium whitespace-nowrap overflow-hidden overflow-ellipsis"
                style="color: rgb(255, 255, 255); font-family: var(--header-logo-fontFamily); font-weight: var(--header-logo-fontWeight);">
                <span style="color: rgb(255 215 64);">Taxi</span>
                Van Nord
              </h2>
            </a></div>
          <div class="flex justify-end">
            <div class="hidden lg:flex item-center gap-10">
              <div class="hidden lg:flex items-center flex-shrink-0 gap-4"><a
                  class="button xl xl:!text-2xl !py-1.5 flex" target="_self" href="tel:+33605030606"
                  style="border-width: 2px; border-style: solid; box-shadow: none; font-family: var(--body-fontFamily); font-weight: var(--body-fontWeight); font-style: var(--body-fontStyle); background-color: transparent; color: rgb(255 215 64); border-radius: 8px; border-color: rgb(255 255 255);">
                  +33 6 05 03 06 06</a>
              </div>
            </div>
            <div class="ml-auto lg:hidden"><button
                class="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                style="color: rgb(18 18 18);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true" class="block h-5 w-5">
                  <path fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd"></path>
                </svg></button></div>
          </div>
        </div>
      </header>
      <section class="relative overflow-hidden">
        <div data-text-color="#FFFFFF" class="flex-shrink-0 flex relative break-word items-center"
          style="z-index: 39; min-height: calc(58px); padding-bottom: 0px;">
          <div class="w-full flex break-word transition-all duration-300 items-center">
            <div class="absolute inset-0 pointer-events-none">
              <div class="absolute inset-0 z-10" style="background-color: rgb(0, 0, 0); opacity: 0.66;"></div>
              <div class="absolute inset-0 z-0 bg-white"><span
                  style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                    alt="background" sizes="200vw" src="/img/background/header.webp" decoding="async" data-nimg="fill"
                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: 50% 50%;"></span>
              </div>
            </div>
            <div
            id="presentation-screen"
              class="relative z-10 container mx-auto px-5 md:px-6 transition-all duration-300 pt-20 lg:pt-48 pb-20 lg:pb-48">
              <div
                class="transition-all transition-all ease-in-out duration-500  opacity-100 relative z-10 w-full h-full">
                <div
                  class="flex w-full gap-10 lg:gap-20 transition-all duration-300 flex-col lg:flex-row justify-start">
                  <div class="flex-1 flex flex-col w-full max-w-3xl items-start">
                    <h2 class="mb-6 break-word transition-all duration-300 text-left heading-xlarge"
                      style="color:#FFFFFF">Voyagez Confortablement dans le Nord</h2>
                    <p class="transition-all duration-300 body-large" style="color:#FFFFFF">Découvrez une expérience de
                      voyage unique avec nos services de taxi fiables et ponctuels.<br><br>
                      Demandez un devis via :<br><br>
                        <a href="https://wa.me/+33605030606" class="underline-offset-8 underline" target="_blank">WhatsApp</a> ou <a href="tel:0605030606" class="underline-offset-8 underline">(+33)6 05 03 06 06</a>
                    </p>
                    <div class="flex md:inline-flex flex-col md:flex-row md:gap-4 w-full md:w-max">
                      <button class="button xl w-full md:w-max mt-6 lg:mt-8" target="_self"
                        style="border-width: 2px; border-style: solid; box-shadow: none; font-family: var(--body-fontFamily); font-weight: var(--body-fontWeight); font-style: var(--body-fontStyle); background-color: transparent; color: rgb(255, 255, 255); border-radius: 8px; border-color: rgb(255, 255, 255);"
                         @click="scrollTo('.book-online')">Réservez en ligne</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="book-online">
        <h1 class="heading-xlarge text-center my-10">Réservez</h1>
        <GoogleMaps />
      </section>
      <section class="relative">
        <div class="flex flex-none flex-shrink-0 relative break-word items-center"
          style="min-height: calc(134px); z-index: 38; padding-top: 0px; padding-bottom: 0px;">
          <div class="absolute inset-0 pointer-events-none">
            <div class="absolute inset-0 z-10" style="background-color: rgb(255, 255, 255);"></div>
          </div>
          <div class="relative z-10 container mx-auto pt-16 lg:pt-32 pb-16 lg:pb-32">
            <div class="text-center">
              <div class="rich-text-block max-w-5xl text-left" style="color: rgb(18 18 18);">
                <h3 class="heading-medium px-10 sm:px-0" style="white-space:pre-line">Taxi Van Nord, basé en Hauts-de-France, est
                  votre partenaire de
                  confiance pour tous vos besoins de transport. Avec un service fiable et des chauffeurs professionnels,
                  nous vous garantissons une expérience de voyage sûre et confortable. Réservez dès maintenant et
                  laissez-nous vous emmener à destination en toute tranquillité.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative">
        <div id="65e5d632d521930225437e41" class="relative flex flex-none flex-shrink-0 break-word items-center"
          style="min-height: calc(134px); z-index: 37; padding-top: 0px; padding-bottom: 0px;">
          <div class="absolute inset-0 pointer-events-none">
            <div class="absolute inset-0 z-10" style="background-color: rgb(255, 255, 255);"></div>
          </div>
          <div class="relative z-10 container mx-auto pt-12 lg:pt-20 pb-12 lg:pb-20">
            <div>
              <div>
                <h2 class="heading-large mx-4 mb-6 text-left" style="color: rgb(18 18 18);">Services</h2>
              </div>
              <div class="flex flex-wrap relative justify-start">
                <div class="group w-full px-4 sm:w-1/3 relative overflow-hidden rounded-2xl md:rounded-3xl lg:rounded-4xl">
                  <div>
                    <div class="flex-shrink-0 relative aspect-w-1 aspect-h-1"><span
                        style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                          alt="manhattan madness" src="/img/background/background-2.webp" decoding="async"
                          data-nimg="fill" class="rounded-2xl md:rounded-3xl lg:rounded-4xl"
                          style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center center"
                          sizes="200vw"></span>
                    </div>
                    <div class="">
                      <div class="flex flex-col text-left items-start py-6" style="color: rgb(18 18 18);">
                        <p class="heading-medium mb-4" style="color:currentColor">Transferts aéroport et gares</p>
                        <div class="rich-text-block" style="color:currentColor">Offrez-vous un
                          trajet confortable et sûr vers ou depuis l'aéroport ou la gare, sans soucis de stationnement
                          ou d'attente.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="group w-full px-4 sm:w-1/3 relative overflow-hidden rounded-2xl md:rounded-3xl lg:rounded-4xl">
                  <div>
                    <div class="flex-shrink-0 relative aspect-w-1 aspect-h-1"><span
                        style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                          alt="navigation" src="/img/background/background-3.webp" decoding="async" data-nimg="fill"
                          class="rounded-2xl md:rounded-3xl lg:rounded-4xl"
                          style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center center"
                          sizes="200vw"></span>
                    </div>
                    <div class="">
                      <div class="flex flex-col text-left items-start py-6" style="color: rgb(18 18 18);">
                        <p class="heading-medium mb-4" style="color:currentColor">Transport touristique personnalisé</p>
                        <div class="rich-text-block" style="color:currentColor">Découvrez la région
                          en toute sérénité avec un service de transport privé sur mesure, adapté à vos envies et votre
                          emploi du temps.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="group w-full px-4 sm:w-1/3 relative overflow-hidden rounded-2xl md:rounded-3xl lg:rounded-4xl">
                  <div>
                    <div class="flex-shrink-0 relative aspect-w-1 aspect-h-1"><span
                        style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                          alt="Taxi" src="/img/background/background-4.webp" decoding="async" data-nimg="fill"
                          class="rounded-2xl md:rounded-3xl lg:rounded-4xl"
                          style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center center"
                          sizes="200vw"></span>
                    </div>
                    <div class="">
                      <div class="flex flex-col text-left items-start py-6" style="color: rgb(18 18 18);">
                        <p class="heading-medium mb-4" style="color:currentColor">Courses locales et rendez-vous</p>
                        <div class="rich-text-block" style="color:currentColor">Réservez un taxi
                          pour vos déplacements quotidiens ou pour vos rendez-vous professionnels, avec une ponctualité
                          irréprochable.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative">
        <div class="flex flex-none flex-shrink-0 relative break-word items-center"
          style="min-height: calc(134px); z-index: 36; padding-top: 0px; padding-bottom: 0px;">
          <div class="absolute inset-0 pointer-events-none">
            <div class="absolute inset-0 z-10" style="background-color: rgb(255, 255, 255);"></div>
          </div>
          <div class="relative z-10 mx-4 container sm:mx-auto pt-12 lg:pt-20 pb-12 lg:pb-20">
            <div class="flex w-full gap-10 lg:gap-20 flex-col lg:flex-row items-center">
              <div class="flex-1 flex flex-col max-w-240 items-start">
                <div class="text-lg" style="color: rgb(18 18 18);">
                  <h2 class="heading-medium" style="white-space:pre-line">À propos de nous</h2>
                  <p class="mb-4">Taxi Van Nord est le choix de confiance pour tous vos besoins de transport dans la
                    région de Nord,
                    Hauts-de-France. Avec notre service fiable et nos chauffeurs professionnels, nous nous engageons à
                    offrir une expérience de voyage sûre et confortable à nos clients.</p>
                  <p>Que vous ayez besoin d'un trajet vers l'aéroport, d'une course en ville ou d'un service de
                    transport régulier, nous sommes là pour vous servir. Contactez-nous dès aujourd'hui pour réserver
                    votre prochain trajet avec Taxi Van Nord.</p>
                </div>
              </div>
              <div class="flex-1 flex w-full h-full justify-center lg:justify-start">
                <div class="flex-shrink-0 relative w-full h-full mx-auto aspect-w-3 aspect-h-2">
                  <span
                    style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                      alt="Berlin Taxi" src="/img/background/background-5.webp" decoding="async" data-nimg="fill"
                      class="rounded-2xl md:rounded-3xl lg:rounded-4xl"
                      style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center center"
                      sizes="200vw"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="flex flex-1 text-white">
        <div id="website-footer" class="relative flex-1 z-10 break-word py-0">
          <div class="absolute inset-0 pointer-events-none">
            <div class="absolute inset-0 z-10 bg-yellow-500"></div>
          </div>
          <div class="relative z-10 container mx-4 sm:mx-auto pt-12 lg:pt-20 pb-12 lg:pb-20">
            <div class="flex flex-col lg:flex-row items-start lg:justify-between gap-12">
              <div class="flex flex-col gap-6 items-start lg:max-w-[30vw]"><a class="grid max-w-full" target="_self"
                  href="/fr">
                  <h2 class="heading-small lg:heading-medium whitespace-nowrap overflow-hidden overflow-ellipsis"
                    style="font-family: var(--header-logo-fontFamily); font-weight: var(--header-logo-fontWeight);">
                    Taxi Van Nord</h2>
                </a>
              <p>
                <a href="https://wa.me/+33605030606" target="_blank">WhatsApp</a><br><br>
                <a href="tel:0605030606">(+33)6 05 03 06 06</a>
              </p>
              
              </div>
              <div class="flex flex-col gap-12 lg:gap-6">
                <div class="flex flex-col lg:flex-row gap-12 lg:items-center lg:justify-end"></div>
                <p class="body-normal lg:text-right whitespace-nowrap"><span>Propulsé par </span><a target="_blank"
                    class="underline text-white" href="https://oasis-digital-agency.com/" >oasis-digital-agency.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="Toastify"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
if (process.server) {
  useHead({ script: [{ src: `https://maps.googleapis.com/maps/api/js?key=AIzaSyB0dMwfUEn1YQkapbpvZyG-mDQRHLBRJ6Y&v=weekly&libraries=places&loading=async`, defer: true }] });
}

onMounted(() => {
  const presentationScreen = document.getElementById("presentation-screen");
  const headerElement = document.getElementById("website-header");
  const presentationScreenHeight = window.innerHeight - headerElement.style.height;
  presentationScreen.style.height = presentationScreenHeight+'px';
});

function scrollTo(className) {
  document.querySelector(className).scrollIntoView({
    behavior: 'smooth'
  });
}
</script>

<style lang="scss">
.aspect-w-1,
.aspect-w-10,
.aspect-w-11,
.aspect-w-12,
.aspect-w-13,
.aspect-w-14,
.aspect-w-15,
.aspect-w-16,
.aspect-w-2,
.aspect-w-3,
.aspect-w-4,
.aspect-w-5,
.aspect-w-6,
.aspect-w-7,
.aspect-w-8,
.aspect-w-9 {
  position: relative;
  padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%)
}

.aspect-w-10>*,
.aspect-w-11>*,
.aspect-w-12>*,
.aspect-w-13>*,
.aspect-w-14>*,
.aspect-w-15>*,
.aspect-w-16>*,
.aspect-w-1>*,
.aspect-w-2>*,
.aspect-w-3>*,
.aspect-w-4>*,
.aspect-w-5>*,
.aspect-w-6>*,
.aspect-w-7>*,
.aspect-w-8>*,
.aspect-w-9>* {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0
}

.aspect-w-1 {
  --tw-aspect-w: 1
}

.aspect-w-2 {
  --tw-aspect-w: 2
}

.aspect-w-3 {
  --tw-aspect-w: 3
}

.aspect-w-16 {
  --tw-aspect-w: 16
}

.aspect-h-1 {
  --tw-aspect-h: 1
}

.aspect-h-2 {
  --tw-aspect-h: 2
}

.aspect-h-3 {
  --tw-aspect-h: 3
}

.aspect-h-9 {
  --tw-aspect-h: 9
}

@media (min-width: 768px) {
  .testimonials-carousel .slider-container .slider-control-bottomcenter {
    padding-left: 7rem;
    padding-right: 7rem
  }
}

@media(min-width: 1024px)and (max-width:1280px)and (orientation:landscape) {
  .grid-cols-fit-3 {
    grid-template-columns: 1fr auto 1fr
  }
}

.heading-large,
.heading-medium,
.heading-small,
.heading-xlarge,
.heading-xsmall {
  font-family: var(--head-fontFamily);
  font-weight: var(--head-fontWeight, 500);
  font-style: var(--head-fontStyle, normal)
}

.heading-large.uppercase,
.heading-medium.uppercase,
.heading-small.uppercase,
.heading-xlarge.uppercase,
.heading-xsmall.uppercase {
  letter-spacing: .08rem
}

.body-large,
.body-normal,
.body-small {
  font-family: var(--body-fontFamily);
  font-weight: var(--body-fontWeight, 400);
  font-style: var(--body-fontStyle, normal)
}

.heading-xlarge {
  font-size: calc(36px*var(--head-fontSize, 1));
  line-height: calc(42px*var(--head-fontHeight, 1));
  font-weight: var(--head-fontWeight, 800)
}

.heading-xlarge.uppercase {
  font-size: calc(36px*var(--head-fontSize, 1)*.85)
}

.heading-large {
  font-size: calc(30px*var(--head-fontSize, 1));
  line-height: calc(36px*var(--head-fontHeight, 1))
}

.heading-large.uppercase {
  font-size: calc(30px*var(--head-fontSize, 1)*.85)
}

.heading-medium {
  font-size: calc(24px*var(--head-fontSize, 1));
  line-height: calc(32px*var(--head-fontHeight, 1))
}

.heading-medium.uppercase {
  font-size: calc(24px*var(--head-fontSize, 1)*.85)
}

.heading-small {
  font-size: calc(20px*var(--head-fontSize, 1));
  line-height: calc(28px*var(--head-fontHeight, 1))
}

.heading-small.uppercase {
  font-size: calc(20px*var(--head-fontSize, 1)*.85)
}

.heading-xsmall {
  font-size: calc(18px*var(--head-fontSize, 1));
  line-height: calc(24px*var(--head-fontHeight, 1))
}

.heading-xsmall.uppercase {
  font-size: calc(18px*var(--head-fontSize, 1)*.85)
}

.body-large {
  font-size: calc(18px*var(--body-fontSize, 1));
  line-height: calc(26px*var(--body-fontHeight, 1))
}

.body-normal {
  font-size: calc(16px*var(--body-fontSize, 1));
  line-height: calc(24px*var(--body-fontHeight, 1))
}

.body-small {
  font-size: calc(14px*var(--body-fontSize, 1));
  line-height: calc(21px*var(--body-fontHeight, 1))
}

@media(min-width: 768px) {
  .heading-xlarge {
    font-size: calc(46px*var(--head-fontSize, 1));
    line-height: calc(54px*var(--head-fontHeight, 1));
    font-weight: var(--head-fontWeight, 600)
  }

  .heading-xlarge.uppercase {
    font-size: calc(46px*var(--head-fontSize, 1)*.85)
  }

  .heading-large {
    font-size: calc(35px*var(--head-fontSize, 1));
    line-height: calc(42px*var(--head-fontHeight, 1))
  }

  .heading-large.uppercase {
    font-size: calc(35px*var(--head-fontSize, 1)*.85)
  }

  .heading-medium {
    font-size: calc(28px*var(--head-fontSize, 1));
    line-height: calc(36px*var(--head-fontHeight, 1))
  }

  .heading-medium.uppercase {
    font-size: calc(28px*var(--head-fontSize, 1)*.85)
  }

  .heading-small {
    font-size: calc(21px*var(--head-fontSize, 1));
    line-height: calc(28px*var(--head-fontHeight, 1))
  }

  .heading-small.uppercase {
    font-size: calc(21px*var(--head-fontSize, 1)*.85)
  }
}

@media(min-width: 1280px) {
  .heading-xlarge {
    font-size: calc(72px*var(--head-fontSize, 1));
    line-height: calc(80px*var(--head-fontHeight, 1));
    font-weight: var(--head-fontWeight, 500)
  }

  .heading-xlarge.uppercase {
    font-size: calc(72px*var(--head-fontSize, 1)*.85)
  }

  .heading-large {
    font-size: calc(48px*var(--head-fontSize, 1));
    line-height: calc(56px*var(--head-fontHeight, 1))
  }

  .heading-large.uppercase {
    font-size: calc(48px*var(--head-fontSize, 1)*.85)
  }

  .heading-medium {
    font-size: calc(32px*var(--head-fontSize, 1));
    line-height: calc(40px*var(--head-fontHeight, 1))
  }

  .heading-medium.uppercase {
    font-size: calc(32px*var(--head-fontSize, 1)*.85)
  }

  .heading-small {
    font-size: calc(24px*var(--head-fontSize, 1));
    line-height: calc(32px*var(--head-fontHeight, 1))
  }

  .heading-small.uppercase {
    font-size: calc(24px*var(--head-fontSize, 1)*.85)
  }

  .body-large {
    font-size: calc(24px*var(--body-fontSize, 1));
    line-height: calc(36px*var(--body-fontHeight, 1))
  }

  .body-normal {
    font-size: calc(18px*var(--body-fontSize, 1));
    line-height: calc(28px*var(--body-fontHeight, 1))
  }

  .body-small {
    font-size: calc(16px*var(--body-fontSize, 1));
    line-height: calc(21px*var(--body-fontHeight, 1))
  }
}

.button.xl,
a.button.xl {
  padding: .75rem 1rem;
  font-size: 1.25rem;
  line-height: 1.75rem
}

.button.lg,
a.button.lg {
  padding: .75rem 1rem;
  font-size: 16px;
  line-height: 16px
}

.button.sm,
a.button.sm {
  padding: .5rem .75rem;
  font-size: 14px;
  line-height: 16px
}

.button.xs,
a.button.xs {
  padding: .375rem .75rem;
  font-size: 10px;
  line-height: 12px
}
</style>