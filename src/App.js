////import ComponentA from './components/ComponentA';
////import ComponentB from './components/ComponentB';
////import {ProviderUser} from './context/ContextUser';
////import React, {Component} from 'react';
////
////export default class App extends Component {
////  render() {
////    return (
////      //      <ProviderUser>
////      <>
////        <ComponentA />
////        <ComponentB />
////      </>
////      //      </ProviderUser>
////    );
////  }
////}
////
////import MapBox from '@rnmapbox/maps';
////import 'react-native-gesture-handler';
////import Router from './Router.js';
////
////
////
////
////MapBox.setAccessToken('sk.eyJ1Ijoic2FuZHlzYW1pYWppIiwiYSI6ImNseDA4Z3lvdjA2NjEyanM3ZGlmNTl4MnEifQ.b2sccuZUuybmcAyuIB7qdg');
////
////const App = () => {
////  const coordinate = [];
////
////  return (
////    <View style={styles.page}>
////      <Text> ini adalah MapBox </Text>
////      <View style={styles.container}>
////        <MapBox.MapView style={styles.map}>
//////          <MapBox.Camera zoomLevel={15} centerCoordinate={coordinate} />
////        </MapBox.MapView>
////      </View>
////    </View>
////  );
////};
////
////const styles = StyleSheet.create({
////  page: {
////    flex: 1,
////    justifyContent: 'center',
////    alignItems: 'center',
////  },
////  container: {
////    height: 300,
////    width: 300,
////  },
////  map: {
////    flex: 1,
////  },
////});
////
//////  )
//////
//////  <Router />;
//////};
////
////export default App;
//
//import React from 'react';
//import { StyleSheet, View } from 'react-native';
//import Mapbox from '@rnmapbox/maps';
//
//Mapbox.setAccessToken('sk.eyJ1IjoidmR5YW5oIiwiYSI6ImNseDBibXUzZzBld2oycXNmNG1wN2txb2sifQ.IPVvVMOPazkFVY0y90BMJw');
//
//const App = () => {
//  // const coordinate = [-6.2294237,106.81789]
//
//  return (
//    <View style={styles.page}>
//      <View style={styles.container}>
//        <Mapbox.MapView style={styles.map}>
//          {/* <Mapbox.Camera zoomLevel={15} centerCoordinate={coordinate}></Mapbox.Camera>
//          <Mapbox.PointAnnotation id="project" coordinate={coordinate}></Mapbox.PointAnnotation> */}
//        </Mapbox.MapView>
//      </View>
//    </View>
//  );
//}
//
//export default App;
//
//const styles = StyleSheet.create({
//  page: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//  container: {
//    height: 300,
//    width: 300,
//  },
//  map: {
//    flex: 1
//  }
//});
//

import React from 'react';
import RouterApp from './Router';

const App = () => {
  return <RouterApp />;
};

export default App;
