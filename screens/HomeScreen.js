import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';

const Logo = () => (
  <Image
    source={require('../assets/Screen_Shot_2024-04-02_at_10.06.35_AM-removebg-preview.png')}
    style={styles.logo}
  />
);

function GameSlides() {
  const gameSlidesImages = [
    'https://upload.wikimedia.org/wikipedia/en/5/5f/FIFA_08_Coverart.png',
    'https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg',
    'https://upload.wikimedia.org/wikipedia/en/7/77/Forza_Horizon_boxart.jpg',
    'https://m.media-amazon.com/images/I/81iNiQ0Tb8L._AC_UF1000,1000_QL80_.jpg'
  ];

  const [currentSlideImage, setCurrentSlideImage] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setCurrentSlideImage((prevIndex) => (prevIndex + 1) % gameSlidesImages.length);
        fadeAnim.setValue(1);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.gameSlidesContainer}>
      <Animated.Image
        source={{ uri: gameSlidesImages[currentSlideImage] }}
        style={[styles.gameSlideImage, { opacity: fadeAnim }]}
      />
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.description}>Welcome to GamesOverload! Explore the greatest games.</Text>
      <GameSlides />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 150,
    marginTop: 0,
    marginBottom: 20,
  },
  gameSlidesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameSlideImage: {
    width: 300,
    height: 400,
    resizeMode: 'cover',
  },
  description: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomeScreen;
