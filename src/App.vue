<script>
import axios from 'axios';
import { store } from './data/store.js'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getApi() {
      axios.get(this.store.apiUrl, {
        params: store.queryParams
      })
        .then(result => {
          this.store.cardsList = result.data.results
          console.log(this.store.cardsList);
        })
        .catch(error => {
          console.log(error);
        })
    },
    getName() {
      axios.get(this.store.nameUrl)
        // Qui mappo l'array e ottengo solo i nomi
        .then(result => {
          this.store.nameList = result.data.results.map(item => item.name);
          console.log(this.store.nameList);
        })
    },
    getStatus() {
      axios.get(this.store.statusUrl)
        // Qui mappo l'array e ottengo solo gli status
        .then(result => {
          this.store.statusList = result.data.results.map(item => item.status);
          console.log(this.store.statusList);
        })
    },
    getSpecies() {
      axios.get(this.store.speciesUrl)
        // Qui mappo l'array e ottengo solo le species
        .then(result => {
          this.store.speciesList = result.data.results.map(item => item.species);
          console.log(this.store.speciesList);
        })
    }
  },
  mounted() {
    this.getApi(),
      this.getName(),
      this.getSpecies(),
      this.getStatus()
  }
}
</script>

<template>
  <Header @startSearch="getApi" />
  <Main />
</template>



<style lang="scss">
@use './assets/scss/main.scss';
</style>