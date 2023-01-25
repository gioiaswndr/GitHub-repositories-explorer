import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { List } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { searchCharacters, setOneUrl, setUsers } from '../store/slice/masterSlice';
import useDebounce from '../hooks/useDebounce/hook';
import MyComponent from '../components/Accordion';
import { useDispatch, useSelector } from 'react-redux';
import { getRepo } from '../store/slice/masterSlice';

export default function HomeScreen() {

  const dispatch = useDispatch()
  const { users } = useSelector(state => state.masterSlice)
  // console.log(users.items[0], '<<<<<')
  // const { oneUrl } = useSelector(state => state.masterSlice)

  // console.log(users, "<<<<<<<<<<<<<<<< user state di redux")

  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);
  // console.log(results, "<<<<")
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

  // const { repos } = useSelector(state => state.masterSlice)
  // const [expandedId, setExpandedId] = React.useState(false)


  // const _onAccordionPress = (newExpandedId, uri) => {
  //   // dispatch(getRepo(url))
  //   console.log(uri)
  //   if (expandedId === newExpandedId) {
  //     console.log("ok MEMEK")
  //     setExpandedId(undefined)
  //   } else {
  //     console.log("ok KONTOL")
  //     setExpandedId(newExpandedId);
  //   }
  //   // expandedId === newExpandedId
  //   //   ? setExpandedId(undefined)
  //   //   : setExpandedId(newExpandedId);

  // }

  // const onPressHandler = (uri) => {
  //   console.log(uri, "<<<<< di depan bro")
  // }



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
      <Text className='ml-5 mt-2 text-lg'>Showing users for {searchTerm}</Text>

      <View className='pb-40'>
        {users?.items?.map((item, index) => {
          // console.log(item, "<<<<< di loopingan")
          return <MyComponent name={item.login} url={item.repos_url} key={index} id={item.id} repo={item.repo}></MyComponent>

          // return (

          //   <List.AccordionGroup
          //     expandedId={expandedId}
          //     onAccordionPress={_onAccordionPress}
          //   >
          //     {/* <List.Section > */}
          //     {/* <MyComponent
          //         uri={item.url}
          //         name={item.login}
          //         key={index}
          //         id={item.id}
          //         onPressHandler={onPressHandler}>
          //       </MyComponent> */}
          //     {/* </List.Section> */}
          //     <TouchableOpacity onPress={() => console.log("test")}>
          //       <List.Accordion
          //         title={item?.login}
          //         id={item?.id}>
          //         {/* <List.Item title="List item 1" />
          //         <List.Item title="List item 2" /> */}
          //       </List.Accordion>
          //     </TouchableOpacity>
          //   </List.AccordionGroup>
          // )
        })}
      </View>


      <StatusBar style="auto" />
    </ScrollView>
  );
}

