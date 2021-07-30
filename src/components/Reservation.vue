<template>
  <v-app style="background-color: #202020; color: #D7AC22">
    <h1 class="container mx-auto lg:text-left sm:text-center text-4xl font-bold mt-32">
      Réservation
    </h1>
    <div class="mx-auto container grid xl:grid-cols-3 sm:grid-cols-1 gap-10 mt-10">
      <div>
        <input placeholder="Nom" v-model="name" class="input xl:text-2xl sm:text-lg" type="text" name="user_name">
      </div>
      <div>
        <input placeholder="Numéro" v-model="tel" class="input xl:text-2xl sm:text-lg" type="tel" name="user_tel">
      </div>
      <div>
        <input placeholder="E-mail" v-model="email" class="input xl:text-2xl sm:text-lg" type="text" name="user_email">
      </div>
      <div class="mx-auto">
        <p class="text-center text-white">Nombre de passagers</p><br>
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
      <div class="mt-15">
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
      <div class="mt-15">
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
      <div>
        <input placeholder="Lieu de départ" v-model="start" class="input xl:text-2xl sm:text-lg" type="text" name="user_start">
      </div>
      <div>
        <input placeholder="Lieu d'arrivé" v-model="end" class="input xl:text-2xl sm:text-lg" type="text" name="user_end">
      </div>
      <div class="mx-auto">
        <button class="valider text-xl text-white font-bold py-2 px-4">
          Valider
        </button>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    name: null,
    tel: null,
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
    end: null,
    selected: null
  }),
  methods: {
  },
  mounted() {
  }
}
</script>

<style scoped>
input {
  width: 100%;
  outline: none;
  color: white;
  border-bottom: 1px solid white;
}

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