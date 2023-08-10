import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import sectionVisibilityReducer from './sectionVisibility/reducer'
import employeesReducer from './fetchEmployes/reducer'
import subscribeReducer from './subscriberState/reducer'

export const reducers = combineReducers({
  sectionVisibility: sectionVisibilityReducer,
  employees: employeesReducer,
  suscriber: subscribeReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store
