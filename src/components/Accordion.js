import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRepo } from '../store/slice/masterSlice';
import { View, Text } from 'react-native';
import { List } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';


export default function Accordion({ name, url, id, repo }) {

  const dispatch = useDispatch()
  const [expandedId, setExpandedId] = useState(false)

  const _onAccordionPress = (newExpandedId) => {
    dispatch(getRepo(url, name))
    if (expandedId === newExpandedId) {
      setExpandedId(undefined)
    } else {
      setExpandedId(newExpandedId);
    }
  }

  return (

    <List.AccordionGroup
      expandedId={expandedId}
      onAccordionPress={_onAccordionPress}>
      {/* ACCORDION LIST*/}
      <List.Section >
        <List.Accordion
          title={name}
          id={id}
          className='bg-gray-200 border border-gray-400 mx-5 my-1'>

          {
            !repo ?
              <View className='bg-white border border-gray-300 w-[350] h-[50] self-center mx-1 my-1'><Text className='m-auto text-lg'>Loading...</Text>
              </View> :
              repo?.length >= 1 ?
                repo?.map((item, index) => {
                  return <View key={index} className='bg-white border border-gray-300 shadow-lg w-[350] self-center mx-1 my-3'>
                    <View className='flex-row justify-between'>
                      <View className=' w-[290] p-4'>
                        <Text className='text-lg font-bold'>{item?.name}</Text>
                        <Text>{item?.description}</Text>
                      </View>
                      <View className='flex-1 mr-2'>
                        <Text className='m-auto'>{item?.stargazers_count} <FontAwesome name="star" size={15} color="black" /></Text>
                      </View>
                    </View>
                  </View>
                }) :
                <View className='bg-white border border-gray-300 w-[350] h-[50] self-center mx-1 my-1'>
                  <Text className='m-auto text-lg'>Repo is empty</Text>
                </View>
          }

        </List.Accordion>
      </List.Section>
      {/* ACCORDION LIST*/}

    </List.AccordionGroup>

  )
};