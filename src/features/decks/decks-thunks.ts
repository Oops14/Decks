import { Dispatch } from 'redux'
import { decksApi } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, getDecksAC } from './decks-reducer'
import { AppDispatch } from '../../app/store.ts'

export const getDescksTC = () => {
  return (dispatch: Dispatch) => {
    decksApi.getDecks().then((res) => {
      dispatch(getDecksAC(res.data.items))
    })
  }
}

export const addDesckTC = (title: string) => {
  return (dispatch: AppDispatch) => {
    return decksApi.addDeck(title).then(() => {
      //      dispatch(addDeckAC(res.data))
      dispatch(getDescksTC())
    })
  }
}

export const deleteDesckTC = (id: string) => {
  return (dispatch: Dispatch) => {
    decksApi.deleteDeck(id).then((res) => {
      dispatch(deleteDeckAC(id))
    })
  }
}
