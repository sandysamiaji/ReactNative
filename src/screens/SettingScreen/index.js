import {Card} from '@rneui/base';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const SettingScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('User')}>
        <Card>
          <Text>Budi Handuk</Text>
        </Card>
      </TouchableOpacity>
    </View>
  );
};
export default SettingScreen;
