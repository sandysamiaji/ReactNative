import {Button} from '@rneui/base';
import React from 'react';
import {Text, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text> Home Screen </Text>
      <Button onPress={() => navigation.navigate('List')}>
        pindah ke List
      </Button>
    </View>
  );
};
export default Home;
