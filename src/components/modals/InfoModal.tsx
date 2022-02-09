import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="L" status="correct" />
        <Cell value="I" />
        <Cell value="Y" />
        <Cell value="U" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" />
        <Cell value="O" />
        <Cell value="R" status="present" />
        <Cell value="A" />
        <Cell value="X" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter R is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="R" />
        <Cell value="O" />
        <Cell value="C" />
        <Cell value="K" status="absent" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter K is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
