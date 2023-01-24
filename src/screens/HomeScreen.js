import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TextInput } from 'react-native';
import * as React from 'react';
import { List } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { searchCharacters, setUsers } from '../store/slice/masterSlice';
import useDebounce from '../hooks/useDebounce/hook';
import MyComponent from '../components/Accordion';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeScreen() {

  const dispatch = useDispatch()
  const { users } = useSelector(state => state.masterSlice)

  console.log(users, "<<<<<<<<<<<<<<<< user state di redux")

  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);
  console.log(results, "<<<<")
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        searchCharacters(debouncedSearchTerm).then((results) => {
          setIsSearching(false);
          setResults(results);
          dispatch(setUsers(results))
        });
      } else {
        setResults([]);
        setIsSearching(false);
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );
  return (
    <ScrollView className='flex-1'>

      {/* SEARCH BAR */}
      <View className='justify-center items-center mt-[80]'>
        <TextInput
          className='bg-red-200 w-[350] h-[50] pl-5'
          onChangeText={(text) => setSearchTerm(text)}>
        </TextInput>
      </View>
      {isSearching && <Text>Searching ...</Text>}
      <Text className='ml-5 mt-2 text-lg'>Showing users for "{searchTerm}"</Text>

      {users?.items?.map((item, index) => {

        return <MyComponent name={item.login} url={item.repos_url} key={index} id={index}></MyComponent>
      })}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

