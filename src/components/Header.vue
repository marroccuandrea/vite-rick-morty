<script>
import { store } from '../data/store'
export default {
  data() {
    return {
      store
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
      <div class="col-4">
        <input class="form-control" type="text">
      </div>
      <div class="col-4">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select Status
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Name</a></li>
            <li><a class="dropdown-item" href="#">Status</a></li>
            <li><a class="dropdown-item" href="#">Species</a></li>
          </ul>
        </div>
      </div>
      <div class="col-2">
        <button class="btn btn-primary">Search</button>
      </div>
      <div class="col-2">
        <button class="btn btn-warning">Reset</button>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped></style>