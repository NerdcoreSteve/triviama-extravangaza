import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from 'react-native-button'

import {createStore, applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'
import PropTypes from 'prop-types'

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

export default () =>
  <View style={styles.container}>
    <Text>You are a potato</Text>
  </View>
