<script>
// Importazione dei singoli componenti
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
import { store } from './store';

// Registrazione dei singoli componenti
export default {
  components: {
    PageHeader,
    PageFooter,
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
  <PageFooter />
</template>

<style lang="scss">

@use './styles/general.scss'
</style>
