import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import {
  BG_LIGHT,
  TextColor,
  buttonColor,
  watchScreenBackgroundColor,
} from '@/constants/Colors';
import { Appbar, Button, Text } from 'react-native-paper';
import DatePills from '@/shared/DatePills';
import CinemaItem from '@/shared/CinemaItem';
const SeatMapping = (props: any) => {
  const movieTitleAndDate = props.route.params?.paramsKey;
  // console.log('this is seat mapping', movieTitleAndDate);

  const movieDate = movieTitleAndDate.date;
  const movieName = movieTitleAndDate.title;
  const handleBackPress = () => {
    props.navigation.goBack();
  };

  const movieDateObject = { name: movieName, date: movieDate };

  const handleSelectSeats = () => {
    props.navigation.navigate('seatDetail', { paramsKey: movieDateObject });
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
            title={'In Theaters ' + movieDate}
          />
        </View>
      </Appbar.Header>

      <ScrollView
        contentContainerStyle={{
          minHeight: '100%',
          backgroundColor: watchScreenBackgroundColor,
        }}>
        <View style={styles.mainContainer}>
          <Text style={{ fontSize: 20, color: TextColor }}> Date</Text>
          <DatePills Tabs={tabs} />

          <ScrollView horizontal>
            <CinemaItem time="12:30" hallNo={1} price="$50" bonus="2500" />
            <CinemaItem time="12:30" hallNo={1} price="$50" bonus="2500" />
            <CinemaItem time="12:30" hallNo={1} price="$50" bonus="2500" />
            <CinemaItem time="12:30" hallNo={1} price="$50" bonus="2500" />
            <CinemaItem time="12:30" hallNo={1} price="$50" bonus="2500" />
          </ScrollView>

          <Button
            mode="contained"
            textColor="white"
            style={styles.button}
            onPress={handleSelectSeats}
            buttonColor={buttonColor}>
            {' '}
            <Text
              style={{
                fontFamily: 'Poppins Bold',
                color: 'white',
                fontSize: 18,
              }}>
              {' '}
              Select Seats{' '}
            </Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SeatMapping;

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
    minWidth: '80%',
    borderRadius: 10,
    marginTop: '50%',
    padding: 10,
    fontFamily: 'Poppins Bold',
  },
});
