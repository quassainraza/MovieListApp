import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';

interface CinemaProps {
  time?: string;
  hallNo?: number;
  price?: string;
  bonus?: string;
}

const CinemaItem = ({ time, hallNo, price, bonus }: CinemaProps) => {
  const handleError = (error: any) => {
    console.error('Error loading image:', error);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={{ fontFamily: 'Poppins Bold' }}>{time} </Text>
        <Text>Cintech + Hall {hallNo}</Text>
      </View>
      <View style={styles.card}>
        <FastImage
          source={require('@assets/cinemaSeats.jpeg')}
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.bonusContainer}>
        <Text>From </Text>
        <Text style={{ fontFamily: 'Poppins Bold' }}>{price} </Text>
        <Text>or </Text>
        <Text style={{ fontFamily: 'Poppins Bold' }}>{bonus}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 10,
  },
  textContainer: {
    marginRight: 10, // Adjust spacing between text and image
    alignSelf: 'flex-start',
    marginBottom: 10,
    flexDirection: 'row',
  },
  bonusContainer: {
    alignSelf: 'flex-start',
    marginTop: 10,
    flexDirection: 'row',
  },
  card: {
    width: 250, // Adjust the width as needed
    height: 150,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
  },
  image: {
    height: 150,
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
    color: 'white',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});

export default CinemaItem;
