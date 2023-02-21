import React from 'react'
import { Tooltip } from 'react-tooltip'
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}
const Button: React.FC<IButtonProps> = ({ title, ...rest }) => {
  return (
    <>
      {' '}
      <button
        data-tooltip-id='btn-request'
        data-tooltip-place='bottom'
        data-tooltip-position-strategy='fixed'
        data-tooltip-delay-hide={2000}
        data-tooltip-content='Request was send'
        className='bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded mb-5'
        {...rest}
      >
        {title.toUpperCase()}
      </button>
      <Tooltip id='btn-request' style={{ fontSize: '18px' }} events={['click']} />
    </>
  )
}

export default Button
