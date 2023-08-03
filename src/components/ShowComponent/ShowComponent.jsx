import { connect } from 'react-redux'

import { toggleSectionVisibility } from '../../store/sectionVisibility/actionCreators'

export function ShowComponent ({ children, titleSection, sections, toggleSectionVisibility, sectionName }) {
  const isSectionVisible = sections[sectionName]

  const handleSendData = () => {
    toggleSectionVisibility(sectionName)
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

const mapStateToProps = (state) => {
  return {
    sections: state.sectionVisibility.sections
  }
}

const mapDispatchToProps = {
  toggleSectionVisibility
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowComponent)
