<template>
  <div
    class="relative flex h-screen w-full h-full bg-no-repeat bg-cover xl:bg-right sm:bg-center"
    style="background-image: url('https://www.luxxdriver.com/assets/img/bg.jpg')"
  >
    <div class="m-auto">
      <h1 class="text-center xl:text-4xl sm:text-xl italic xl:-mt-80 sm:-mt-72 xl:opacity-60 sm:opacity-50 xl:p-3 sm:p-1"><span class="font-bold xl:text-7xl sm:text-3xl">Luxx Driver</span><br>Chauffeur Privé</h1>
    </div>
    <div class="absolute xl:bottom-24 sm:bottom-20 left-1/2 transform -translate-x-1/2">
      <!-- <img v-scroll-to="'#quote'" class="cursor-pointer" src="../assets/img/arrow.svg"> -->
      <div class="arrow cursor-pointer" v-scroll-to="'#quote'">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #D7AC22;
  font-family: 'Spectral', serif;
}

span {
  font-family: 'Spectral', serif;
}

body {
  margin: 0;
  padding: 0;
  background-color: #000;
}

.arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.arrow span {
  display: block;
  width: 35px;
  height: 35px;
  border-bottom: 5px solid #D7AC22;
  border-right: 5px solid #D7AC22;
  transform: rotate(45deg);
  margin: -10px;
  animation: animate 2s infinite;
}

.arrow span:nth-child(2) {
  animation-delay: -0.2s;
}

.arrow span:nth-child(3) {
  animation-delay: -0.4s;
}

@keyframes animate  {
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-20px,-20px);
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: rotate(45deg) translate(20px,20px);
  }
}
</style>