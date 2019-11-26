import React from 'react';
import {View, Button} from 'react-native';

export const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Button title="Log In" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
