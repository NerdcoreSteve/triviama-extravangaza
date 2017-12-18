import React from 'react'
import {connect} from 'react-redux'

import {Text, View} from 'react-native'
import Button from 'react-native-button'

import styles from './styles'

const style = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boldText: {
    ...styles.text,
    fontWeight: 'bold'
  }
}

const ScoreScreen = ({questions, score, restart}) =>
  <View style={style.container}>
    <Text
      style={style.boldText}>
        {`You scored \n${score}/${questions.length}`}
    </Text>
    <Button
      style={styles.text}
      onPress={restart}>
        PLAY AGAIN?
    </Button>
  </View>

const mapStateToProps = ({questions}) => ({
  questions,
  score: questions.filter(({got_correct_answer}) => got_correct_answer).length
})
const mapDispatchToProps = dispatch => ({
  restart: () => dispatch({type: 'RESTART'}),
})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreScreen)
