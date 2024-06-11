import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';

const ReduxComponent = ({counter, increment, decrement}) => {
  return (
    <View>
      <Text>Counter: {counter}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({type: 'INCREMENT'}),
  decrement: () => dispatch({type: 'DECREMENT'}),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);

//import React from 'react';
//import { Provider } from 'react-redux';
//import ReduxComponent from './components/ReduxComponent';
//import store from './store/store';
//
//const App = () => {
//  return (
//    <Provider store={store}>
//      <ReduxComponent />
//    </Provider>
//  );
//};
//
//export default App;
