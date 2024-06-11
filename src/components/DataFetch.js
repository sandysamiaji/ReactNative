import React, {useState, useEffect, useReducer, useRef} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

const initialState = {
  data: null,
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {...state, data: action.payload, loading: false, error: null};
    case 'FETCH_ERROR':
      return {...state, data: null, loading: false, error: action.payload};
    default:
      return state;
  }
};

const DataFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const activityIndicatorRef = useRef(null);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/todos/100')
      .then(response => response.json())
      .then(data => {
        dispatch({type: 'FETCH_SUCCESS', payload: data});
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        dispatch({type: 'FETCH_ERROR', payload: error.message});
      });
  }, []);

  useEffect(() => {
    if (state.loading && activityIndicatorRef.current) {
      console.log('ActivityIndicator is  active');
    }
  }, [state.loading]);

  return (
    <View style={styles.container}>
      {state.loading ? (
        <ActivityIndicator
          ref={activityIndicatorRef}
          size="large"
          color="0000ff"
        />
      ) : (
        <Text style={styles.text}>
          {state.error
            ? `Error: ${state.error}`
            : `Title: ${state.data?.title}`}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Komponen mengisi seluruh ruang yang tersedia
    justifyContent: 'center', // Konten berada di tengah secara vertikal
    alignItems: 'center', // Konten berada di tengah secara horizontal
    padding: 20, // Menambahkan padding di sekitar konten
  },
  text: {
    fontSize: 18, // Ukuran font untuk teks
  },
});

// Mengekspor komponen DataFetch agar dapat digunakan di tempat lain dalam aplikasi
//export default DataFetch;

export default DataFetch;
