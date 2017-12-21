import React from 'react'
import {connect} from 'react-redux'

import {View, Text} from 'react-native'

import Header from './Header'
import StartScreen from './StartScreen'
import QuestionsScreen from './QuestionsScreen'
import ScoreScreen from './ScoreScreen'
import NoQuestionsScreen from './NoQuestionsScreen'
import LoadingQuestionsScreen from './LoadingQuestionsScreen'

import styles from './styles'

const screenFunctions = {
  start: () => <StartScreen/>,
  questions: () => <QuestionsScreen/>,
  score: () => <ScoreScreen/>,
  noQuestions: () => <NoQuestionsScreen/>,
  loadingQuestions: () => <LoadingQuestionsScreen/>,
}

const style = {
  container: {
    flex: 1,
  }
}

const Main = ({screen}) =>
  <View style={style.container}>
    <Header/>
    {screenFunctions[screen]()}
  </View>

const mapStateToProps = ({screen}) => ({screen})

export default connect(mapStateToProps)(Main)
