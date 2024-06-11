import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class componentDidUpdate extends Component {
  state = {
    count: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('The count has changed:', this.state.count);
    }
  }

  increment = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.countText}>Count: {this.state.count}</Text>
        <Button title="Increment" onPress={this.increment} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  countText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default componentDidUpdate;
