import R from 'ramda'
import he from 'he'

import {futurizeP} from 'futurize'
import Task from 'data.task'
const futurizePromise = futurizeP(Task)
const fetchTask = futurizePromise(fetch)

const getQuestions = () =>
  fetchTask('https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean')
    .map(R.pipe(R.prop('_bodyText'), JSON.parse))
    .chain(response =>
      response.response_code === 0
        ? Task.of(response.results)
        : Task.rejected(response.results))
    .map(
      R.map(
        R.mapObjIndexed(
          (value, key) =>
            key === 'category' || key === 'correct_answer' || key === 'question'
              ? he.decode(value)
              : value)))
    .map(questions => ({type: 'GOT_QUESTIONS', questions}))
    .rejectedMap(() => ({type: 'CHANGE_SCREEN', screen: 'noQuestions'}))

export {getQuestions}
