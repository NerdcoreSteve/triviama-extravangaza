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

const addAnswer = (answer, questionIndex, questions) =>
  R.adjust(
    R.pipe(
      R.assoc('answer', answer),
      question =>
        R.assoc(
          'got_correct_answer',
          question.answer === question.correct_answer,
          question)),
    questionIndex,
    questions)

export default (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_SCREEN':
      return {
          ...state,
          screen: validScreens.includes(action.screen)
            ? action.screen
            : state.screen
        }
    case 'ANSWER_AND_GO_TO_NEXT_QUESTION':
      return {
        ...state,
        questions: addAnswer(action.answer, state.questionIndex, state.questions),
        questionIndex: (state.questionIndex + 1) % state.questions.length,
      }
    case 'ANSWER_AND_GET_SCORE':
      return {
        ...state,
        screen: 'score',
        questions: addAnswer(action.answer, state.questionIndex, state.questions),
      }
    case 'RESTART':
      return initialState
    default:
      return state
  }
}
