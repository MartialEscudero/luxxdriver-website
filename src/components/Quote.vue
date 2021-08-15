<template>
  <div style="background-color: #202020;" class="flex" id="quote">
    <div class="m-auto">
      <h1 style="color: #D7AC22" class="md:mt-28 md:mb-20 sm:mt-24 text-center italic text-5xl" translate="no" data-aos="fade-down">Luxx Driver</h1>
      <div class="container grid grid-cols-3 mb-32" v-if="$vuetify.breakpoint.mdAndUp">
        <img class="mx-auto w-8 mt-16" src="../assets/img/gui-left.svg" data-aos="fade-right">
        <p class="-ml-20 -mr-20 text-white italic text-center" data-aos="fade-up">
          Luxx Driver, votre chauffeur privé situé à Carnon Plage vous transporte dans la France entière. Que ce soit pour des trajets professionnels, privés ou du tourisme, nous vous amenons là où vous le souhaitez.
          <br>Envie de conseils pour un hôtel, un restaurant ou des activités ? N’hésitez pas, Luxx Driver a une connaissance parfaite des villes méditerranéennes !
          <br>Ponctualité, confort et sécurité sont les maîtres mots de la société. Essayez et vous verrez, vous ne pourrez plus vous passer de votre chauffeur Luxx Driver.
        </p>
        <img class="mx-auto w-8 mt-16" src="../assets/img/gui-right.svg" data-aos="fade-left">
      </div>
      <div class="container mb-32 mt-14" v-if="$vuetify.breakpoint.smAndDown">
        <img class="w-5 ml-5 mb-5" src="../assets/img/gui-left.svg" data-aos="fade-down">
        <p class="ml-7 mr-7 text-white text-sm italic text-center" data-aos="fade-up">
          Luxx Driver, votre chauffeur privé situé à Carnon Plage vous transporte dans la France entière. Que ce soit pour des trajets professionnels, privés ou du tourisme, nous vous amenons là où vous le souhaitez.
          <br>Envie de conseils pour un hôtel, un restaurant ou des activités ? N’hésitez pas, Luxx Driver a une connaissance parfaite des villes méditerranéennes !
          <br>Ponctualité, confort et sécurité sont les maîtres mots de la société. Essayez et vous verrez, vous ne pourrez plus vous passer de votre chauffeur Luxx Driver.
        </p>
        <img class="w-5 float-right mt-5 mr-5" src="../assets/img/gui-right.svg" data-aos="fade-up">
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-family: 'Spectral', serif;
}
</style>