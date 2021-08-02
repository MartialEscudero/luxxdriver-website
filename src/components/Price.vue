<template>
  <v-app style="background-color: #383838; color: #D7AC22">
    <h1 class="container mx-auto text-4xl font-bold xl:pt-20 sm:pt-10 mb-10 text-left">
      Tarifs
    </h1>
    <div class="container grid xl:grid-cols-2 sm:grid-cols-1 mb-16">
      <div>
        <img class="shadow-2xl xl:w-100 md:w-96 sm:w-80 mx-auto" src="../assets/img/price.png">
      </div>
      <div class="hidden xl:block mt-32">
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
        <p class="text-white italic text-center text-sm mt-2">Transport dans une magnifique Mercedes Classe C</p>
        <div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://res.cloudinary.com/do5ghqhjj/image/upload/v1627915707/out_f53a7060c2.jpg',
          },
          {
            src: 'https://res.cloudinary.com/do5ghqhjj/image/upload/v1627915707/out_f53a7060c2.jpg',
          },
        ],
      }
    },
  }
</script>

<style scoped>
p {
  font-weight: 200;
}
</style>