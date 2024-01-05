import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';

interface MovieProps {
  movieImageUrl: string;
  movieName?: string;
}
const createImageUrl = (path: string, size: string = 'w500') => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
const ListTile = ({ movieImageUrl, movieName }: MovieProps) => {
  //console.log('movie image path: ', movieImageUrl);
  const imageUrl = createImageUrl(movieImageUrl);

  const handleError = (error: any) => {
    console.error('Error loading image:', error);
  };
  return (
    <View style={[styles.card]}>
      <View style={{ position: 'relative' }}>
        <FastImage
          source={{ uri: imageUrl, priority: FastImage.priority.high }}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.overlay}>
          <Text style={styles.movieName}>{movieName}</Text>
        </View>
      </View>
    </View>
  );
};

export default ListTile;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    minHeight: 250,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 20,
    margin: '5%',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
  },
  image: {
    height: 250,
    width: '100%',
    borderRadius: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: 10,
  },
  movieName: {
    fontFamily: 'Poppins Bold',
    fontSize: 20,
    color: 'white', // Set the color you want for the text
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});
