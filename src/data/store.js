
import { reactive } from 'vue'

export const store = reactive({
  mainTitle: 'Vite Rick e Morty',
  apiUrl: 'https://rickandmortyapi.com/api/character',
  cardsList: []
})