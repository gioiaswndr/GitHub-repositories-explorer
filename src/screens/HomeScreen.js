import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCharacters, setUsers } from '../store/slice/masterSlice';
import { Text, View, ScrollView, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import useDebounce from '../useDebounce/hook';
import Accordion from '../components/Accordion';
import LottieView from 'lottie-react-native';

export default function HomeScreen() {

  const dispatch = useDispatch()
  const { users } = useSelector(state => state.masterSlice)

  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchName, setSearchName] = useState("")
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        searchCharacters(debouncedSearchTerm).then((results) => {
          setIsSearching(false);
          setResults(results);
          setSearchName(searchTerm)
          dispatch(setUsers(results))
        });
      } else {
        setResults([]);
        setIsSearching(false);
      }
    },
    [debouncedSearchTerm]
  );

  useEffect(() => {
    dispatch(setUsers(undefined))
    setResults(0)
  }, [searchTerm])

  return (
    <ScrollView className='flex-1'>

      {/* SEARCH BAR */}
      <View className='justify-center items-center mt-[80]'>
        <TextInput
          className='w-[350] h-[50] pl-5 bg-gray-100 border border-gray-300 '
          placeholder='Enter username'
          onChangeText={(text) => setSearchTerm(text)}>
        </TextInput>
      </View>
      {/* SEARCH BAR */}

      {
        searchName && <Text className='ml-5 mt-3 text-lg'>Showing users for "{searchName}"</Text>
      }

      <View className='pb-40'>

        {
          users?.items?.map((item, index) => {
            return <Accordion name={item.login} url={item.repos_url} key={index} id={item.id} repo={item.repo}></Accordion>
          })
        }

        {
          results?.total_count === 0 && <View className='h-full w-full mt-[40]'>
            <LottieView
              autoPlay
              source={require('../lottie/404NotFoundAnimation.json')}
            />
          </View>
        }

      </View>

      {
        isSearching && <View className='h-full w-full absolute top-[250]'>
          <LottieView
            autoPlay
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require('../lottie/searchAnimation.json')}
          />
        </View>
      }

      <StatusBar style="auto" />
    </ScrollView>
  );
}

