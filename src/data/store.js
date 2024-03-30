
import { reactive } from 'vue'

export const store = reactive({
  mainTitle: 'Vite Rick e Morty',
  apiUrl: 'https://rickandmortyapi.com/api/character',
  nameUrl: 'https://rickandmortyapi.com/api/character?name',//Aggiunto ?name
  statusUrl: 'https://rickandmortyapi.com/api/character/?status',
  speciesUrl: 'https://rickandmortyapi.com/api/character/?species',
  cardsList: [],
  nameList: [],
  statusList: [],
  speciesList: [],
  status: '',
  species: '',
  queryParams: {

  }
})