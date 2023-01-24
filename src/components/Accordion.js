import { List } from 'react-native-paper';

import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRepo } from '../store/slice/masterSlice';


export default function MyComponent({ name, url, id }) {
  const dispatch = useDispatch()
  const [expandedId, setExpandedId] = useState(false)

  const _onAccordionPress = (newExpandedId) => {
    console.log(url)
    dispatch(getRepo(url))
    expandedId === newExpandedId
      ? setExpandedId(undefined)
      : setExpandedId(newExpandedId);
  }

  return (
    <List.AccordionGroup expandedId={expandedId}
      onAccordionPress={_onAccordionPress}>
      {/* ACCORDION */}

      <List.Accordion
        title={name}
        id="1"
        className='bg-red-400 mx-5 my-1'
      >
        <View className='bg-yellow-200 w-[350] self-center mx-1'>
          <View className='flex-row justify-between'>
            <View className='bg-green-200 w-[290] p-4'>
              <Text className='text-lg font-bold'>Repository Title</Text>
              <Text>Repository description askdjnj dajkndakjnd ajknd jkasn kjan kjand jknakjsn nkjn  jkan a nakjdnakdn jkand aksjnd kjnaskj njaksndasdkadlka alskdaldskma lkasmdlk maldkm lksam dlkamsd laksmd lkmadkldam kla
              </Text>
            </View>
            <View className='bg-blue-300 flex-1'>
              <Text className='m-auto'>12</Text>
            </View>
          </View>
        </View>

        <View className='bg-red-300 h-[70] w-[350] self-center pt-1 mt-2'>
          <View className='flex-row justify-between'>
            <Text> test 1</Text>
            <Text>12</Text>
          </View>
        </View>

        <View className='bg-red-300 h-[70] w-[350] self-center pt-1 mt-2'>
          <View className='flex-row justify-between'>
            <Text> test 1</Text>
            <Text>12</Text>
          </View>
        </View>

      </List.Accordion>

      {/* ACCORDION */}

    </List.AccordionGroup>
  )
};