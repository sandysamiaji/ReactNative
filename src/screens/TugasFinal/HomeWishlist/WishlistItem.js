import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Text} from '@rneui/base';

const DetailItemScreen = ({route}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <Card>
        <Card.Image
          source={{
            uri: item.Poster,
          }}
          style={styles.poster}
        />
        <Card.Title>{item.Title}</Card.Title>
        <Text style={styles.year}>{item.Year}</Text>
        <Text style={styles.description}>{item.Plot}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  container: {
    padding: 10,
  },
  card: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  poster: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  year: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});

export default DetailItemScreen;
