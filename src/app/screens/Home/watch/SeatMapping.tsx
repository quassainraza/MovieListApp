import { SafeAreaView, ScrollView } from 'react-native';
import { BG_LIGHT } from '@/constants/Colors';
import { Text } from 'react-native-paper';

const SeatMapping = (props: any) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: BG_LIGHT,
        height: '100%',
      }}>
      <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
        <Text> Seat Mapping</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SeatMapping;
