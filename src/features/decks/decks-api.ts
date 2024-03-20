import axios from 'axios'

export type DecksResponse = {
  items: Deck[];
  pagination: Pagination;
}
export type Author = {
  id: string;
  name: string;
}
export type Deck = {
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}
export type Pagination = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
}

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDecks() {
    return instance.get<DecksResponse>(`/v2/decks`)
  },
  addDeck(title: string) {
    return instance.post<Deck>(`/v1/decks`, {name: title})
  },
  deleteDeck(id: string) {
    return instance.delete(`/v1/decks/${id}`)
  },
}
