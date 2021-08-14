<template>
  <v-app style="background-color: #202020; color: #D7AC22" id="reservation">
    <h1 class="container mx-auto text-4xl font-bold md:mt-20 sm:mt-10 text-left md:mb-10">
      Réservation
    </h1>
    <div v-if="editReservation == true" class="mx-auto container grid md:grid-cols-3 sm:grid-cols-1 gap-10 md:mt-20">
      <div class="md:-mt-14">
        <v-text-field
            v-model="name"
            label="Nom"
            clearable
            dark
            style="font-size: 1.2rem"
            name="user_name"
          ></v-text-field>
          <p v-if="showName == true" class="absolute text-red-500 text-xs -mt-5">Nom invalide</p>
      </div>
      <div class="sm:-mt-14">
        <v-text-field
            v-model="tel"
            label="Numéro"
            clearable
            dark
            style="font-size: 1.2rem"
            name="user_tel"
          ></v-text-field>
          <p v-if="showTel == true" class="absolute text-red-500 text-xs -mt-5">Numéro téléphone invalide</p>
      </div>
      <div class="sm:-mt-14">
        <v-text-field
            v-model="email"
            label="E-mail"
            clearable
            dark
            style="font-size: 1.2rem"
            name="user_email"
          ></v-text-field>
          <p v-if="showEmail == true" class="absolute text-red-500 text-xs -mt-5">E-mail invalide</p>
      </div>
      <div class="mx-auto md:mt-28 sm:-mt-7">
        <p class="text-center text-white text-sm">Nombre de passagers</p><br>
        <div class="grid grid-cols-3">
          <div class="mr-10">
            <v-btn fab v-if="passager > passagerMin" @click="passager--" dark class="btn" outlined icon>
              <v-icon large>mdi-minus</v-icon>
            </v-btn>
            <v-btn fab v-if="passager <= passagerMin" style="cursor:not-allowed;" dark class="btn" outlined icon>
              <v-icon large>mdi-minus</v-icon>
            </v-btn>
          </div>
          <p class="text-center text-6xl text-white">{{passager}}</p>
          <div class="ml-10">
            <v-btn fab v-if="passager < passagerMax" @click="passager++" dark class="btn" outlined icon>
              <v-icon large>mdi-plus</v-icon>
            </v-btn>
            <v-btn fab v-if="passager >= passagerMax" style="cursor:not-allowed;" dark class="btn" outlined icon>
              <v-icon large>mdi-plus</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <div class="md:mt-40">
        <v-row class="mx-auto">
          <v-menu
            ref="menuOne"
            v-model="menuOne"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                style="font-size: 1.2rem"
                dark
                color="#D7AC22"
                v-model="date"
                label="Date de la réservation"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              no-title
              scrollable
              :first-day-of-week="1"
              locale="fr"
              color="#8f7213"
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="#8f7213"
                @click="menuOne = false"
              >
                Annuler
              </v-btn>
              <v-btn
                text
                color="#8f7213"
                @click="$refs.menuOne.save(date)"
              >
                Valider
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-row>
      </div>
      <div class="md:mt-40 sm:-mt-4">
        <v-row class="mx-auto">
          <v-menu
            ref="menuTwo"
            v-model="menuTwo"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                style="font-size: 1.2rem"
                dark
                color="#D7AC22"
                v-model="time"
                label="Heure de la réservation"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menuTwo"
              v-model="time"
              format="24hr"
              full-width
              color="#8f7213"
              @click:minute="$refs.menuTwo.save(time)"
            ></v-time-picker>
          </v-menu>
        </v-row>
      </div>
      <div class="md:mt-28 sm:-mt-7">
        <v-text-field
            v-model="start"
            label="Lieu de départ"
            clearable
            dark
            style="font-size: 1rem"
            name="user_start"
          ></v-text-field>
          <p v-if="showStart == true" class="absolute text-red-500 text-xs -mt-5">Lieu de départ invalide</p>
      </div>
      <div class="md:mt-28 sm:-mt-10">
        <v-select
          dark
          style="font-size: 1.2rem"
          v-model="end"
          :items="endItems"
          label="Lieu d’arrivé"
        ></v-select>
        <p v-if="showEnd == true" class="absolute text-red-500 text-xs -mt-5">Lieu d'arrivé invalide</p>
      </div>
      <div class="mx-auto md:mt-28 sm:-mt-5 sm:mb-10">
        <button @click="testReservation()" class="valider text-xl text-white font-bold py-2 px-4">
          Valider
        </button>
      </div>
    </div>
    <div v-if="resultReservation == true" class="mx-auto container grid md:grid-cols-3 sm:grid-cols-1 gap-10 md:mt-20">
      <div class="text-white bg-black pt-2 pb-2 pl-4 pr-4 md:-mt-8">
        {{name}}
      </div>
      <div class="text-white bg-black pt-2 pb-2 pl-4 pr-4 md:-mt-8">
        {{tel}}
      </div>
      <div class="text-white bg-black pt-2 pb-2 pl-4 pr-4 md:-mt-8">
        {{email}}
      </div>
      <div class="text-white bg-black pt-2 pb-2 pl-4 pr-4 md:mt-32">
        {{passager}} passager(s)
      </div>
      <div class="text-white bg-black pt-2 pb-2 pl-4 pr-4 md:mt-32">
        le {{date}}
      </div>
      <div class="text-white bg-black pt-2 pb-2 pl-4 pr-4 md:mt-32">
        à {{time}}
      </div>
      <div class="text-white bg-black pt-2 pb-2 pl-4 pr-4 md:mt-32">
        de : {{start}}
      </div>
      <div class="text-white bg-black pt-2 pb-2 pl-4 pr-4 md:mt-32">
        vers : {{end}}
      </div>
      <div class="mx-auto md:mt-32">
        <button @click="cancelReservation()" class="valider text-xl text-white font-bold py-2 px-4 mr-5">
          Modifier
        </button>
        <button @click="sendReservation()" class="valider text-xl text-white font-bold py-2 px-4 ml-5">
          Envoyer
        </button>
      </div>
    </div>
    <div v-if="successReservation == true" class="container mx-auto grid grid-cols-1 gap-0">
      <p class="text-center text-white xl:text-4xl sm:text-lg mt-48">
        Réservation envoyée avec succès ! 🎉
        <br><br><br>
        À très vite ! 👋
      </p>
    </div>
  </v-app>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data: () => ({
    templateParams: null,
    editReservation: true,
    resultReservation: false,
    successReservation: false,
    name: "",
    tel: "",
    email: null,
    passager: 1,
    passagerMax: 4,
    passagerMin: 1,
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menuOne: false,
    time: new Date().getHours() + ":" + new Date().getMinutes(),
    menuTwo: false,
    start: null,
    end: null,
    endItems: [
      'Carnon-Plage / Palavas',
      'Aéroport',
      'Gare St-Roch',
      'Montpellier Centre',
      'Gare Sud de France',
      'La Grande-Motte',
      'Le Grau-du-Roi',
      'Vias',
      'AUTRE'
    ],
    selected: null,
    showName: false,
    showTel: false,
    showEmail: false,
    showStart: false,
    showEnd: false,
    
  }),
  methods: {
    sendReservation() {
      this.templateParams = {
        name: this.name,
        tel: this.tel,
        email: this.email,
        passager: this.passager,
        date: this.date,
        time: this.time,
        start: this.start,
        end: this.end
      }
      emailjs.send('service_95xprd8', 'template_fin6nem', this.templateParams)
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
        this.editReservation = false
        this.resultReservation = false
        this.successReservation = true
      }, (error) => {
        console.log('FAILED...', error);
      });
    },
    cancelReservation() {
      this.editReservation = true
      this.resultReservation = false
    },
    testReservation() {
      const nameRegex = /^[a-z ,.'-]+$/i
      const telRegex = /^((\+)33|0|0033)[1-9](\d{2}){4}$/g;
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (isNaN(this.name) && this.name.length >= 3 && nameRegex.test(this.name)) {
        this.showName = false
      } else {
        this.showName = true
      }
      if (this.tel != null && this.tel.length <= 10 && telRegex.test(this.tel)) {
        this.showTel = false
      } else {
        this.showTel = true
      }
      if (emailRegex.test(this.email)) {
        this.showEmail = false
      } else {
        this.showEmail = true
      }
      if (this.start != null && this.start.length >= 3) {
        this.showStart = false
      } else {
        this.showStart = true
      }
      if (this.end != null) {
        this.showEnd = false
      } else {
        this.showEnd = true
      }
      if (this.showName == false && this.showTel == false && this.showEmail == false && this.showStart == false && this.showEnd == false) {
        this.editReservation = false
        this.resultReservation = true
      }
    },
  },
  mounted() {
  }
}
</script>

<style scoped>
.btn {
  background-color: rgba(215, 172, 34, .3);
  color: white
}

.valider {
  background-color: #D7AC22;
}

.valider:hover {
  transition: .3s;
  background-color: #8f7213;
}
</style>