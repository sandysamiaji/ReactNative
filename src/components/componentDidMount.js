import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ActivityIndicator} from 'react-native';

class componentDidMount extends Component {
  constructor(props) {
    super(props);
    // Inisialisasi state
    this.state = {
      data: null,
      loading: true,
    };
    console.log('Constructor: Component is being constructed');
  }

  componentDidMount() {
    // Fungsi ini dipanggil setelah komponen dimount
    console.log('ComponentDidMount: Component has mounted');
    // Ambil data dari web API
    this.fetchData();
  }

  fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({data, loading: false}))
      .catch(error => console.error(error));
  }

  render() {
    const {data, loading} = this.state;

    if (loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.body}>{data.body}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default componentDidMount;
