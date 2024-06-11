import React from 'react';
import {useContext} from 'react';
import {View, Text} from 'react-native';
import {ContextUser} from '../context/ContextUser';
import {Button} from '@rneui/base';
import {useSelector, useDispatch} from 'react-redux';
import {removeUser} from '../slice/userSlice';

const ComponentB1 = () => {
  //  const {user} = useContext(ContextUser);
  //  console.log(user);
  //kemarin

  const user = useSelector(state => state.dataUser.user);
  console.log(user);
  const dispatch = useDispatch();
  const hapusUser = () => {
    dispatch(removeUser());
  };
  return (
    //  (
    //    <View>
    //      <Text>{user.username}</Text>
    //      <Text>{user.email}</Text>
    //    </View>
    //  );
    //kemarin

    <View>
      <Text>{user.username ? user.username : ''}</Text>
      <Text>{user.email ? user.email : ''}</Text>
      {user.username ? <Button onPress={hapusUser}>hapus user</Button> : null}
    </View>
  );
};

export default ComponentB1;
