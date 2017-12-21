import R  from 'ramda'

import React from 'react'
import {connect} from 'react-redux'

import {Text, View} from 'react-native'
import Button from 'react-native-button'

import styles from './styles'
import {createChangeToLoadingAndGetQuestions} from './dispatchFunctions'

const StartScreen = ({changeToLoadingAndGetQuestions}) =>
  <View style={styles.container}>
    <Text
      style={styles.boldText}>
        Welcome To The{"\n"}Trivia Challenge!
    </Text>
    <Text style={styles.text}>
      You will be presented with 10 true or false questions.
    </Text>
    <Text style={styles.text}>Can you score 100%?</Text>
    <Button
      style={styles.text}
      containerStyle={styles.buttonContainer}
      onPress={changeToLoadingAndGetQuestions}>
        BEGIN
    </Button>
  </View>

const mapDispatchToProps = dispatch => ({
  changeToLoadingAndGetQuestions: createChangeToLoadingAndGetQuestions(dispatch)
})

export default connect(R.identity, mapDispatchToProps)(StartScreen)
