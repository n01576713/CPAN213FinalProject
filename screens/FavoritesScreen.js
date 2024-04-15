import React, { useState, useEffect } from 'react';
import { View, Image, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';

const FavoritesScreen = ({ route, navigation }) => {
  const [favorites, setFavorites] = useState([]);
  const [selectedGames, setSelectedGames] = useState([]);

  useEffect(() => {
    if (route?.params?.favourites) {
      setFavorites(route.params.favourites);
    }
  }, [route]);

  const handleImagePress = (game) => {
    const isSelected = selectedGames.some((selectedGame) => selectedGame.id === game.id);
    if (isSelected) {
      setSelectedGames(selectedGames.filter((selectedGame) => selectedGame.id !== game.id));
    } else {
      setSelectedGames([...selectedGames, game]);
    }
  };

  const handleMoveToCart = () => {
    navigation.navigate('Cart', { games: selectedGames });
    setSelectedGames([]);
  };

  const removeFromFavorites = (gameId) => {
    const updatedFavorites = favorites.filter((item) => item.id !== gameId);
    setFavorites(updatedFavorites);
  };

  return (
    <View style={styles.container}>
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
      {selectedGames.length > 0 && (
        <Button title="Move to Cart" onPress={handleMoveToCart} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FavoritesScreen;
