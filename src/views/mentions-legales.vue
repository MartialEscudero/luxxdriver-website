<template>
  <div style="background-color: #202020;" class="flex">
    <router-link to="/">
      <button class="btnBack bg-yellow-400 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded inline-flex items-center xl:text-base sm:text-xs">
        Retour à l'accueil
      </button>
    </router-link>
    <div class="m-auto container mt-10 mb-10">
      <h1 class="text-white font-bold md:text-left sm:text-center text-6xl mb-16">Mentions légales</h1>
        <section class="md:text-base sm:text-sm">
          <h2 class="font-bold text-2xl md:ml-10 mb-5">Éditeur du site</h2>
          <p><span>Forme juridique : </span>SASU - LUXX DRIVER</p>
          <p><span>Numéro de SIRET : </span>89790852100015</p>
          <p><span>Responsable : </span>Brian BARRAL</p>
          <p><span>Adresse : </span>97 rue du Grau - 34130 Maugio, France</p>
          <p><span>Téléphone : </span>06 44 24 90 76</p>
          <p><span>Email : </span>luxxdriver.contact@gmail.com</p>
          <p><span>Site Web : </span>www.luxxdriver.com</p>
          <p><span>Gouv.fr : </span><a href="https://annuaire-entreprises.data.gouv.fr/etablissement/89790852100015" target="_blank">annuaire-entreprises.data.gouv.fr</a></p>
        </section >
        <section class="md:text-base sm:text-sm">
          <h2 class="font-bold text-2xl md:ml-10 mb-5">Hébergement</h2>
          <p><span>Société : </span>OVH</p>
          <p><span>Siège social : </span>2 rue Kellermann - 59100 Roubaix, France</p>
          <p><span>Téléphone : </span>+33 (0)8 99 70 17 61</p>
          <p><span>Site Web : </span>www.ovh.com</p>
        </section>
        <section class="md:text-base sm:text-sm">
          <h2 class="font-bold text-2xl md:ml-10 mb-5">Développement & Conception</h2>
          <p><span>Entité : </span>4cent4</p>
          <p><span>Nom : </span>Martial ESCUDERO</p>
          <p><span>Site Web : </span>www.4cent4.fr</p>
          <p><span>Commentaire : </span>Site réalisé bénévolement dans le cadre d'un entrainement au Développement Web.</p>
        </section>
        <section>
          <h2 class="font-bold text-2xl md:ml-10 mb-5">Données personnelles</h2>
          <p class="md:text-base sm:text-sm text-justify">
            La Société s'engage à respecter la confidentialité des données personnelles communiquées et à les traiter dans le respect de la loi Informatique et Libertés n° 78-17 du 6 janvier 1978. Le règlement (UE) n° 2016/679 du Parlement européen et du Conseil du 27 avril 2016 Règlement relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données, est entré en vigueur le 25 mai 2018 est également respecté.
            <br><br>
            Les données personnelles partagées ne sont pas conservées et immédiatement détruites après l'envoi du formulaire.
            <br><br>
            Aux fins d’empêcher qu’elles ne soient déformées, endommagées ou que des tiers non autorisés y aient accès, la Société s’engage à réaliser ses meilleurs efforts en vue de garantir la sécurité des informations personnelles recueillies à partir du Service.
          </p>
        </section>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo () {
    return {
      title : 'Mentions légales',
    }
  },
  mounted() {
    window.scroll(0, 0)
  }
}
</script>

<style scoped>
section h2 {
  color: #D7AC22;
}

section span {
  color: #D7AC22;
  font-weight: bold;
  text-transform: uppercase;
  padding-right: .3rem;
}

section p {
  color: white;
}

section p a {
  color: #D7AC22;
}

section p a:hover {
  transition: .5s;
  background: #D7AC22;
  color: #0e0e0e;
}

section {
  margin-top: 5rem;
  margin-bottom: 2rem;
  margin-right: .5rem;
  margin-left: .5rem;
}

.btnBack {
  display: block;
  position: fixed;
  z-index: 1;
  bottom: 15px;
  right: 15px;
}
</style>