import React from 'react'
import {Header} from 'react-native-elements'
import styles from './styles'

const style = {
  header: {
    paddingTop: 100,
    width: '100%',
    text: {
      ...styles.text,
      color: '#fff',
    }
  }
}

export default () =>
  <Header style={style.header}
    centerComponent={{
      text: 'Trivia Challenge',
      style: style.header.text
    }}/>
