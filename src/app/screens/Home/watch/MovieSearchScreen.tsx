import { FlatList, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import {
  BG_LIGHT,
  TextColor,
  watchScreenBackgroundColor,
} from '@/constants/Colors';
import SearchField from '@/shared/SearchField';
import { View } from 'native-base';
import GenreItem from '@/shared/GenreItem';
import { useEffect, useState } from 'react';
import MovieItem from '@/shared/MovieItem';
import { Text } from 'react-native-paper';
interface Movie {
  title: string;
  poster_path: string;
  // Add other properties as needed (e.g., image_url)
}
const MovieSearchScreen = (props: any) => {
  const posterPaths = props.route.params?.paramsKey;
  const moviess = props.route.params?.paramsKey1;

  //console.log('movies', movies);
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  //setMovies(moviess);
  // console.log(posterPaths);
  // console.log('first: ', posterPaths[0]);
  const genres = [
    { name: 'Thriller', path: posterPaths[0] },
    { name: 'History', path: posterPaths[1] },
    { name: 'Romance', path: posterPaths[2] },
    { name: 'Science Fiction', path: posterPaths[3] },
    { name: 'Horror', path: posterPaths[4] },
    { name: 'Animation', path: posterPaths[5] },
    { name: 'Thriller', path: posterPaths[6] },
    { name: 'Adventure', path: posterPaths[7] },
    { name: 'Fantasy', path: posterPaths[8] },
    { name: 'War', path: posterPaths[9] },
    { name: 'Action', path: posterPaths[10] },
    { name: 'Drama', path: posterPaths[11] },
    { name: 'Animation', path: posterPaths[12] },
  ];
  const handleSearch = (text: string) => {
    setSearchValue(text);
  };
  useEffect(() => {
    // Use useEffect to call onSearch when searchText changes
    setMovies(moviess);
  }, [moviess]);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().startsWith(searchValue.toLowerCase()),
  );

  return (
    <SafeAreaView
      style={{
        backgroundColor: BG_LIGHT,
        height: '100%',
      }}>
      <SearchField onSearch={handleSearch} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%',
          backgroundColor: watchScreenBackgroundColor,
        }}>
        <View style={styles.genreContainer}>
          {searchValue === '' ? (
            genres.map((genre, index) => (
              <GenreItem
                key={index}
                genreTitle={genre.name}
                backgroundImageUrl={genre.path}
              />
            ))
          ) : (
            <>
              <View
                style={{ flexDirection: 'column', width: '100%', padding: 5 }}>
                <Text
                  style={{
                    fontFamily: 'Poppins Regular',
                    fontSize: 15,
                    color: TextColor,
                  }}>
                  {' '}
                  Top Results
                </Text>
                <View style={styles.divider} />
                <FlatList
                  data={filteredMovies}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => (
                    <View style={{ flexDirection: 'column' }}>
                      <MovieItem
                        key={index}
                        movieTitle={item.title}
                        backgroundImageUrl={item.poster_path}
                      />
                    </View>
                  )}
                />
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieSearchScreen;

const styles = StyleSheet.create({
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: '10%',
    paddingBottom: 50,
  },
  divider: {
    borderBottomWidth: 0.2,
    borderBottomColor: 'grey', // Adjust the color as needed
    marginTop: '5%',
    marginBottom: '5%',
  },
});
