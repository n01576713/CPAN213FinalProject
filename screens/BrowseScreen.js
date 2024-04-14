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
    },
    {
        "id": 11,
        "name": "UFC 5",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQj2NUpU4UCbBiwgw_1r24hUjepeh3ugOLinZ2wALopPcrEo8WMf20w3HdDs_xSj4z1V3Rxtw",
        "genre": ["Sports"],
        "price": 49.99
    },
    {
        "id": 12,
        "name": "Fight Night Champion",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSy7bBbXwpWa9gwv_dXkt6RblmRntIIdSBQ9UI0612vhjMkigN3lna-N_EvXpat4hnSxz1T",
        "genre": ["Sports"],
        "price": 9.99
    },
    {
        "id": 13,
        "name": "Wii Sports",
        "image": "https://m.media-amazon.com/images/I/81iNiQ0Tb8L._AC_UF1000,1000_QL80_.jpg",
        "genre": ["Sports"],
        "price": 34.99
    },
    {
        "id": 14,
        "name": "Just Dance 2014",
        "image": "https://m.media-amazon.com/images/I/91WXASLdEgL._AC_UF1000,1000_QL80_.jpg",
        "genre": ["Sports"],
        "price": 19.99
    },
    {
        "id": 15,
        "name": "F1 2024",
        "image": "https://media.contentapi.ea.com/content/dam/ea/f1/f1-24/common/f124-featured-image-16x9.jpg.adapt.crop191x100.1200w.jpg",
        "genre": ["Sports"],
        "price": 89.99
    },
    {
        "id": 16,
        "name": "WWE 2K 24",
        "image": "https://upload.wikimedia.org/wikipedia/en/c/c5/WWE_2K24_Standard_Cover.png",
        "genre": ["Sports"],
        "price": 49.99
    },
    {
        "id": 17,
        "name": "Punch Out (NES)",
        "image": "https://upload.wikimedia.org/wikipedia/en/3/3d/Punch-out_mrdream_boxart.PNG",
        "genre": ["Sports"],
        "price": 29.99
    },
    {
        "id": 18,
        "name": "FORZA MotorSport",
        "image": "https://store-images.s-microsoft.com/image/apps.31966.14520062614241202.dce7e4da-1fb9-4f81-b347-74af80631e33.5fc9c294-ff75-4e5c-8566-73c49bbaebd3?q=90&w=177&h=177",
        "genre": ["Racing"],
        "price": 89.99
    },
    {
        "id": 19,
        "name": "FORZA Horizon 5",
        "image": "https://assets-prd.ignimgs.com/2021/08/24/forza-horizon-5-button-fin-1629830068379.jpg",
        "genre": ["Racing"],
        "price": 49.99
    },
    {
        "id": 20,
        "name": "FORZA Horizon",
        "image": "https://upload.wikimedia.org/wikipedia/en/7/77/Forza_Horizon_boxart.jpg",
        "genre": ["Racing"],
        "price": 14.99
    },

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
