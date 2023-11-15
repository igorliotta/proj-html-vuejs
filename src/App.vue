<script>
// Importazione dei singoli componenti
import PageHeader from './components/PageHeader.vue';
import { store } from './store';

// Registrazione dei singoli componenti
export default {
  components: {
    PageHeader,
  },
  data() {
    return {
      store: store,
    }
  }
}
</script>

<template>
  <PageHeader />
</template>

<style lang="scss">

@use './styles/general.scss'
</style>
