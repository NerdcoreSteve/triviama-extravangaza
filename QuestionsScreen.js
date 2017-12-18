import R from 'ramda'

import React from 'react'
import {connect} from 'react-redux'

import {Text, View} from 'react-native'
import Button from 'react-native-button'
import {Card} from 'react-native-elements'

import styles from './styles'

const style = {
  container: {
    ...styles.container,
    justifyContent: 'flex-start',
  },
  trueFalse: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  pagination: {
    ...styles.text,
    marginTop: '5%',
    fontSize: styles.text.fontSize * (2/3),
  },
  category: {
    ...styles.boldText,
    marginTop: '5%'
  },
}

const FunctionFlagButton = ({text, flag, func1, func2}) =>
  <Button
    onPress={flag ? func1 : func2}
    style={styles.text}>
      {text}
  </Button>

const QuestionScreen =
  ({
    question,
    questionNumber,
    numberOfQuestions,
    finalQuestion,
    answerAndGoToNextQuestion,
    answerAndGetScore
  }) =>
    <View style={style.container}>
      <Text style={style.category}>{question.category}</Text>
      <Card containerStyle={styles.card}>
        <Text style={styles.text}>{question.question}</Text>
        <View style={style.trueFalse}>
          <FunctionFlagButton
            text='True'
            flag={finalQuestion}
            func1={() => answerAndGetScore(true)}
            func2={() => answerAndGoToNextQuestion(true)}/>
          <FunctionFlagButton
            text='False'
            flag={finalQuestion}
            func1={() => answerAndGetScore(false)}
            func2={() => answerAndGoToNextQuestion(false)}/>
        </View>
      </Card>
      <Text style={style.pagination}>{questionNumber} of {numberOfQuestions}</Text>
    </View>

const mapStateToProps =
  ({questions, questionIndex}) => ({
    question: questions[questionIndex],
    questionNumber: questionIndex + 1,
    numberOfQuestions: questions.length,
    finalQuestion: questionIndex === questions.length - 1,
  })

const mapDispatchToProps = dispatch => ({
  answerAndGoToNextQuestion: answer =>
    dispatch({type: 'ANSWER_AND_GO_TO_NEXT_QUESTION', answer}),
  answerAndGetScore: answer =>
    dispatch({type: 'ANSWER_AND_GET_SCORE', answer}),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen)
