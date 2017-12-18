import R  from 'ramda'

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

const StartScreen = ({changeScreen}) =>
  <View style={style.container}>
    <Text
      style={style.boldText}>
        Welcome To The{"\n"}Trivia Challenge!
      </Text>
    <Text style={styles.text}>
      You Will be presented with 10 True or False Questions.
    </Text>
    <Text style={styles.text}>Can you score 100%?</Text>
    <Button
      style={styles.text}
      onPress={() => changeScreen('questions')}>
        BEGIN
    </Button>
  </View>

const mapDispatchToProps = dispatch => ({
  changeScreen: screen => dispatch({type: 'CHANGE_SCREEN', screen}),
})

export default connect(R.identity, mapDispatchToProps)(StartScreen)
