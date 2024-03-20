import { Deck } from './decks-api'

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '' as string,
  },
}

type getDecksACType = ReturnType<typeof getDecksAC>
type AddDeckACType = ReturnType<typeof addDeckAC>

type DecksState = typeof initialState;

export const getDecksAC = (decks: Deck[]) => {
  return {
    type: 'GET_DECKS',
    payload: {
      decks,
    },
  } as const
}

export const addDeckAC = (deck: Deck) => {
  return {
    type: 'ADD_DECK',
    payload: {
      deck,
    },
  } as const
}

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'GET_DECKS': {
      return { ...state, decks: action.payload.decks }
    }
    case 'ADD_DECK': {
      return { ...state, decks: [action.payload.deck, ...state.decks] }
    }
    default:
      return state
  }
}

type DecksActions = getDecksACType | AddDeckACType;
