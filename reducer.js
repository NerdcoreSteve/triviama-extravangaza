import R from 'ramda'

const validScreens = [
  'start',
  'questions',
  'score',
]

const initialState = {
  screen: 'start',
  questionIndex: 0,
  questions: [
    {
      category: 'Entertainment: Video Games',
      question: 'Unturned originally started as a Roblox game.',
      correct_answer: true,
    },
    {
      category: 'Banana',
      question: 'You are a banana',
      correct_answer: true,
    },
    {
      category: 'Shoes',
      question: 'Pizza tastes like poo',
      correct_answer: false,
    },
    {
      category: 'Elows: friend or foe?',
      question: 'Roll a saving throw, take half damage',
      correct_answer: false,
    },
  ],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_SCREEN':
      return validScreens.includes(action.screen)
        ? {
          ...state,
          screen: action.screen
        }
        : state
    case 'ANSWER_AND_GO_TO_NEXT_QUESTION':
      return {
        ...state,
        questions: R.adjust(
          R.assoc('answer', action.answer),
          state.questionIndex,
          state.questions),
        questionIndex: (state.questionIndex + 1) % state.questions.length,
      }
    default:
      return state
  }
}
