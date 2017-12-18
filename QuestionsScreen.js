import R from 'ramda'

import React from 'react'
import {connect} from 'react-redux'

import {Text, View} from 'react-native'
import Button from 'react-native-button'
import {Card} from 'react-native-elements'

import styles from './styles'

const boldText = {
  ...styles.text,
  fontWeight: 'bold'
}

const style = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  boldText,
  trueFalse: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  card :{
    marginTop: '10%',
    borderWidth: 3,
    borderRadius: 20,
  },
  pagination: {
    ...styles.text,
    marginTop: '5%',
    fontSize: styles.text.fontSize * (2/3),
  },
  category: {
    ...boldText,
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
    getScore
  }) =>
    <View style={style.container}>
      <Text style={style.category}>{question.category}</Text>
      <Card containerStyle={style.card}>
        <Text style={styles.text}>{question.question}</Text>
        <View style={style.trueFalse}>
          <FunctionFlagButton
            text='True'
            flag={finalQuestion}
            func1={getScore}
            func2={() => answerAndGoToNextQuestion(false)}/>
          <FunctionFlagButton
            text='False'
            flag={finalQuestion}
            func1={getScore}
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
  getScore: () => dispatch({type: 'CHANGE_SCREEN', screen: 'score'}),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen)
