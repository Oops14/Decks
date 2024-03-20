import { Dispatch } from 'redux'
import { decksApi } from './decks-api.ts'
import { addDeckAC, getDecksAC } from './decks-reducer'

export const getDescksTC = () => {
  return (dispatch: Dispatch) => {
    decksApi.getDecks().then((res) => {
      dispatch(getDecksAC(res.data.items))
    })
  }
}

export const addDesckTC = (title: string) => {
  return (dispatch: Dispatch) => {
    decksApi.addDeck(title).then((res) => {
      dispatch(addDeckAC(res.data))
    })
  }
}