import React from 'react';
import {View, Text} from 'react-native';
import {Card} from '@rneui/base';
import ComponentB1 from './ComponentB1';

const ComponentB = () => {
  return (
    <View>
      <Card>
        <Text> ini component B </Text>
        <ComponentB1 />
      </Card>
    </View>
  );
};

export default ComponentB;
