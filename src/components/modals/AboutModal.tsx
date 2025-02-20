import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
        Modified by -{' '}
        <a
          href="https://twitter.com/CYBERCH1CK"
          className="underline font-bold"
        >
          CYBERCH1CK
        </a>{' '}
        Find updates on the latest with -{' '}
        <a href="https://twitter.com/paimordle" className="underline font-bold">
          Paimordle
        </a>{' '}
      </p>
    </BaseModal>
  )
}
