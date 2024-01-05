import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

import { LogBox } from 'react-native';
import BottomTabRouter from '@/routers/BottomTabRouter';
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <PaperProvider>
          <BottomTabRouter />
        </PaperProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
