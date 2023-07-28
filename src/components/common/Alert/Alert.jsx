import { useState } from 'react'
import { variants } from './variants'

const Alert = ({ variant, text }) => {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  if (open) {
    const alertVariant = variants[variant]
    return (
      <div
        className='alert-container'
        style={{
          background: alertVariant.mainColor,
          border: '0.1rem solid ' + alertVariant.secondaryColor
        }}
      >
        <div
          className='symbol-container'
          style={{ background: alertVariant.secondaryColor }}
        >
          <span className='material-symbols-outlined symbol'>
            {alertVariant.symbol}
          </span>{' '}
        </div>
        <div className='description-container'>
          <span className='description-title'>{alertVariant.title}:</span>
          <span className='description-text'>{` ${text}`}</span>
        </div>
        <button className='symbol-close-link' onClick={handleClose}>
          <span className='material-symbols-outlined'>close</span>
        </button>
      </div>
    )
  } else return null
}
export default Alert
