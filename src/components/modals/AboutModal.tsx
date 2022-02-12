import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        This is an open source clone of the game Wordle -{' '}
        <a href="https://github.com/klappy/wordle" className="underline font-bold" target='_blank' rel='noreferrer'>
          check out the code here
        </a>{' '}
        and{' '}
        <a href="https://www.powerlanguage.co.uk/wordle/" className="underline font-bold" target='_blank' rel='noreferrer'>
          play the original here.
        </a>
      </p>
      <p className="text-sm text-gray-500">
        The word list is created from the{' '}
        <a href='https://www.unfoldingword.org/ult' className='underline font-bold' target='_blank' rel='noreferrer'>
          ULT
        </a>{' '}
        translation<br /> by {' '}
        <a href='https://www.unfoldingword.org' className='underline font-bold' target='_blank' rel='noreferrer'>
          unfoldingWord
        </a>{' '}
        used as a translation resource for Bible translators.
      </p>
      <p className="text-sm text-gray-500">
        <button
          type="button"
          className="mx-auto mt-8 flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 select-none"
          onClick={()=> window.open("https://unfoldingword.secure.force.com/donate/DonationPage?id=7014T000000gfudQAA", "_blank")}
        >
          Give to support open-licensed tools!
        </button>
        {' '}<br />
      </p>
      <p className="text-sm text-gray-500">
          When you{' '}
          <a href='https://www.unfoldingword.org' className='underline font-bold' target='_blank' rel='noreferrer'>
            give to unfoldingWord
          </a>
          , you are equipping and empowering church networks worldwide with free and open-licensed tools to translate the Word of God with excellence.
      </p>
    </BaseModal>
  )
}
