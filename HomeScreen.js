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

export const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
