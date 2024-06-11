import {Button, Card} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Card>
        <Card.Title> React Native Basic </Card.Title>
        <Button
          onPress={() =>
            navigation.navigate('Detail Item', {title: 'React Native Basic'})
          }>
          Detail
        </Button>
      </Card>
    </View>
  );
};
export default HomeScreen;
