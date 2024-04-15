import React, { useState, useEffect } from 'react';
import { View, Image, FlatList, TouchableOpacity } from 'react-native';

const FavoritesScreen = ({ route }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (route?.params?.favourites) {
      setFavorites(route.params.favourites);
    }
  }, [route]);

  const handleImagePress = (game,price) => {
    console.log('Selected game from favorites:', game);
  };

  const removeFromFavorites = (gameId) => {
    const updatedFavorites = favorites.filter((item) => item.id !== gameId);
    setFavorites(updatedFavorites);
  };

  return (
    <View>
      <FlatList
        data={favorites}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleImagePress(item)}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 200, height: 200, resizeMode: 'cover', marginBottom: 10 }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
