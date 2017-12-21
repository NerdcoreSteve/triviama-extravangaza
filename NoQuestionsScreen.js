import R  from 'ramda'

import React from 'react'
import {connect} from 'react-redux'

import {Text, View} from 'react-native'
import Button from 'react-native-button'

import styles from './styles'
import {createChangeToLoadingAndGetQuestions} from './dispatchFunctions'

const style = {
  container: {
    ...styles.container,
    justifyContent: 'space-around',
  },
}

const NoQuestionsScreen = ({changeToLoadingAndGetQuestions}) =>
  <View style={style.container}>
    <Text style={styles.boldText}>
      {`Couldn't load any questions.\nMaybe you're not connected to the internet?`}
    </Text>
    <Button
      style={styles.text}
      onPress={changeToLoadingAndGetQuestions}>
        TRY LOADING QUESTIONS AGAIN?
    </Button>
  </View>

const mapDispatchToProps = dispatch => ({
  changeToLoadingAndGetQuestions: createChangeToLoadingAndGetQuestions(dispatch)
})

export default connect(R.identity, mapDispatchToProps)(NoQuestionsScreen)
