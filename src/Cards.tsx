import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Button, Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const characters = [
  {
    key: '0',
    name: 'SpongeBob SquarePants',
    description: `SpongeBob SquarePants (voiced by Tom Kenny, Antonio Raul Corbo as young SpongeBob in The SpongeBob Movie: Sponge on the Run) a yellow anthropomorphic sea sponge who usually wears brown short pants, a white collared shirt, and a red tie. He lives in a pineapple house and is employed as a fry cook at a fast food restaurant called the Krusty Krab. He diligently attends Mrs. Puff's Boating School but has never passed; throughout the series, he tries his hardest on the exams but remains an unintentionally reckless boat driver. He is relentlessly optimistic and enthusiastic toward his job and his friends. SpongeBob's hobbies include catching jellyfish, blowing bubbles, playing with his best friend Patrick, and unintentionally irritating his neighbor Squidward. He first appears in "Help Wanted".`,
    avatarUrl: require('../assets/bob.jpg'),
  },
  {
    key: '1',
    name: 'Patrick Star',
    description: `Patrick Star (voiced by Bill Fagerbakke, Jack Gore as young Patrick in The SpongeBob Movie: Sponge on the Run) a pink starfish who lives under a rock and wears flowered swim trunks. His most prominent character trait is his extremely low intelligence. He is best friends with SpongeBob and often unknowingly encourages activities that get the two into trouble. While typically unemployed throughout the series, Patrick holds various short-term jobs as the storyline of each episode requires. He is generally slow and easy-going but can sometimes get aggressive, much like real starfish, and occasionally performs feats of great strength.`,
    avatarUrl: require('../assets/patricio.jpg'),
  },
  {
    key: '2',
    name: 'Sandy Cheeks',
    description: `Sandy Cheeks (voiced by Carolyn Lawrence, Presley Williams as young Sandy in The SpongeBob Movie: Sponge on the Run) a squirrel from Texas who lives in an air-filled glass dome and wears a diving suit to breathe underwater. Whenever any aquatic creatures enter her home, they must wear helmets of water. Sandy works as a scientist, explorer, and inventor. She is a rodeo champion with a number of athletic interests, such as "sand-boarding" and karate. She speaks with a Southern drawl and uses typical Southern slang words and phrases.`,
    avatarUrl: require('../assets/arenita.jpg'),
  },
  {
    key: '3',
    name: 'Gary the Snail',
    description: `Gary the Snail (voiced by Tom Kenny) is SpongeBob's pet sea snail who lives with him in their pineapple home and vocalizes like a cat. Despite only communicating through meows, other snails and SpongeBob can understand and talk to him. Depicted as a level-headed character, Gary often serves as a voice of reason and a foil to SpongeBob and solves problems that his owner cannot. He has a pink shell that is impossibly spacious on the inside.`,
    avatarUrl: require('../assets/gary.jpg'),
  },
  {
    key: '4',
    name: 'Squidward Tentacles',
    description: `Squidward Tentacles (voiced by Rodger Bumpass, Jason Maybaum as young Squidward in The SpongeBob Movie: Sponge on the Run) an octopus with a large nose who works as a cashier at the Krusty Krab. He is SpongeBob's next-door neighbor with a dry, sarcastic sense of humor. His house is between the SpongeBob and Patrick houses. He believes himself to be a talented artist and musician, but nobody else recognizes his abilities. He plays the clarinet and often paints self-portraits in different styles, which he hangs up around his moai house. Squidward frequently voices his frustration with SpongeBob, but he genuinely cares for him deep down. This has been revealed in the form of sudden confessions when Squidward is in a dire situation.`,
    avatarUrl: require('../assets/calamardo.jpg'),
  },
  {
    key: '5',
    name: 'Mr. Krabs',
    description: `Eugene Krabs (voiced by Clancy Brown) is a red crab who lives in an anchor-shaped house with his daughter Pearl, who is a whale. He dislikes spending money but will go to great lengths to make Pearl happy. Krabs owns and operates the Krusty Krab restaurant where SpongeBob works. He is self-content, cunning, and obsessed with the value and essence of money. He tends to worry more about his riches than about the needs of his employees. Having served in the navy, he loves sailing, whales, sea shanties, and talking like a pirate.`,
    avatarUrl: require('../assets/cangrejo.jpg'),
  },
];

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#264653',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  characterItem: {
    flex: 1,
    backgroundColor: '#e9c46a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    padding: 5,
    borderRadius: 20,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  paragraph: {
    fontWeight: 'normal',
    flex: 1,
  },
  image: {
    borderRadius: 20,
  },
  textView: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    width: '100%',
  },
});

export const Cards: React.FC = () => {
  const navigation = useNavigation();
  /*
  useEffect(() => {
    return () => console.log('Se está desmontando cards');
  }, []);
*/
  return (
    <SafeAreaView style={styles.content}>
      <Text style={styles.text}>Choose one character</Text>

      <FlatList
        style={styles.flatList}
        data={characters}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.characterItem}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Character', item)}
              key={`character_${item.key}`}>
              <Image style={styles.image} source={item.avatarUrl} />
              <View style={styles.textView}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};
