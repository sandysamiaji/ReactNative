import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class componentDidUnmount extends Component {
  state = {
    seconds: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({seconds: prevState.seconds + 1}));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.timerText}>Seconds: {this.state.seconds}</Text>
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
  timerText: {
    fontSize: 24,
  },
});

export default componentDidUnmount;
