import React from 'react'
import {connect} from 'react-redux'

import {View} from 'react-native'

import Header from './Header'
import StartScreen from './StartScreen'
import styles from './styles'

const style = {
  container: {
    flex: 1,
  }
}

const Main = state =>
  <View style={style.container}>
    <Header/>
    <StartScreen/>
  </View>

export default connect(({state}) => ({state}))(Main)
