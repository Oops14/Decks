import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { useEffect } from 'react'
import { getDescksTC } from '../decks-thunks.ts'
import { Deck } from '../decks-api.ts'


export const useFetchDecks = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(state => state.decksReducer.decks)

  useEffect(() => {
    dispatch(getDescksTC())
  }, [])

  return { decks }
}