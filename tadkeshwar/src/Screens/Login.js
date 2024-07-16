import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  Image,
} from 'react-native';
import React from 'react';
import '../logos/applogo.png';

import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const Login = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor={'white'}></StatusBar>
      <Image source={require('../logos/applogo.png')} style = {{height:300, width:300}}/>
      <Text style={{fontSize: 20, fontWeight: '500', color: 'black'}}>
        Verify your mobile number to access your Tadkeshwar Clients account
      </Text>
      <TextInput
        onChangeText={text => {
          console.log(text);
        }}
        placeholder="Enter Mobile Number"
        style={{
          width: width - 80,
          height: 50,
          borderWidth: 1,
          margin: 20,
          borderRadius: 8,
        }}
      />
      <TouchableOpacity
        style={{
          width: width - 80,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0000ff',
          borderRadius: 20,
        }}
        onPress={() => {
          navigation.navigate('Otp');
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Continue</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Login;
