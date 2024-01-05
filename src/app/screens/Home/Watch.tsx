import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  BG_LIGHT,
  TextColor,
  watchScreenBackgroundColor,
} from '@/constants/Colors';
import { View } from '@gluestack-ui/themed';
import ListTile from '@/shared/ListTile';
import { Text } from 'react-native-paper';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import { useEffect, useState } from 'react';
interface Movie {
  title: string;
  poster_path: string;
  // Add other properties as needed (e.g., image_url)
}
const Watch = (props: any) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const handleOnPress = (index: number) => {
    props.navigation.navigate('movieDetailsScreen', {
      paramsKey: movies[index],
    });
  };

  const findposter_paths = movies.map((posters: any) => {
    const poster_path = posters.poster_path;
    return poster_path;
  });

  const poster_paths = [...findposter_paths];

  console.log('all posterpathes: ', poster_paths);

  const handleSearch = () => {
    props.navigation.navigate('movieSearchScreen', {
      paramsKey: poster_paths,
      paramsKey1: movies,
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your actual API endpoint and API key
        const apiKey = 'de68bece64c34c9f2d671e03342f6cf6';
        const apiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        //console.log('results: ', data.results);
        const firstMovieTitle = data.results[0].title;
        //console.log(firstMovieTitle);
        setMovies(data.results); // Assuming the response has a 'results' property with an array of movies
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <SafeAreaView
      style={{
        backgroundColor: BG_LIGHT,
        height: '100%',
      }}>
      <View
        style={[
          {
            backgroundColor: BG_LIGHT,
            elevation: 4,
            zIndex: 10,
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
            marginTop: '10%',
            marginBottom: '5%',
          }}>
          <Text style={styles.watchTextStyle}>Watch</Text>
          <SearchIcon
            onPress={handleSearch}
            name="search1"
            size={20}
            color={TextColor}
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: watchScreenBackgroundColor }}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          movies.map((movie, index) => (
            <TouchableOpacity onPress={() => handleOnPress(index)}>
              <ListTile
                key={index}
                movieName={movie.title}
                movieImageUrl={movie.poster_path}
              />
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Watch;
const styles = StyleSheet.create({
  watchTextStyle: {
    fontFamily: 'Poppins Bold',
    fontSize: 20,
    fontWeight: '200',
    color: TextColor,
    lineHeight: 20,
    letterSpacing: 2,
  },
});
