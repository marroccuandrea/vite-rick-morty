<script>
import { store } from '../data/store'
export default {
  data() {
    return {
      store,
      nameSearch: '',
      statusSearch: '',
      speciesSearch: ''
    }
  },
  methods: {
    startSearch() {
      console.log('ricerca');
      this.store.queryParams = {
        name: this.nameSearch,
        status: this.statusSearch,
        species: this.speciesSearch
      };
      this.$emit('startSearch')
    },
  },

}
</script>;


<template>
  <div class="text-center my-5">
    <h1>{{ store.mainTitle }}</h1>
  </div>
  <div class="container d-flex justify-content-center">
    <div class="row row-cols-3">
      <div class="col">
        <!-- Input searchbar -->
        <input class="form-control w-100" list="datalistOptions" id="exampleDataList" placeholder="Ricerca per nome"
          v-model.trim="nameSearch" @keyup.enter="startSearch">
        <datalist id="datalistOptions">
          <!-- Ottengo la preview dei nomi nella searchbar da utilizzare per l'autocomplete -->
          <option v-for="(name, index) in this.store.nameList" :key="index" :value="name"></option>
        </datalist>
      </div>
      <!-- Select menu status -->
      <div class="col">
        <select v-model="statusSearch" @change="startSearch" class="form-select">
          <option selected>Select Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
      <div class="col">
        <div class="col">
          <select v-model="speciesSearch" @change="startSearch" class="form-select">
            <option selected>Select Species</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
            <option value="Robot">Robot</option>
          </select>
        </div>
      </div>

    </div>
  </div>
</template>



<style lang="scss" scoped></style>