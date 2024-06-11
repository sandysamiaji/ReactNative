import React, {useCallback} from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const items = [
  {
    id: 1,
    name: 'Indonesia',
    description: 'Capital: Jakarta, Population: 273 million, Currency: Rupiah',
  },
  {
    id: 2,
    name: 'Malaysia',
    description:
      'Capital: Kuala Lumpur, Population: 32 million, Currency: Ringgit',
  },
  {
    id: 3,
    name: 'Singapore',
    description:
      'Capital: Singapore, Population: 5.7 million, Currency: Singapore Dollar',
  },
  {
    id: 4,
    name: 'Thailand',
    description: 'Capital: Bangkok, Population: 70 million, Currency: Baht',
  },
  {
    id: 5,
    name: 'Philippines',
    description: 'Capital: Manila, Population: 109 million, Currency: Peso',
  },
  {
    id: 6,
    name: 'Vietnam',
    description: 'Capital: Hanoi, Population: 97 million, Currency: Dong',
  },
  {
    id: 7,
    name: 'Brunei',
    description:
      'Capital: Bandar Seri Begawan, Population: 437 thousand, Currency: Brunei Dollar',
  },
  {
    id: 8,
    name: 'Cambodia',
    description: 'Capital: Phnom Penh, Population: 16 million, Currency: Riel',
  },
  {
    id: 9,
    name: 'Laos',
    description: 'Capital: Vientiane, Population: 7.2 million, Currency: Kip',
  },
  {
    id: 10,
    name: 'Myanmar',
    description: 'Capital: Naypyidaw, Population: 54 million, Currency: Kyat',
  },
];

const Swiper = () => {
  const leftContent = () => (
    <View style={styles.leftContent}>
      <TouchableOpacity onPress={() => console.log(item)}>
        <Text style={styles.leftContentText}>test</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <GestureHandlerRootView>
              <Swipeable renderLeftActions={leftContent}>
                <Animated.View style={styles.swipableContent}>
                  <Text>{item.name}</Text>
                </Animated.View>
              </Swipeable>
            </GestureHandlerRootView>
          );
        }}></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  swipableContent: {
    flex: 1,
    width: '100%',
    padding: 10,
    paddingBottom: 20,
    paddingTop: 20,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },

  leftContent: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    paddingTop: 20,
    marginBottom: 5,
    justifyContent: 'center',
    backgroundColor: 'black',
  },

  leftContentText: {
    color: 'white',
  },
});

export default Swiper;
