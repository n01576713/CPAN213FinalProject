import React, {useState, useEffect} from 'react';
import { View, Text, Image } from 'react-native';

const Logo = () => (
  <Image
    source={require('../assets/Screen_Shot_2024-04-02_at_10.06.35_AM-removebg-preview.png')}
    style={{ width: 400, height: 150, marginTop: 0 }}
  />
);

//changing photos
function GameSlides() {
    const gameSlidesImages = [
      'https://upload.wikimedia.org/wikipedia/en/5/5f/FIFA_08_Coverart.png',
      'https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg',
      'https://upload.wikimedia.org/wikipedia/en/7/77/Forza_Horizon_boxart.jpg',
      'https://m.media-amazon.com/images/I/81iNiQ0Tb8L._AC_UF1000,1000_QL80_.jpg'
    ];
  
    const [currentSlideImage, setCurrentSlideImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlideImage((prevIndex) => (prevIndex + 1) % gameSlidesImages.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
        //need to fix styling
      <View>
        <Image
          source={{ uri: gameSlidesImages[currentSlideImage] }}
          style={{ width: '80%', height: '80%' }}
        />
      </View>
    );
  }

function HomeScreen() {
  return (
    <View>
      <Logo />
      <Text>Home Screen</Text>
      <GameSlides />
    </View>
  );
};

export default HomeScreen;
