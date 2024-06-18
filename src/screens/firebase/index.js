import {Button, Card, Text} from '@rneui/base';
//import React from 'react';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  collection,
  query,
  doc,
  getDocs,
  deleteDoc,
} from 'firebase/firestore/lite';
import {db} from '../../config/config';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const firestoreCollection = collection(db, 'user');

  const getDataFirestore = async () => {
    try {
      const querySnapshot = await getDocs(firestoreCollection);
      const newData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getDataFirestore();

    const interval = setInterval(() => {
      getDataFirestore();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const deleteData = async id => {
    const userDocRef = doc(db, 'user', id);

    try {
      await deleteDoc(userDocRef);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <View style={styles.app}>
      <Button onPress={() => navigation.navigate('Create')} type="solid">
        <Icon name="plus" size={15} color={'white'} />
        <Text style={styles.buttonText}>Add Data</Text>
      </Button>

      <Text style={styles.title}>List User</Text>
      {data ? (
        data.map((item, index) => (
          <View key={index} style={styles.card}>
            <Card>
              <Text style={styles.userStyle}>
                {`${item.firstName} ${item.lastName}`}
              </Text>
              <View style={styles.containerButton}>
                <Button
                  color={'warning'}
                  style={styles.button}
                  onPress={() =>
                    navigation.navigate('Update', {
                      id: item.id,
                      firstNameParam: item.firstName,
                      lastNameParam: item.lastName,
                    })
                  }>
                  <Icon name="edit" size={18} color={'white'} />
                </Button>
                <View style={styles.buttonSpacer} />
                <Button
                  color={'error'}
                  onPress={() => deleteData(item.id)}
                  style={styles.button}>
                  <Icon name="delete" size={18} color={'white'} />
                </Button>
              </View>
            </Card>
          </View>
        ))
      ) : (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    marginTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
  },
  card: {
    borderRadius: 20,
    marginVertical: 5,
  },
  title: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    color: '#000000',
  },
  userStyle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000000',
  },
  containerButton: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    marginHorizontal: 5,
  },
  buttonSpacer: {
    width: 10,
  },
  buttonText: {
    marginLeft: 5,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default Home;
