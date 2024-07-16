import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');
const Home = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Text style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>
        Home Page
      </Text>
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
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
