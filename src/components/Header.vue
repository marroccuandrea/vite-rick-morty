<script>
import { store } from '../data/store'
export default {
  data() {
    return {
      store,
      nameSearch: ''
    }
  },
  methods: {
    startSearch() {
      console.log('ricerca');
      this.store.queryParams = {
        name: this.nameSearch
      }
      this.$emit('startSearch')
    }
  }

}
</script>;


<template>
  <div class="text-center my-5">
    <h1>{{ store.mainTitle }}</h1>
  </div>
  <div class="container d-flex justify-content-center">
    <div class="row">
      <div class="col">
        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Ricerca per nome"
          v-model.trim="nameSearch" @keyup.enter="startSearch">
        <datalist id="datalistOptions">
          <!-- Ottengo la preview dei nomi nella searchbar da utilizzare per l'autocomplete -->
          <option v-for="(name, index) in this.store.nameList" :key="index" :value="name">
          </option>
        </datalist>
      </div>
      <!-- <div class="col-4">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Select Status
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Name</a></li>
            <li><a class="dropdown-item" href="#">Status</a></li>
            <li><a class="dropdown-item" href="#">Species</a></li>
          </ul>
        </div>
      </div> -->

    </div>
  </div>
</template>



<style lang="scss" scoped></style>