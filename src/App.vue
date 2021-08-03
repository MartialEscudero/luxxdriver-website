<template>
<v-main id="home">
  <nav role="navigation" class="mb-32 absolute">
    <div class="bg"></div>
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <a v-scroll-to="'#home'"><li>Home</li></a>
        <a v-scroll-to="'#quote'"><li>Bienvenue</li></a>
        <a v-scroll-to="'#price'"><li>Tarifs</li></a>
        <a v-scroll-to="'#reservation'"><li>Réservation</li></a>
      </ul>
    </div>
    <a class="number select-none text-white xl:text-4xl sm:text-2xl" href="tel:+33500000000">06 06 06 06 06</a>
  </nav>
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
        <p class="text-xs">Réserve ton prochain trajet rapidement en <a class="font-bold" target="_blank" v-scroll-to="'#reservation'">cliquant ici</a>.</p>
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

.bg {
  display: block;
  position: fixed;
  z-index: 1;
  background: black;
  opacity: 0.2;
  width: 1000%;
  height: 80px;
}

.number {
  display: block;
  position: fixed;
  z-index: 1;
  top: 25px;
  right: 35px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700
}

.number:hover {
  background: none;
  color: #8f7213;
  cursor: pointer;
}

#menuToggle {
  display: block;
  position: fixed;
  top: 32px;
  left: 35px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a {
  text-decoration: none;
  color: #232323;
  
  transition: color 0.3s ease;
}

#menuToggle a:hover {
  color: #D7AC22;
}


#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0;
  z-index: 2;
  
  -webkit-touch-callout: none;
}

#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: white;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

#menu {
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  background: rgba(255, 255, 255, 0.9);
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li {
  padding: 10px 0;
  font-size: 22px;
}

#menuToggle input:checked ~ ul {
  transform: none;
}

@media screen and (max-width: 640px) {
  .number {
    top: 21px;
    right: 25px;
  }

  #menuToggle {
    top: 25px;
    left: 25px;
  }

  .bg {
    height: 68px;
  }
}
</style>