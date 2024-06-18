import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { Card, Button } from '@rneui/themed';
import { collection, addDoc } from 'firebase/firestore/lite';
import { WishlistContext } from '../ProviderTugas';
import { db } from '../configFirebase';

const HomeScreen = ({ navigation }) => {
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.omdbapi.com/?s=one&apikey=ce059f69');
      const json = await response.json();
      setData(json.Search || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleAddToWishlist = async (item) => {
    try {
      // Periksa ID atau kriteria
      if (isInWishlist(item)) {
        console.warn('Item is already in the wishlist');
        return;
      }

      await saveToFirebase(item);
      setWishlist(prevWishlist => [...prevWishlist, item]); // Menambahkan item ke list
    } catch (error) {
      console.warn('Error saving to Firebase: ', error);
    }
  };

  const saveToFirebase = async (item) => {
    const fireStoreCollection = collection(db, 'tugas3api');
    const objectPost = {
      title: item.Title,
      year: item.Year,
      poster: item.Poster
    };
    try {
      await addDoc(fireStoreCollection, objectPost);
      console.warn('Document added successfully');
    } catch (error) {
      console.warn('Error adding document: ', error);
      throw error;
    }
  };

  //  item di wishlist
  const isInWishlist = (item) => {
    return wishlist.some(wishlistItem => wishlistItem.title === item.Title);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });

    return unsubscribe;
  }, [navigation]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

//  filter
  const filteredData = data.filter(item => !isInWishlist(item));

  return (
    <FlatList
      data={filteredData}
      keyExtractor={item => item.imdbID}
      renderItem={({ item }) => (
        <Card>
          <Card.Title>{item.Title}</Card.Title>
          <View style={styles.item}>
            {item.Poster && (
              <Image source={{ uri: item.Poster }} style={styles.poster} />
            )}
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
            disabled={isInWishlist(item)} //nonaktif
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
