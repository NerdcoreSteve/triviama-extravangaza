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

const ScoreScreen = ({changeScreen}) =>
  <View style={style.container}>
    <Text
      style={style.boldText}>
        Score!
    </Text>
  </View>

const mapStateToProps = ({}) => ({})
const mapDispatchToProps = dispatch => ({
  changeScreen: screen => dispatch({type: 'CHANGE_SCREEN', screen}),
})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreScreen)
