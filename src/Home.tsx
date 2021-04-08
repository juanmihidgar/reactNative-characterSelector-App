import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#264653',
    width: Dimensions.get('window').width,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
    marginTop: 20,
  },
  paragraph: {
    fontWeight: 'normal',
    flex: 1,
  },
  image: {
    borderRadius: 30,
  },
});

export const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.content}>
      <Image style={styles.image} source={require('../assets/all.jpg')} />
      <Text style={styles.text}>SpongeBob SquarePants</Text>
      <Text style={[styles.text, styles.paragraph]}>
        Pick your favourite character to see more information!
      </Text>
      <Button
        color={'#e76f51'}
        onPress={() => {
          navigation.navigate('Cards');
        }}
        title="Go characters!"
      />
    </SafeAreaView>
  );
};
