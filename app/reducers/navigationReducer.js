import { AppContainer } from '../router'
import { NavigationActions } from 'react-navigation'

const initialAction = { type: NavigationActions.Init }
const initialState = AppContainer.router.getStateForAction(initialAction)

export default (state = initialState, action) => {
  return AppContainer.router.getStateForAction(action, state)
}