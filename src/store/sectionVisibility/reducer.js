import { TOGGLE_SECTION_VISIBILITY } from './actionTypes'

const initialState = {
  sections: {
    header: true,
    main: true,
    bigCommunity: true,
    stories: true,
    joinOurProgram: true
  }
}

export default function sectionVisibilityReducer (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
  case TOGGLE_SECTION_VISIBILITY:
    const { sections } = state
    const sectionName = payload

    return {
      ...state,
      sections: {
        ...sections,
        [sectionName]: !sections[sectionName]
      }
    }

  default:
    return state
  }
}
