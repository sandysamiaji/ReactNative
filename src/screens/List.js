import {Button} from '@rneui/base';
import React from 'react';
import {Text, View} from 'react-native';

const List = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text> List Screen </Text>
      <Button onPress={() => navigation.navigate('Home')}>
        pindah ke Home
      </Button>
    </View>
  );
};
export default List;
