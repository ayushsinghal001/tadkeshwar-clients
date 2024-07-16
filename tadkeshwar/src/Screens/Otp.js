import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');

const Otp = () => {
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
      <Image
        source={require('../logos/applogo.png')}
        style={{height: 300, width: 300}}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          color: 'black',
          width: width - 90,
        }}>
        Enter the OTP sent to your entered mobile number
      </Text>
      <TextInput
        placeholder="Enter OTP"
        style={{
          width: width - 80,
          height: 50,
          borderWidth: 1,
          margin: 15,
          borderRadius: 8,
        }}
      />
      <TouchableOpacity
        style={{
          width: width - 80,
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0000ff',
          borderRadius: 20,
          margin: 10,
        }}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // console.log('Clicked resend OTP');
          Alert.alert('OTP resent');
        }}
        style={{margin: 8}}>
        <Text style={{color: '#0000ff'}}>Resend otp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={{color: '#0000ff'}}>Change Mobile Number</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Otp;
