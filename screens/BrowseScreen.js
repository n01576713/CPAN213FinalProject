import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';

const BrowseScreen = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [displayedGames, setDisplayedGames] = useState([]);


  //This is temp
  const games = [
    {
        "id": 1,
        "name": "Sekiro: Shadows Die Twice",
        "image": "https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg",
        "genre": ["Action", "Souls-Like"],
        "price": 59.99
    },
    {
        "id": 2,
        "name": "FIFA 08",
        "image": "https://upload.wikimedia.org/wikipedia/en/5/5f/FIFA_08_Coverart.png",
        "genre": ["Sports"],
        "price": 29.99
    },
    {
        "id": 3,
        "name": "EAFC 24",
        "image": "https://www.gameinformer.com/sites/default/files/styles/product_box_art/public/2023/07/14/9abd7c19/eafc24.jpg",
        "genre": ["Sports"],
        "price": 89.99
    },
    {
        "id": 4,
        "name": "NHL 24",
        "image": "https://upload.wikimedia.org/wikipedia/en/6/63/NHL_24_cover_art.jpg",
        "genre": ["Sports"],
        "price": 26.99
    },
    {
        "id": 5,
        "name": "NBA 2K24",
        "image": "https://image.api.playstation.com/vulcan/ap/rnd/202307/2809/03f24f06573f21a2b3b5279b26205b0f882acf8a31d5dabd.png",
        "genre": ["Sports"],
        "price": 89.99
    },
    {
        "id": 6,
        "name": "Madden NFL 24",
        "image": "https://cst.brightspotcdn.com/dims4/default/22d66ca/2147483647/strip/false/crop/1200x1600+0+0/resize/1115x1486!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FMX3b8s97rJsYZTlo-QHc6QuLexw%3D%2F0x0%3A1200x1600%2F1200x1600%2Ffilters%3Afocal%28600x800%3A601x801%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F24875137%2FMadden24a.jpg",
        "genre": ["Sports"],
        "price": 49.99
    },
    {
        "id": 7,
        "name": "MLB The Show 24",
        "image": "https://upload.wikimedia.org/wikipedia/en/d/d8/MLB_The_Show_24_Cover.jpg",
        "genre": ["Sports"],
        "price": 89.99
    },
    {
        "id": 8,
        "name": "PGA Tour 2K23",
        "image": "https://upload.wikimedia.org/wikipedia/en/2/2c/PGA_Tour_2K23_cover_art.jpg",
        "genre": ["Sports"],
        "price": 19.99
    },
    {
        "id": 9,
        "name": "Skate 3",
        "image": "https://m.media-amazon.com/images/M/MV5BNWU2N2RiYjAtNjMyMC00ODAyLTk5ZWQtNTZlMTc1MDIzYzk5XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg",
        "genre": ["Sports"],
        "price": 19.99
    },{
        "id": 10,
        "name": "FIFA Street (2012)",
        "image": "https://media.moddb.com/images/games/1/24/23073/boxFIFA-Street-Box.jpg",
        "genre": ["Sports"],
        "price": 24.99
    }
]

  const genres = [...new Set(games.flatMap(game => game.genre))];

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    const gamesWithGenre = games.filter((game) => game.genre.includes(genre));
    setDisplayedGames(gamesWithGenre);
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedGenre}
        style={styles.picker}
        onValueChange={(itemValue) => handleGenreChange(itemValue)}>
        <Picker.Item label="Select Game Genre" value=""/>
        {genres.map((genre, index) => (
          <Picker.Item key={index} label={genre} value={genre}/>
        ))}
      </Picker>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        {displayedGames.map((game) => (
          <View key={game.id} style={styles.gameContainer}>
            <Image source={{ uri: game.image }} style={styles.image}/>
            <Text style={styles.gameName}>{game.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    height: 50,
    width: 200,
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  gameName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BrowseScreen;
