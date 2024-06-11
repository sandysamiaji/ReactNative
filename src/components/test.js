import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

const ScreenIndex = () => {
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    try {
      fetch('https://www.omdbapi.com/?s=iron&apikey=e28ed313')
        .then(response => response.json())
        .then(json => {
          setMovieData(json);
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
          setLoading(false);
        });
    } catch (error) {
      console.error('Error fetching movie data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Movie Information</Text>
      <View style={styles.movieContainer}>
        <Image
          source={{uri: movieData.Poster}}
          style={styles.poster}
          resizeMode="cover"
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{movieData.Title}</Text>
          <Text style={styles.genre}>Genre: {movieData.Genre}</Text>
          <Text style={styles.writer}>Writer: {movieData.Writer}</Text>
          <Text style={styles.plot}>Plot: {movieData.Plot}</Text>
        </View>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  loadingContainer: {
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  movieContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    padding: 10,
    width: windowWidth - 40,
  },
  poster: {
    width: 300,
    height: 400,
    borderRadius: 5,
  },
  detailsContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  genre: {
    fontSize: 16,
  },
  writer: {
    fontSize: 16,
  },
  plot: {
    fontSize: 16,
  },
});

export default ScreenIndex;
