<script>
import { store } from '../data/store'
import Card from './partials/Card.vue'
export default {
  components: {
    Card
  },
  data() {
    return {
      store
    }
  }
}
</script>


<template>
  <div class="text-center my-5 container">
    <!-- <input class="form-control" type="text" v-model="store.mainTitle"> -->
    <div class="row row-cols-4">
      <Card v-for="card in this.store.cardsList" :key="card.id" />

    </div>

  </div>
</template>



<style lang="scss" scoped></style>