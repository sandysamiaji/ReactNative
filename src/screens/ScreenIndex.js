import React, {useEffect, useState} from 'react';
import {BlurView} from '@react-native-community/blur';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';
import {Card, Button, Icon} from '@rneui/themed';

const ScreenIndex = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://www.omdbapi.com/?s=one&apikey=ce059f69')
      .then(response => response.json())
      .then(json => {
        setData(json.Search);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.imdbID}
      renderItem={({item}) => (
        <Card>
          <Card.Title>{item.Title}</Card.Title>
          <View style={styles.item}>
            <BlurView style={styles.absolute} blurType="light" blurAmount={10}>
              <Image source={{uri: item.Poster}} style={styles.poster} />
            </BlurView>
            <View style={styles.info}></View>
          </View>
          <Card.Title>{item.Year}</Card.Title>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Add to Wishlist"
          />
        </Card>
      )}
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  poster: {
    width: 200,
    height: 300,
    marginRight: 10,
    justifyContent: 'center',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  year: {
    fontSize: 14,
    color: '#666',
  },
});

export default ScreenIndex;
