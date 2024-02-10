import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamsList} from '../App';
import Animated from 'react-native-reanimated';

type Props = NativeStackScreenProps<StackParamsList, 'Detail'>;

const Detail = ({route, navigation}: Props) => {
  const {image, title, desc} = route.params.item;

  return (
    <View style={styles.container}>
      <View>
        <Animated.Image
          sharedTransitionTag={route.params.tag}
          style={styles.image}
          source={{uri: image}}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
      <Button onPress={() => navigation.goBack()} title="Go back" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4c4c4',
  },
  renderItem: {
    width: '100%',
    marginBottom: 20,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 240,
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 15,
  },
  desc: {
    fontSize: 14,
    color: '#000',
    opacity: 0.6,
    marginVertical: 10,
    marginLeft: 15,
  },
});

export default Detail;
