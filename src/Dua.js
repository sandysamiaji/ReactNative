import React, {useState} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import {Card} from '@rneui/themed';
import CostumeCard from './components/CostumeCard';

const Test = () => {
  const [message, setMessage] = useState('Hellow Word');
  const changeMessage = () => {
    setMessage('you pressed the button !');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button title="press me" onPress={changeMessage} />
      <CostumeCard></CostumeCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyConten: 'center',
    // alignItems:'center',
    backgroundColor: '#FFFF',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    margin: '20',
  },
});
export default Test;
