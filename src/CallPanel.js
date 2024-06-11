import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Panel from './components/Panel';
import ComponentDidMount from './components/componentDidMount';
import ComponentDidUnmount from './components/componentDidUnmount';
import ComponentDidUpdate from './components/componentDidUpdate';

const CallPanel = () => {
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDescription, setSelectedDescription] = useState('');

  const handletonClick = (title, description) => {
    setSelectedTitle(title);
    setSelectedDescription(description);
  };

  return (
    <View style={styles.container}>
      <Panel
        title="card title 1"
        description="This is description for aa card 1"
        onButtonClick={handletonClick}
      />
      <Panel
        title="card title 1"
        description="This is description for  card 2"
        onButtonClick={handletonClick}
      />
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Selected Card</Text>
        <Text style={styles.infoText}>Title: {selectedTitle}</Text>
        <Text style={styles.infoText}>Description: {selectedDescription}</Text>
      </View>
      <ComponentDidMount />
      <ComponentDidUnmount />
      <ComponentDidUpdate />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyConten: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    margin: '20',
  },
  infoBox: {
    marginTop: 20,
    padding: 20,
    broderRadius: 5,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
  },
  infoText: {
    fontSize: 24,
    textAlign: 'center',
    margin: '20',
  },
  infoText: {
    fontSize: 24,
    textAlign: 'center',
    margin: '20',
  },
});
export default CallPanel;
