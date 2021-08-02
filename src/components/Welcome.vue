<template>
  <div
    class="relative flex h-screen w-full h-full bg-no-repeat bg-cover xl:bg-right sm:bg-center"
    style="background-image: url('https://res.cloudinary.com/do5ghqhjj/image/upload/v1627576273/bg_b512cb37bd.jpg')"
  >
    <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2">
      <img v-scroll-to="'#quote'" class="cursor-pointer" src="../assets/img/arrow.svg">
    </div>
  </div>
</template>