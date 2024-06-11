import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const Panel = ({title, description, onButtonClick}) => {
  const [isActive, setIsActive] = useState(false);

  const handletClick = () => {
    setIsActive(isActive);
    onButtonClick(title, description);
  };
  return (
    <View style={[styles.card, isActive ? style.activeCard : {}]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button title={isActive ? 'Active' : 'inactive'} onPress={handletClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 16,
    borderRadius: 5,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
  },
  activeCard: {
    backgroundColor: 'e0ffe0',
  },
  title: {
    fontSize: 18,
    fontweight: 'bold',
  },
  description: {
    fontSize: 18,
  },
});

export default Panel;
