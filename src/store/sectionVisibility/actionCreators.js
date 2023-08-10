import { TOGGLE_SECTION_VISIBILITY } from './actionTypes'

export const toggleSectionVisibility = (sectionName) => {
  return {
    type: TOGGLE_SECTION_VISIBILITY,
    payload: sectionName
  }
}
