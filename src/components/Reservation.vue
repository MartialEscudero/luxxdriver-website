<template>
  <v-app style="background-color: #202020; color: #D7AC22">
    <h1 class="container mx-auto text-4xl font-bold xl:mt-20 sm:mt-10 text-left xl:mb-10">
      Réservation
    </h1>
    <div v-if="editReservation == true" class="mx-auto container grid xl:grid-cols-3 sm:grid-cols-1 gap-10 xl:mt-20">
      <div class="xl:-mt-14">
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
      <div class="mx-auto xl:mt-28 sm:-mt-7">
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
      <div class="xl:mt-40">
        <v-row class="mx-auto">
          <v-menu
            ref="menu"
            v-model="menu"
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
                @click="menu = false"
              >
                Annuler
              </v-btn>
              <v-btn
                text
                color="#8f7213"
                @click="$refs.menu.save(date)"
              >
                Valider
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-row>
      </div>
      <div class="xl:mt-40 sm:-mt-4">
        <v-row class="mx-auto">
          <v-menu
            ref="menu"
            v-model="menu2"
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
              v-if="menu2"
              v-model="time"
              format="24hr"
              full-width
              color="#8f7213"
              @click:minute="$refs.menu.save(time)"
            ></v-time-picker>
          </v-menu>
          <v-spacer></v-spacer>
        </v-row>
      </div>
      <div class="xl:mt-28 sm:-mt-7">
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
      <div class="xl:mt-28 sm:-mt-10">
        <v-select
          dark
          style="font-size: 1.2rem"
          :items="end"
          label="Lieu d’arrivé"
        ></v-select>
      </div>
      <div class="mx-auto xl:mt-28 sm:-mt-10">
        <button @click="sendReservation()" class="valider text-xl text-white font-bold py-2 px-4">
          Valider
        </button>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    editReservation: true,
    resultReservation: false,
    name: "",
    tel: "",
    email: null,
    passager: 1,
    passagerMax: 4,
    passagerMin: 1,
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    time: new Date().getHours() + ":" + new Date().getMinutes(),
    menu2: false,
    hour: null,
    start: null,
    end: [
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
    
  }),
  methods: {
    sendReservation() {
      const nameRegex = /^[a-z ,.'-]+$/i
      const telRegex = /^((\+)33|0|0033)[1-9](\d{2}){4}$/g;
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (isNaN(this.name) && this.name.length >= 3 && nameRegex.test(this.name)) {
        this.setError()
      } else {
        this.showName = true
      }
      if (this.tel.length <= 10 && telRegex.test(this.tel)) {
        this.setError()
      } else {
        this.showTel = true
      }
      if (emailRegex.test(this.email)) {
        this.setError()
      } else {
        this.showEmail = true
      }
      if (this.start != null && this.start.length >= 3) {
        this.setError()
        this.editReservation = false
        this.resultReservation = true
      } else {
        this.showStart = true
      }
    },
    setError() {
      this.showName = false
      this.showTel = false
      this.showEmail = false
      this.showStart = false
    }
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