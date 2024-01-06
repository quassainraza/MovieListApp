import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {
  BG_LIGHT,
  TextColor,
  actionPillColor,
  buttonColor,
  fictionPillColor,
  sciencePillColor,
} from '@/constants/Colors';
import { Appbar, Button, Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import SeatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const SeatDetail = (props: any) => {
  const movieTitleAndDate = props.route.params?.paramsKey;
  // console.log('this is seat mapping', movieTitleAndDate);

  const movieDate = movieTitleAndDate.date;
  const movieName = movieTitleAndDate.name;
  const handleBackPress = () => {
    props.navigation.goBack();
  };

  const tabs = [
    { name: 'March 1', color: 'grey' },
    { name: 'March 2', color: 'grey' },
    { name: 'March 3', color: 'grey' },
    { name: 'March 4', color: 'grey' },
    { name: 'March 5', color: 'grey' },
    { name: 'March 6', color: 'grey' },
  ];
  return (
    <SafeAreaView
      style={{
        backgroundColor: BG_LIGHT,
        height: '100%',
      }}>
      <Appbar.Header style={{ marginTop: '10%' }}>
        <Appbar.BackAction
          onPress={() => {
            handleBackPress();
          }}
        />
        <View
          style={{
            flexDirection: 'column',
            alignSelf: 'center',
            alignContent: 'center',
            alignItems: 'center',
            width: '80%',
          }}>
          <Appbar.Content
            titleStyle={{
              textAlign: 'center',
              fontFamily: 'Poppins Regular',
              color: TextColor,
              fontSize: 20,
            }}
            title={movieName}
          />
          <Appbar.Content
            titleStyle={{
              textAlign: 'center',
              fontFamily: 'Poppins Regular',
              color: buttonColor,
              fontSize: 15,
            }}
            title={movieDate + '|' + '12:30 Hall 1'}
          />
        </View>
      </Appbar.Header>

      <ScrollView
        contentContainerStyle={{
          minHeight: '100%',
          backgroundColor: 'white',
        }}>
        <View style={styles.mainContainer}>
          <View style={styles.card}>
            <FastImage
              source={require('@assets/cinemaSeats.jpeg')}
              style={styles.image}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>

          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ flexDirection: 'row', marginTop: '5%' }}>
              <SeatIcon name="seat" size={20} color={actionPillColor} />
              <Text> Selected</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: '5%' }}>
              <SeatIcon name="seat" size={20} color={fictionPillColor} />
              <Text> Not Available</Text>
            </View>
          </View>

          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ flexDirection: 'row', marginTop: '5%' }}>
              <SeatIcon name="seat" size={20} color={buttonColor} />
              <Text> VIP {'(150$)'}</Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: '5%' }}>
              <SeatIcon name="seat" size={20} color={sciencePillColor} />
              <Text> Not Available {'(50$)'}</Text>
            </View>
          </View>

          <Button
            mode="contained"
            textColor="white"
            style={styles.rowButton}
            //onPress={handleGetTicketsPress}
            buttonColor={'#F7F7F7'}>
            <Text
              style={{
                fontFamily: 'Poppins Regular',
                color: 'black',
                fontSize: 10,
              }}>
              {' '}
              4 / 3 row{'    '}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins Bold',
                color: 'black',
                fontSize: 15,
              }}>
              {'X'}
            </Text>
          </Button>

          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 10,
              gap: 10,
              paddingHorizontal: 10,
              margin: 10,
            }}>
            <Button
              mode="contained"
              textColor="white"
              style={styles.pricebutton}
              //onPress={handleGetTicketsPress}
              buttonColor={'#F7F7F7'}>
              <View style={{ flexDirection: 'column' }}></View>{' '}
              <Text
                style={{
                  fontFamily: 'Poppins Regular',
                  color: 'black',
                  fontSize: 10,
                }}>
                {' '}
                Total Price{' '}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins Bold',
                  color: 'black',
                  fontSize: 15,
                }}>
                {'$ 50'}
              </Text>
            </Button>
            <Button
              mode="contained"
              textColor="white"
              style={styles.button}
              //onPress={handleGetTicketsPress}
              buttonColor={buttonColor}>
              {' '}
              <Text
                style={{
                  fontFamily: 'Poppins Bold',
                  color: 'white',
                  fontSize: 18,
                }}>
                {' '}
                Procee To Pay{' '}
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SeatDetail;

const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    marginHorizontal: '2%',
    width: '100%',
    marginTop: '10%',
    backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Poppins Bold',
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
  mainContainer: {
    marginTop: '20%',
    padding: 20,
  },
  button: {
    color: 'white',
    minWidth: '50%',
    borderRadius: 10,
    marginTop: '10%',
    padding: 10,
    fontFamily: 'Poppins Bold',
  },
  pricebutton: {
    color: 'white',
    minWidth: '30%',
    borderRadius: 10,
    marginTop: '10%',
    padding: 10,
    fontFamily: 'Poppins Regular',
  },
  rowButton: {
    color: 'white',
    minWidth: '50%',
    maxWidth: '50%',
    borderRadius: 10,
    marginTop: '5%',
    padding: 10,
    fontFamily: 'Poppins Regular',
  },
  card: {
    minWidth: Dimensions.get('screen').width, // Adjust the width as needed
    height: Dimensions.get('screen').height / 3,
    alignItems: 'center',

    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
  },
  image: {
    minWidth: Dimensions.get('screen').width, // Adjust the width as needed
    height: Dimensions.get('screen').height / 3,
  },
});
