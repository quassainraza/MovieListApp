import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { watchScreenBackgroundColor } from '@/constants/Colors';
import { TextInput } from 'react-native-paper';
import CrossIcon from '@assets/svgs/cross.svg';
//   import SearchModal from "./modals/SearchModal";
//   import FilterModal from "./modals/FilterModal";

const GRAY = 'rgb(180,180,180)';
interface SearchFieldProps {
  onSearch: (text: string) => void;
}
const SearchField: React.FC<SearchFieldProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleBackspace = () => {
    setSearchText(searchText.slice(0, -1)); // Remove the last character
  };
  useEffect(() => {
    // Use useEffect to call onSearch when searchText changes
    onSearch(searchText);
  }, [searchText, onSearch]);
  return (
    <View
      style={[
        { margin: 10, padding: 10, paddingVertical: 40, marginVertical: 10 },
      ]}>
      <View style={styles.searchField}>
        <AntDesign name="search1" size={25} color={'gray'} />
        <View style={{ flex: 1 }}>
          <TextInput
            activeUnderlineColor="transparent"
            underlineColor="transparent"
            placeholder="Tv shows, movies and more.."
            placeholderTextColor={'#717171'}
            mode="flat"
            value={searchText}
            onChangeText={text => {
              setSearchText(text);
              onSearch(text); // Call the onSearch callback with the updated text
            }}
            contentStyle={{
              textAlign: 'left',
              backgroundColor: 'transparent',
            }}
            style={{
              color: 'black',
              fontFamily: 'Poppins Regular',
              paddingHorizontal: 10,
              backgroundColor: 'transparent',
            }}></TextInput>
        </View>
        <CrossIcon width={30} height={30} onPress={handleBackspace} />
      </View>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  searchField: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    borderWidth: 0.3,
    borderColor: 'grey',
    paddingHorizontal: 10,
    borderRadius: 40,
    backgroundColor: watchScreenBackgroundColor,
  },
  pill: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: GRAY,
    justifyContent: 'center',
  },
  pillText: {
    color: 'gray',
    marginLeft: 10,
    marginRight: 10,
    marginEnd: 10,
    marginStart: 10,

    fontSize: 15,
  },
  roundedBorder: {
    borderColor: 'rgb(200,200,200)',
    borderWidth: 1,
    padding: 5,
    margin: 7,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
