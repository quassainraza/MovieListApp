import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');
interface genreItemProps {
  genreTitle?: string;
  backgroundImageUrl: string; // Adjust the type according to your actual image data type
}
const createImageUrl = (path: string, size: string = 'w500') => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
const GenreItem: React.FC<genreItemProps> = ({
  genreTitle,
  backgroundImageUrl,
}) => {
  const fullImageUrl = createImageUrl(backgroundImageUrl);

  //console.log(fullImageUrl);
  return (
    <View
      style={[
        styles.menuItemCard,
        {
          borderColor: 'black',
          borderWidth: 1,
        },
      ]}>
      <View style={{ position: 'relative' }}>
        <FastImage
          source={{ uri: fullImageUrl, priority: FastImage.priority.high }}
          style={styles.backgroundImage}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.overlay}>
          <Text style={styles.title}>{genreTitle}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItemCard: {
    // backgroundColor: 'red',
    marginTop: 5,
    width: width / 2 - 15, // Adjust the width based on your layout
    height: height * 0.2, // Adjust the height as needed
    marginHorizontal: 5,
    borderRadius: 20,
    overflow: 'hidden', // Ensure the borderRadius works with Image
  },
  backgroundImage: {
    resizeMode: 'cover',
    height: height * 0.2, // Adjust the height as needed
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
  },
  title: {
    alignContent: 'flex-end',
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins Regular',
    marginBottom: '20%',
    color: 'white',
  },
  subtitle: {
    marginTop: 5,
    alignContent: 'flex-start',
    paddingHorizontal: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  discount: {
    marginTop: 5,
    alignContent: 'flex-start',
    paddingHorizontal: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#00FF32',
  },

  button: {
    backgroundColor: '#FFC009',
    borderRadius: 10,
    margin: 10,
  },
});

export default GenreItem;
