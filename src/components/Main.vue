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
      <Card class="mb-5" v-for="card in this.store.cardsList" :key="card.id" :name="card.name" :status="card.status" :species="card.species" :image="card.image"/>

    </div>

  </div>
</template>



<style lang="scss" scoped></style>