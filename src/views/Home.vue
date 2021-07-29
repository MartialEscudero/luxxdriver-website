<template>
  <div>
    <Welcome />
    <Quote />
  </div>
</template>

<script>
  import Welcome from '../components/Welcome'
  import Quote from '../components/Quote'

  export default {
    name: 'Home',

    components: {
      Welcome,
      Quote,
    },
  }
</script>
