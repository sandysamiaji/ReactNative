import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Greeting = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {props.name}!</Text>
    </View>
  );
};

Greeting.defaultProps = {
  name: 'Guest',
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // justifyConten:'center',
    alignItems: 'center',
    // backgroundColor: '#FFFF',
  },
  text: {
    font: 10,
    // textAlign:'center',
    // margin: '20',
  },
});
export default Greeting;
