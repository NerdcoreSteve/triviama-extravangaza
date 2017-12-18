import React from 'react'
import {connect} from 'react-redux'

import {Text, ScrollView} from 'react-native'
import Button from 'react-native-button'
import {Card} from 'react-native-elements'

import styles from './styles'

const style = {
  buttonContainer: {
    marginTop: 30,
  },
  answerText: {
    ...styles.text,
    marginTop: 20,
  }
}

const ScoreScreen = ({questions, score, restart}) =>
  <ScrollView>
    <Text style={styles.boldText}>
      {`You scored \n${score}/${questions.length}`}
    </Text>
    {questions.map(({question, correct_answer, got_correct_answer}) =>
      <Card
        containerStyle={{
          ...styles.card,
          borderColor: got_correct_answer ? 'green' : 'red'
        }}>
          <Text style={styles.text}>{question}</Text>
          <Text style={style.answerText}>
            {correct_answer ? 'True' : 'False'}
          </Text>
      </Card>)}
    <Button
      style={styles.text}
      containerStyle={style.buttonContainer}
      onPress={restart}>
        PLAY AGAIN?
    </Button>
  </ScrollView>

const mapStateToProps = ({questions}) => ({
  questions,
  score: questions.filter(({got_correct_answer}) => got_correct_answer).length
})
const mapDispatchToProps = dispatch => ({
  restart: () => dispatch({type: 'RESTART'}),
})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreScreen)
