import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from 'react-native-elements'
import Button from 'react-native-button'

import {createStore, applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'
import PropTypes from 'prop-types'

const textStyle = {
  fontSize: 30,
  textAlign: 'center',
}

const styles = {
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: textStyle,
  header: {
    paddingTop: 100,
    width: '100%',
    text: {
      ...textStyle,
      color: '#fff',
    }
  }
}

export default () =>
  <View style={styles.container}>
  <Header style={styles.header}
    centerComponent={{
      text: 'Trivia Challenge',
      style: styles.header.text
    }}/>
    <View style={styles.innerContainer}>
      <Text
        style={{...styles.text, fontWeight: 'bold'}}>
          Welcome To The{"\n"}Trivia Challenge!
        </Text>
      <Text style={styles.text}>
        You Will be presented with 10 True or False Questions.
      </Text>
      <Text style={styles.text}>Can you score 100%?</Text>
      <Button style={styles.text}>BEGIN</Button>
    </View>
  </View>
