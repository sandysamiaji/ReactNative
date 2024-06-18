//import React, {useState} from 'react';
//import {View, Button, Image, Text, StyleSheet} from 'react-native';
//import {launchCamera} from 'react-native-image-picker';
//
//const Camera = () => {
//  const [imageUrl, setImageUri] = useState(null);
//  const openCamera = () => {
//    const options = {
//      mediaType: 'photo',
//      cameraType: 'front',
//    };
//    launchCamera(options, response => {
//      if (response.didCancel) {
//        console.log('User cencelled image picker');
//      } else if (response.error) {
//        console.log('ImagePicker error', response.error);
//      } else {
//        const uri = response.assets[0].uri;
//        setImageUri(uri);
//      }
//    });
//  };
//  return (
//    <View style={styles.container}>
//      <Button title="Open Cam" onPress={openCamera} />
//      {imageUrl && <Image source={{uri: imageUrl}} style={styles.image} />}
//    </View>
//  );
//};
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//  },
//  image: {
//    width: 300,
//    height: 300,
//    marginTop: 20,
//  },
//});
//
//export default Camera;


import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { launchCamera } from 'react-native-image-picker';

const Camera = () => {
  const [videoUri, setVideoUri] = useState(null);

  const openCamera = () => {
    const options = {
      mediaType: 'video',
      cameraType: 'front',
      videoQuality: 'high',
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker error', response.errorMessage);
      } else {
        const uri = response.assets[0].uri;
        setVideoUri(uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Open Cam" onPress={openCamera} />
      {videoUri && (
        <Video
          source={{ uri: videoUri }}
          style={styles.video}
          controls={true}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
});

export default Camera;
