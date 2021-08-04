<template>
  <div style="background-color: #202020;" class="flex h-screen">
    <div class="m-auto text-center">
      <h1 class="text-white font-bold text-6xl mb-10">404</h1>
      <p class="text-white">
        Désolé mais cette page n'existe pas.
        <br><a class="font-bold" href="/">Retour à la page d'accueil.</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo () {
    return {
      title : 'Error 404 !',
    }
  },
  mounted() {
    window.scroll(0, 0)
  }
}
</script>

<style scoped>
p a {
  color: #D7AC22;
}

p a:hover {
  transition: .5s;
  background: #D7AC22;
  color: #0e0e0e;
}
</style>