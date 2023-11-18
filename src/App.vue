<script>
// Importazione dei singoli componenti
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
// import Games from './components/Games.vue';
// import NewsLetter from './components/NewsLetter.vue';
import MainContent from './components/MainContent.vue';
import { store } from './store';

// Registrazione dei singoli componenti
export default {
  components: {
    PageHeader,
    PageFooter,
    // Games,
    MainContent,
    // NewsLetter,
  },
  data() {
    return {
      store: store,
    }
  }
}
</script>

<template>
  <PageHeader :item="menuItem" />
  <!-- <Games :item="gameLogos"/> -->
  <!-- <NewsLetter /> -->
  <MainContent />
  <PageFooter />
</template>

<style lang="scss">

@use './styles/general.scss'
</style>
