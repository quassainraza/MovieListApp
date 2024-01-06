import Watch from '@/screens/Home/Watch';
import MovieDetailScreen from '@/screens/Home/watch/MovieDetailScreen';
import MovieSearchScreen from '@/screens/Home/watch/MovieSearchScreen';
import SeatDetail from '@/screens/Home/watch/SeatDetail';
import SeatMapping from '@/screens/Home/watch/SeatMapping';
import TrailerScreen from '@/screens/Home/watch/TrailerScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

const watchRouter = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen component={Watch} name="Watch" />
      <Screen component={MovieDetailScreen} name="movieDetailsScreen" />
      <Screen component={MovieSearchScreen} name="movieSearchScreen" />
      <Screen component={SeatMapping} name="seatMapping" />
      <Screen component={TrailerScreen} name="trailerScreen" />
      <Screen component={SeatDetail} name="seatDetail" />
    </Navigator>
  );
};
export default watchRouter;
