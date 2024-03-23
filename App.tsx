/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {styles} from './styles/styles';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.radius_box}>
          <Text style={styles.box_title}>Đăng Nhập</Text>
          <TextInput style={styles.input} placeholder="Tên đăng nhập" />
          <TextInput style={styles.input} placeholder="Mật khẩu" />
          <Button title="Đăng nhập" />
        </View>
      </View>
    );
  }
}

export default App;
