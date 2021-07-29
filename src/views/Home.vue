<template>
  <div>
    <Welcome />
    <Quote />
    <Price />
    <Reservation />
  </div>
</template>

<script>
  import Welcome from '../components/Welcome'
  import Quote from '../components/Quote'
  import Price from '../components/Price'
  import Reservation from '../components/Reservation'

  export default {
    name: 'Home',

    components: {
      Welcome,
      Quote,
      Price,
      Reservation,
    },
  }
</script>
