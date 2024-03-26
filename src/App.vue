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
    }
  },
  mounted() {
    this.getApi(),
      this.getName()
  }
}
</script>

<template>
  <Header />
  <Main />
</template>



<style lang="scss">
@use './assets/scss/main.scss';
</style>