import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useFetchDecks } from './useFetchDecks.ts'
import { useEffect } from 'react'
import { decksApi } from '../decks-api.ts'

export const DecksList = () => {
  const { decks } = useFetchDecks()

  return (
    <ul className={s.list}>
      {decks.map(deck => {
        return <DeckItem key={deck.id} deck={deck} />
      })}
    </ul>
  )
}
