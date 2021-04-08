import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Button, Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

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
    margin: 10,
    flex: 1,
    textAlign: 'center',
  },
  paragraph: {
    fontWeight: 'normal',
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  avatar: {
    borderRadius: 30,
    borderWidth: 5,
    borderColor: 'white',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
});

export const Character: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const character = route.params as any;

  useEffect(() => {
    return () => console.log('Se está desmontando character');
  }, []);

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={character.avatarUrl} />
        <Text style={styles.text}>{character.name}</Text>
      </View>

      <Text style={styles.paragraph}>{character.description}</Text>

      <Button
        color={'#e76f51'}
        onPress={() => {
          navigation.navigate('Cards');
        }}
        title="Go back!"
      />
    </SafeAreaView>
  );
};
