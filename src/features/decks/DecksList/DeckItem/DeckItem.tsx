import s from './DeckItem.module.css'
import { Deck } from '../../decks-api.ts'
import { useAppDispatch } from '../../../../app/store.ts'
import { deleteDesckTC } from '../../decks-thunks.ts'

type DeckProps = {
  deck: Deck[];
}

const TEST_ACC_NAME = 'kukus'

export const DeckItem = ({ deck }: DeckProps) => {
  const isTestingDeck = deck.author.name === TEST_ACC_NAME
  const dispatch = useAppDispatch()

  const updateBtn = () => {

  }

  const deleteBtn = () => {
    dispatch(deleteDesckTC(deck.id))
  }

  return (
    <li className={s.item}>
      <h3 className={s.title}>
        {deck.name}
        {isTestingDeck && '✨'}
      </h3>
      <p className={s.characteristic}>
        <b>Author:</b> {deck.author.name}
      </p>
      <p className={s.characteristic}>
        <b>Created:</b> {new Date(deck.created).toLocaleString('ru-Ru')}
      </p>
      <p className={s.characteristic}>
        <b>Updated:</b> {new Date(deck.updated).toLocaleString('ru-Ru')}
      </p>

      {isTestingDeck && (
        <div className={s.buttonBox}>
          <button onClick={updateBtn}>update</button>
          <button onClick={deleteBtn}>delete</button>
        </div>
      )}
    </li>
  )
}
