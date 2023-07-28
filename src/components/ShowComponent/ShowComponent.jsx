import { useState } from 'react'

function ShowComponent ({ children, titleSection }) {
  const [isSectionVisible, setIsSectionVisible] = useState(true)

  const handleSendData = () => {
    setIsSectionVisible((prevState) => !prevState)
  }

  return (
    <div className='show-component'>
      <div className='row'>
        <h2>{titleSection}</h2>
        <button className='btn' onClick={handleSendData}>
          {isSectionVisible ? <p>Hide Section</p> : <p>Show Section</p>}
        </button>
      </div>
      {isSectionVisible && <div>{children}</div>}
    </div>
  )
}

export default ShowComponent
