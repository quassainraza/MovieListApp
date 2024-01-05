import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import DotIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const { height } = Dimensions.get('screen');

interface movieItemProps {
  movieTitle?: string;
  backgroundImageUrl: string; // Adjust the type according to your actual image data type
}

const createImageUrl = (path: string, size: string = 'w500') => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

const MovieItem: React.FC<movieItemProps> = ({
  movieTitle,
  backgroundImageUrl,
}) => {
  const fullImageUrl = createImageUrl(backgroundImageUrl);

  console.log('In movie item: ', fullImageUrl);

  return (
    <View style={styles.movieItemContainer}>
      <FastImage
        source={{ uri: fullImageUrl, priority: FastImage.priority.high }}
        style={styles.backgroundImage}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.movieInfoContainer}>
        <Text style={styles.title}>{movieTitle}</Text>
        <DotIcon name="dots-horizontal" size={25} color={'#61C3F2'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  movieItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    height: 100, // Adjust the height as needed
    marginHorizontal: 5,
    borderRadius: 20,
    overflow: 'hidden', // Ensure the borderRadius works with Image
  },
  backgroundImage: {
    width: 130, // Set a specific width for the image
    height: 100, // Set a specific height for the image
    borderRadius: 20,
  },
  movieInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 10,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins Regular',
    color: 'black',
  },
});

export default MovieItem;
