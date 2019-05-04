import { combineReducers } from 'redux'
import { foundation } from './foundation/foundation'
import { routeState } from './route-state/route-state'


const rootReducer = combineReducers({
  foundation,
  routeState,
})

export { rootReducer }
