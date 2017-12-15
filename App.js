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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  <View>
  <Header style={styles.header}
    centerComponent={{
      text: 'Trivia Challenge',
      style: styles.header.text
    }}/>
    <View style={styles.container}>
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
