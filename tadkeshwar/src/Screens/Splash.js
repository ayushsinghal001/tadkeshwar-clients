import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Image, StyleSheet, StatusBar} from 'react-native';
import '../logos/applogo.png';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 400,
    height: 400,
  },
});

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white'}}>
      <StatusBar backgroundColor={'white'}></StatusBar>
      <Image style={styles.tinyLogo} source={require('../logos/applogo.png')} />
    </View>
  );
};
export default Splash;
