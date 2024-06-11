import React, { useEffect, useState, useContext } from 'react';
import { BlurView } from '@react-native-community/blur';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { Card, Button } from '@rneui/themed';
import { WishlistContext } from '../ProviderTugas';

const HomeScreen = ({ navigation }) => {
  const { wishlist, setWishlist } = useContext(WishlistContext);
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

  const handleAddToWishlist = (item) => {

    setWishlist([...wishlist, item]);

    navigation.navigate('Detail Item', { item });
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const filteredData = data.filter(item => !wishlist.some(wish => wish.imdbID === item.imdbID));

  return (
    <FlatList
      data={filteredData}
      keyExtractor={item => item.imdbID}
      renderItem={({ item }) => (
        <Card>
          <Card.Title>{item.Title}</Card.Title>
          <View style={styles.item}>
            <BlurView style={styles.absolute} blurType="light" blurAmount={10}>
              <Image source={{ uri: item.Poster }} style={styles.poster} />
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
            onPress={() => handleAddToWishlist(item)}
          />
        </Card>
      )}
    />
  );
};

const styles = StyleSheet.create({
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
   button: {
     borderRadius: 0,
     marginHorizontal: 0,
     marginBottom: 0,
   },
   loader: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
 });

export default HomeScreen;
