import React from 'react'
import {Text, View} from 'react-native'
import styles from './styles'

const style = {
  container: {
    ...styles.container,
    justifyContent: 'center',
  },
}

export default ({changeScreen}) =>
  <View style={style.container}>
    <Text
      style={styles.boldText}>
        Loading Questions...
    </Text>
  </View>
