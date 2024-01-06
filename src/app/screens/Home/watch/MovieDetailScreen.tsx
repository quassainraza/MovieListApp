import { StyleSheet } from 'react-native';
import {
  BG_LIGHT,
  TextColor,
  actionPillColor,
  buttonColor,
  fictionPillColor,
  overViewParaTextColor,
  sciencePillColor,
  thrillerPillColor,
} from '@/constants/Colors';
import { APP_MAX_WIDTH } from '@/constants/Theme';
import { ScrollView, View } from 'native-base';
import FastImage from 'react-native-fast-image';
import Backarrow from 'react-native-vector-icons/Entypo';
import { Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabPills from '@/shared/TabPills';
import { useEffect, useState } from 'react';
const createImageUrl = (path: string, size: string = 'w500') => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

function convertDateFormat(inputDate: any) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [year, month, day] = inputDate.split('-');
  const monthName = months[parseInt(month, 10) - 1];

  return `${monthName} ${parseInt(day, 10)} ${year}`;
}
const MovieDetailScreen = (props: any) => {
  // console.log(props.route.params?.paramsKey);

  const movieDetails = props.route.params?.paramsKey;
  const movieImageUrl = createImageUrl(movieDetails.backdrop_path);
  const movieDate = movieDetails.release_date;
  const overview = movieDetails.overview;
  const movieID = movieDetails.id;

  const formattedDate = convertDateFormat(movieDate);

  const [movieTitle, setMovieTitle] = useState('');
  const [movieGenres, setMovieGenres] = useState<string[]>([]);
  const [trailerKey, setTrailerKey] = useState('');
  console.log(formattedDate);
  console.log(movieImageUrl);

  const handleBackPress = () => {
    props.navigation.goBack();
  };

  const colorNames = [
    actionPillColor,
    thrillerPillColor,
    sciencePillColor,
    fictionPillColor,
  ];

  const tabs = [
    { name: 'Drama', color: colorNames[0] },
    { name: 'Comedy', color: colorNames[1] },
    { name: 'Romance', color: colorNames[2] },
    { name: 'Science Fiction', color: colorNames[3] },
    { name: 'Horror', color: colorNames[0] },
    { name: 'Thriller', color: colorNames[1] },
    { name: 'Animation', color: colorNames[2] },
    { name: 'Adventure', color: colorNames[3] },
    { name: 'Fantasy', color: colorNames[0] },
    { name: 'Family', color: colorNames[1] },
    { name: 'Action', color: colorNames[2] },
    { name: 'War', color: colorNames[3] },
    { name: 'History', color: colorNames[0] },
  ];
  const dynamicTabs = movieGenres.map((genre: any) => {
    const genreName = genre.name || '';
    const tab = tabs.find(t => t.name === genreName);
    return { name: genreName, color: tab?.color || '#CCCCCC' };
  });

  const newDynamicTabs = [...dynamicTabs];

  //console.log('hello: ', newDynamicTabs);

  //console.log('movie title: ', movieTitle);

  const movieTitleAndDate = { title: movieTitle, date: formattedDate };

  console.log('movie title and date: ', movieTitleAndDate);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your actual API endpoint and API key
        const apiKey = 'de68bece64c34c9f2d671e03342f6cf6';
        const apiUrl = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}`;
        const apiUrlForVideos = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${apiKey}`;
        const response = await fetch(apiUrl);
        const getVideoResponse = await fetch(apiUrlForVideos);
        const data = await response.json();
        const videoData = await getVideoResponse.json();

        //console.log('video url: ', videoData);
        console.log('this is response: ', data);
        setMovieTitle(data.title);
        const officialTrailerObject = videoData.results.find(
          (video: { name: string }) => video.name === 'Official Trailer',
        );

        // Extract the key from the object
        const officialTrailerKey = officialTrailerObject
          ? officialTrailerObject.key
          : null;

        //console.log('Official Trailer Key:', officialTrailerKey);
        setTrailerKey(officialTrailerKey);
        setMovieGenres(data.genres);
      } catch (error) {
        console.error('Error fetching movie data:', error);
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleWatchTrailer = () => {
    props.navigation.navigate('trailerScreen', { paramsKey: trailerKey });
  };

  const handleGetTicketsPress = () => {
    props.navigation.navigate('seatMapping', { paramsKey: movieTitleAndDate });
  };

  return (
    <View
      style={{
        backgroundColor: BG_LIGHT,
        height: '100%',
      }}>
      <ScrollView
        contentContainerStyle={{ minHeight: '100%' }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <FastImage
            style={{
              flex: 1,
              maxWidth: '100%',
              maxHeight: '60%',
              minHeight: '60%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
            }}
            source={{ uri: movieImageUrl, priority: FastImage.priority.high }}
          />
          <SafeAreaView style={styles.appBar}>
            <Backarrow
              name="chevron-left"
              size={25}
              color={'white'}
              onPress={handleBackPress}
            />

            <Text style={styles.title}>Watch</Text>
          </SafeAreaView>

          <View style={styles.buttonAndTitleContainer}>
            <Text style={styles.date}> In Theaters {formattedDate}</Text>
            <Button
              mode="contained"
              textColor="white"
              style={styles.button}
              onPress={handleGetTicketsPress}
              buttonColor={buttonColor}>
              {' '}
              <Text
                style={{
                  fontFamily: 'Poppins Bold',
                  color: 'white',
                  fontSize: 18,
                }}>
                {' '}
                Get Tickets{' '}
              </Text>
            </Button>

            <Button
              mode="outlined"
              textColor="white"
              buttonColor="transparent"
              icon={'play'}
              onPress={handleWatchTrailer}
              style={styles.buttonTransparent}>
              {' '}
              <Text
                style={{
                  fontFamily: 'Poppins Bold',
                  color: 'white',
                  fontSize: 18,
                }}>
                {' '}
                Watch Trailer{' '}
              </Text>
            </Button>
          </View>
          <View style={styles.genreAndOverviewContainter}>
            <Text style={styles.genreText}>Genres</Text>
            <TabPills Tabs={newDynamicTabs} />
            <View style={styles.divider} />
            <Text style={styles.overViewText}>Overview </Text>
            <Text style={styles.overViewParaText}>{overview}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
  mainContainer: {
    minHeight: '100%',
    minWidth: '100%',
    maxWidth: APP_MAX_WIDTH,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  appBar: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: '10%',
    marginHorizontal: '5%',
    gap: 20,
    width: '100%',
    marginTop: 10,
    //paddingHorizontal: 10,
    backgroundColor: 'transparent', // Set your desired background color
  },
  buttonAndTitleContainer: {
    position: 'absolute',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    marginTop: '60%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  title: {
    fontFamily: 'Poppins Bold',
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
  },
  date: {
    fontFamily: 'Poppins Bold',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    color: 'white',
    minWidth: '85%',
    borderRadius: 10,
    marginTop: 5,
    padding: 10,
    fontFamily: 'Poppins Bold',
  },
  buttonTransparent: {
    color: 'white',
    minWidth: '85%',
    borderRadius: 10,
    marginTop: 5,
    padding: 10,
    borderWidth: 2,
    borderColor: buttonColor,
    fontSize: 20,
  },
  genreAndOverviewContainter: {
    flexDirection: 'column',
    paddingHorizontal: '10%',
    //backgroundColor: 'red',
    marginTop: '5%',
  },
  genreText: {
    fontFamily: 'Poppins Bold',
    fontSize: 20,
    color: TextColor,
  },
  overViewText: {
    fontFamily: 'Poppins Bold',
    fontSize: 20,
    color: TextColor,
    marginBottom: '2%',
  },
  divider: {
    borderBottomWidth: 0.2,
    borderBottomColor: 'grey', // Adjust the color as needed
    marginTop: '5%',
    marginBottom: '5%',
  },

  overViewParaText: {
    fontFamily: 'Poppins Regular',
    fontSize: 15,
    color: overViewParaTextColor,
    paddingBottom: '5%',
  },
});
