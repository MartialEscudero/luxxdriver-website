<template>
  <div style="background-color: #202020;" class="flex" id="quote">
    <div class="m-auto">
      <h1 style="color: #D7AC22" class="md:mt-28 md:mb-20 sm:mt-24 text-center text-5xl">Luxx Driver</h1>
      <div class="container grid grid-cols-3 mb-32" v-if="$vuetify.breakpoint.mdAndUp">
        <img class="mx-auto w-8 mt-5" src="../assets/img/gui-left.svg">
        <p class="-ml-20 -mr-20 text-white italic text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <img class="mx-auto w-8 mt-5" src="../assets/img/gui-right.svg">
      </div>
      <div class="container mb-32 mt-14" v-if="$vuetify.breakpoint.smAndDown">
        <img class="w-5 ml-5 mb-5" src="../assets/img/gui-left.svg">
        <p class="ml-7 mr-7 text-white text-sm italic text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <img class="w-5 float-right mt-5 mr-5" src="../assets/img/gui-right.svg">
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Spectral:ital@1&display=swap');

h1 {
  font-family: 'Spectral', serif;
}
</style>
v-if="$vuetify.breakpoint.mdAndUp"
v-if="$vuetify.breakpoint.smAndDown"