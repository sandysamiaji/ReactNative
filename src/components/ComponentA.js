//import {useContext} from 'react';
import {View, Text} from 'react-native';
import {Button, Card} from '@rneui/base';
import ComponentA1 from './ComponentA1';
//import {ContextUser} from '../context/ContextUser';
import {useDispatch} from 'react-redux';
import {setUser} from '../slice/userSlice';

const ComponentA = () => {
  //kemarin
  //  const {setUser} = useContext(ContextUser);
  //  const updateState = () => {
  //    setUser({username: 'Rudy', email: 'rudy@gmail.com'});
  //    //    console.log("username",user.username)
  //  };
  //kemarin
  const dispatch = useDispatch();
  const updateState = () => {
    dispatch(
      setUser({
        username: 'Rudy Tabuti',
        email: 'rudy@gmail.com',
      }),
    );
  };
  return (
    <View>
      <Card>
        <Text> ini component A </Text>
        <Button onPress={updateState}>Update Data Context in B1</Button>
        <ComponentA1 />
      </Card>
    </View>
  );
};

export default ComponentA;
