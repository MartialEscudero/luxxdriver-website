<template>
<v-main>
  <router-view/>
  <footer style="background-color: #383838; color: white" class="flex">
    <div class="container grid md:grid-cols-3 sm:grid-cols-1">
      <!-- <div class="mt-3">
        <a href="#reservation" class="float-right reserve pl-1 pr-1 ">Réserver</a><span class="ml-4 mr-4 select-none float-right">|</span>
        <v-btn class="float-right -mt-2" style="color: white" icon href="https://www.instagram.com/luxx_driver/" target="_blank">
          <v-icon dark medium>mdi-instagram</v-icon>
        </v-btn> 
      </div> -->
      <div class="md:mt-2 md:text-right sm:text-center">
        <p class="text-xs">Rejoins moi sur <a class="font-bold" target="_blank" href="https://www.instagram.com/luxx_driver/">Instagram </a>.</p>
        <p class="text-xs">Réserve ton prochain trajet rapidement en <a class="font-bold" target="_blank">cliquant ici</a>.</p>
      </div>
      <div></div>
      <div class="md:mt-2 sm:mt-5 md:text-left sm:text-center">
        <p class="text-xs">Copyright © 2021 - All right reserved.</p>
        <p class="text-xs">Made with ❤️ by <a class="font-bold" target="_blank" href="https://4cent4.fr">4cent4</a> & <a class="font-bold" target="_blank" href="https://www.martialescudero.com">Martial Escudero</a>.</p>
      </div>
    </div>
  </footer>
</v-main>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,700;1,100;1,200;1,400;1,700&display=swap');
* {
  font-family: 'Poppins', sans-serif;
  
}

::selection{
  background-color : #8f7213;
  color : #fff
}
</style>

<style scoped>
p {
  font-weight: 200;
}

a:hover {
  transition: .3s;
  background: #8f7213;
}
</style>
