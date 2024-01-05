import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bookings from '@/screens/Home/Screen4';
import {
  TapBarBackgroundColor,
  TapBarFocusedColor,
  TapBarUnFocusedColor,
} from '@/constants/Colors';
import Whishlist from '@/screens/Home/Screen1';
import Inbox from '@/screens/Home/Screen3';
import DashboardLogo from '@assets/svgs/dashboardSvg.svg';
import WatchLogo from '@assets/svgs/watchSvg.svg';
import MediaLogo from '@assets/svgs/mediaSvg.svg';
import MoreLogo from '@assets/svgs/moreSvg.svg';
import watchRouter from './WatchRouter';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabRouter = (props: any) => {
  return (
    <Navigator
      initialRouteName="WatchRouter"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: TapBarBackgroundColor,
          paddingHorizontal: 10,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          paddingVertical: 10,
        },
        headerShown: false,
      }}>
      <Screen
        component={Whishlist}
        name="whishlist"
        options={{
          tabBarActiveTintColor: TapBarFocusedColor,
          tabBarInactiveTintColor: TapBarUnFocusedColor,
          tabBarLabel: 'Dashboard',
          tabBarButton: () => (
            <CustomTabButton
              icon={<DashboardLogo fill={TapBarUnFocusedColor} />}
              label="Dashboard"
            />
          ),
          tabBarLabelStyle: { fontFamily: 'Poppins Regular' },
          // tabBarIcon: ({ focused }) => (
          //   <DashboardLogo
          //     fill={focused ? TapBarFocusedColor : TapBarUnFocusedColor}
          //     //color={focused ? TapBarFocusedColor : TapBarUnFocusedColor}
          //   />
          // ),
        }}
      />
      <Screen
        component={watchRouter}
        name="WatchRouter"
        options={{
          tabBarActiveTintColor: TapBarFocusedColor,
          tabBarInactiveTintColor: TapBarUnFocusedColor,
          tabBarLabel: 'Watch',
          tabBarLabelStyle: { fontFamily: 'Poppins Regular' },
          tabBarButton: ({ accessibilityState, onPress }) => (
            <CustomTabButton
              icon={<WatchLogo fill={TapBarFocusedColor} />}
              label="Watch"
              focused={accessibilityState?.selected}
              onPress={onPress}
            />
          ),
          // tabBarIcon: ({ focused }) => (
          //   <WatchLogo
          //     fill={focused ? TapBarFocusedColor : TapBarUnFocusedColor}
          //     color={focused ? TapBarFocusedColor : TapBarUnFocusedColor}
          //   />
          // ),
        }}
      />
      <Screen
        component={Bookings}
        name="bookings"
        options={{
          tabBarActiveTintColor: TapBarFocusedColor,
          tabBarInactiveTintColor: TapBarUnFocusedColor,
          tabBarLabel: 'Media Library',
          tabBarButton: () => (
            <CustomTabButton
              icon={<MediaLogo color={TapBarUnFocusedColor} />}
              label="Media Library"
            />
          ),
          tabBarLabelStyle: { fontFamily: 'Poppins Regular' },
          // tabBarIcon: ({ focused }) => (
          //   <MediaLogo
          //     color={focused ? TapBarFocusedColor : TapBarUnFocusedColor}
          //   />
          // ),
        }}
      />
      <Screen
        component={Inbox}
        name="inbox"
        options={{
          tabBarActiveTintColor: TapBarFocusedColor,
          tabBarInactiveTintColor: TapBarUnFocusedColor,
          tabBarLabel: 'More',
          tabBarButton: () => (
            <CustomTabButton
              icon={<MoreLogo color={TapBarUnFocusedColor} />}
              label="More"
            />
          ),
          tabBarLabelStyle: { fontFamily: 'Poppins Regular' },
          // tabBarIcon: ({ focused }) => (
          //   <MoreLogo
          //     color={focused ? TapBarFocusedColor : TapBarUnFocusedColor}
          //   />
          // ),
        }}
      />
    </Navigator>
  );
};
const CustomTabButton = ({ icon, label, focused, onPress }: any) => (
  <TouchableOpacity
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
      marginTop: 5,
      marginBottom: 10,
    }}
    onPress={onPress}
    disabled={!focused} // Disable onPress for tabs other than the active one
  >
    {icon}
    <Text
      style={{ color: focused ? TapBarFocusedColor : TapBarUnFocusedColor }}>
      {label}
    </Text>
  </TouchableOpacity>
);
export default BottomTabRouter;
