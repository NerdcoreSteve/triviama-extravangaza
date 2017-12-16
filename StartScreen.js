import React from 'react'
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

export default () =>
  <View style={style.container}>
    <Text
      style={style.boldText}>
        Welcome To The{"\n"}Trivia Challenge!
      </Text>
    <Text style={styles.text}>
      You Will be presented with 10 True or False Questions.
    </Text>
    <Text style={styles.text}>Can you score 100%?</Text>
    <Button style={styles.text}>BEGIN</Button>
  </View>
