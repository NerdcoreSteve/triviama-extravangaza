import R  from 'ramda'

import React from 'react'
import {connect} from 'react-redux'

import {Text, View} from 'react-native'
import Button from 'react-native-button'

import styles from './styles'

const NoQuestionsScreen = ({changeScreen}) =>
  <View style={styles.container}>
    <Text style={styles.boldText}>
      {`Couldn't load any questions.\nMaybe you're not connected to the internet?`}
    </Text>
    <Button
      style={styles.text}
      onPress={() => changeScreen('questions')}>
        TRY LOADING QUESTIONS AGAIN?
    </Button>
  </View>

const mapDispatchToProps = dispatch => ({
  changeScreen: screen => dispatch({type: 'CHANGE_SCREEN', screen}),
})

export default connect(R.identity, mapDispatchToProps)(NoQuestionsScreen)
