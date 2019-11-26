import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  {
    id: '1',
    name: 'First Item',
  },
  {
    id: '2',
    name: 'Second Item',
  },
  {
    id: '3',
    name: 'Third Item',
  },
  {
    id: '4',
    name: 'Fourth Item',
  },
];

export const HomeScreen = ({navigation}) => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Show list" onPress={() => setShow(!show)} />

      {show && (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Icon name="rocket" size={30} color="#900" />
              <Text>{item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    width: '100%',
  },
});
