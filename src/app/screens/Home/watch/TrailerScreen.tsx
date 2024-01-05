import {
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
  Dimensions,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useCallback, useEffect, useState } from 'react';
import { Button } from 'react-native-paper';

import Orientation from 'react-native-orientation-locker';

const TrailerScreen = (props: any) => {
  const trailerKey = props.route.params?.paramsKey;
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: string) => {
    if (state === 'ended') {
      setPlaying(false);
      //   Alert.alert('video has finished playing!');
      props.navigation.goBack();
    }
  }, []);

  useEffect(() => {
    const orientationDidChange = (orientation: string) => {
      if (
        orientation === 'LANDSCAPE-LEFT' ||
        orientation === 'LANDSCAPE-RIGHT'
      ) {
        // Enter full-screen mode
        setPlaying(true);
      } else {
        // Exit full-screen mode
        setPlaying(false);
      }
    };

    // Check if the library is available
    if (Orientation) {
      // Subscribe to orientation changes
      Orientation.addOrientationListener(orientationDidChange);

      // Set initial orientation if available
      const initialOrientation = Orientation.getInitialOrientation();
      if (initialOrientation) {
        orientationDidChange(initialOrientation);
      }

      // Clean up when the component unmounts
      return () => {
        Orientation.removeOrientationListener(orientationDidChange);
      };
    } else {
      console.warn('Orientation library is not available.');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);
  console.log('trailerKey: ', trailerKey);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <YoutubePlayer
          height={playing ? Dimensions.get('screen').height : 300}
          play={playing}
          onFullScreenChange={() => true}
          videoId={trailerKey}
          onChangeState={onStateChange}
          webViewProps={{
            androidLayerType:
              Platform.OS === 'android' && Platform.Version <= 22
                ? 'hardware'
                : 'none',
          }}
        />
        <Button onPress={togglePlaying}> {playing ? 'pause' : 'play'}</Button>
      </View>
    </SafeAreaView>
  );
};

export default TrailerScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
