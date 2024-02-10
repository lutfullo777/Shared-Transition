import {Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import datas from '../datas';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamsList} from '../App';
import Animated from 'react-native-reanimated';

type Props = NativeStackScreenProps<StackParamsList>;

const Home = ({navigation}: Props) => {
  return (
    <FlatList
      data={datas}
      contentContainerStyle={styles.list}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail', {item, tag: `image_${index}`})
            }
            style={styles.renderItem}>
            <Animated.Image
              sharedTransitionTag={`image_${index}`}
              style={styles.image}
              source={{uri: item.image}}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 20,
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
    height: 160,
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

export default Home;
