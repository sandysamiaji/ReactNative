import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Input} from '@rneui/base';
import {db} from '../src/config/config';
import {collection, addDoc} from 'firebase/firestore/lite';

const Firebase = () => {
  const [username, setUsername] = useState('');
  const fireStoreCollection = collection(db, 'APICRUD');
  const handleSubmit = async e => {
    e.preventDefault();
    const objectPost = {username: username};
    try {
      const docRef = await addDoc(fireStoreCollection, objectPost);
      console.warn('Doc write', docRef.id);
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <View>
      <Input onChangeText={value => setUsername(value)} />
      <Button onPress={handleSubmit}>submit</Button>
    </View>
  );
};
export default Firebase;
