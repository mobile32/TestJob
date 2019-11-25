import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Button title="Log In" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
