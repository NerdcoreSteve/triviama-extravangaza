const validScreens = [
  'start',
  'questions',
]

const initialState = {
  screen: 'start'
}

export default (state = initialState, action) => {
  console.log(action)
  switch(action.type) {
    case 'CHANGE_SCREEN':
      return validScreens.includes(action.screen)
        ? {
          ...state,
          screen: action.screen
        }
        : state
    default:
      return state
  }
}
