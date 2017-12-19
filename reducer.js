import R from 'ramda'

const validScreens = [
  'start',
  'questions',
  'score',
  'noQuestions',
  'loadingQuestions',
]

const initialState = {
  screen: 'start',
  questionIndex: 0,
  questions: [],
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
    case 'GOT_QUESTIONS':
      return {
        ...state,
        screen: 'questions',
        questions: action.questions,
      }
    default:
      return state
  }
}
