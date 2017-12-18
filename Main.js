import React from 'react'
import {connect} from 'react-redux'

import {View, Text} from 'react-native'

import Header from './Header'
import StartScreen from './StartScreen'
import QuestionsScreen from './QuestionsScreen'
import ScoreScreen from './ScoreScreen'
import styles from './styles'

const display = {
  start: <StartScreen/>,
  questions: <QuestionsScreen/>,
  score: <ScoreScreen/>,
}

const style = {
  container: {
    flex: 1,
  }
}

const Main = ({screen}) =>
  <View style={style.container}>
    <Header/>
    {display[screen]}
  </View>

const mapStateToProps = ({screen}) => ({screen})

export default connect(mapStateToProps)(Main)
