import {Card, Text} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';

const DetialItemScreen = ({route}) => {
  const {title} = route.params;
  return (
    <View>
      <Card>
        <Card.Image
          source={{
            uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
          }}
        />

        <Card.Title>{title}</Card.Title>

        <Text>
          Laborum esse cillum eiusmod eu proident. Culpa irure non irure culpa.
          Nisi enim proident aliqua mollit ex in ullamco eu aliquip minim culpa
          nostrud exercitation mollit.
        </Text>
      </Card>
    </View>
  );
};

export default DetialItemScreen;
