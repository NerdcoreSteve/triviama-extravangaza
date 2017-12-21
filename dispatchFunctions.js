import {getQuestions} from './Tasks'

const createChangeToLoadingAndGetQuestions = dispatch => () => {
  dispatch({type: 'CHANGE_SCREEN', screen: 'loadingQuestions'})
  dispatch(getQuestions())
}

export {
  createChangeToLoadingAndGetQuestions,
}
