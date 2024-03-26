
import { reactive } from 'vue'

export const store = reactive({
  mainTitle: 'Vite Rick e Morty',
  apiUrl: 'https://rickandmortyapi.com/api/character',
  nameUrl: 'https://rickandmortyapi.com/api/character',
  cardsList: [],
  nameList: [],
  queryParams: {

  }
})