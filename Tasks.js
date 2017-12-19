import R from 'ramda'
import {futurizeP} from 'futurize'
import Task from 'data.task'

const futurizePromise = futurizeP(Task)
const fetchTask = futurizePromise(fetch)

const getQuestions = () =>
  fetchTask('https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean')
    .map(R.prop('_bodyText'))
    .map(JSON.parse)
    .chain(results =>
      results.response_code === 0
        ? Task.of(results)
        : Task.rejected(results))
    .map(({results: questions}) => ({type: 'GOT_QUESTIONS', questions}))
    .rejectedMap(() => ({type: 'CHANGE_SCREEN', screen: 'noQuestions'}))

export {getQuestions}
