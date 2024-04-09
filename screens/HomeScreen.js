import React from 'react';
import { View, Text, Image } from 'react-native';

const Logo = () => (
  <Image
    source={require('../assets/Screen_Shot_2024-04-02_at_10.06.35_AM-removebg-preview.png')}
    style={{ width: 400, height: 150, marginTop: 0 }}
  />
);


//changing photos




function HomeScreen() {
  return (
    <View>
      <Logo />
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
