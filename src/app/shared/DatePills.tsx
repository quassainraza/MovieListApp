import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('screen');
interface Tab {
  name: string;
  color: string;
}
interface TabPillsProps {
  Tabs?: Tab[];
}

const DatePills = ({ Tabs }: TabPillsProps) => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Tabs &&
          Tabs?.map((tab, idx) => (
            <Pill key={idx} label={tab.name} color={tab.color} />
          ))}
      </ScrollView>
    </View>
  );
};

function Pill({ label, color }: { label?: string; color?: string }) {
  return (
    <View style={[styles.pill]}>
      <Text style={[styles.pillInside, { backgroundColor: color }]}>
        {label}
      </Text>
    </View>
  );
}

export default DatePills;

const styles = StyleSheet.create({
  pill: {
    marginTop: 10,
    width: width / 5,
    paddingHorizontal: 5,
  },
  pillInside: {
    padding: 8,
    textAlign: 'center',
    borderRadius: 10,
    color: 'white',
    fontSize: 10,
    fontWeight: '500',
    fontFamily: 'Poppins Regular',
    overflow: 'hidden',
  },
});
