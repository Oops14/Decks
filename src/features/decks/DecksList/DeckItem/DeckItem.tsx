import s from './DeckItem.module.css'
import { Deck } from '../../decks-api.ts'
import { useAppDispatch } from '../../../../app/store.ts'
import { deleteDesckTC, updateDesckTC } from '../../decks-thunks.ts'
import { useState } from 'react'

type DeckProps = {
  deck: Deck[]
}

const TEST_ACC_NAME = '128702688.jpg'

export const DeckItem = ({ deck }: DeckProps) => {
  const isTestingDeck = deck.author.name === TEST_ACC_NAME
  const dispatch = useAppDispatch()

  const [isEdited, setEdited] = useState<boolean>(false)
  const [newTitle, setNewTitle] = useState<string>(deck.name)

  const updateBtn = () => {
    setEdited(!isEdited)
  }

  const setUpdatedTitle = () => {
    dispatch(updateDesckTC(deck.id, newTitle))
    setEdited(!isEdited)
  }

  const newTitleFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    let text = e.currentTarget.value
    setNewTitle(text)
  }

  const deleteBtn = () => {
    dispatch(deleteDesckTC(deck.id))
  }

  return (
    <li className={s.item}>
      <h3 className={s.title}>
        {isEdited ? (
          <>
            <input value={newTitle} onChange={newTitleFunc} type="text" />
          </>
        ) : (
          <>
            {deck.name}
            {isTestingDeck && '✨'}
          </>
        )}
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
          {isEdited ? (
            <>
              <button onClick={setUpdatedTitle}>Apply</button>
            </>
          ) : (
            <>
              <button onClick={updateBtn}>update</button>
            </>
          )}
          <button onClick={deleteBtn}>delete</button>
        </div>
      )}
    </li>
  )
}
