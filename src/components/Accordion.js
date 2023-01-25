import { List } from 'react-native-paper';

import { View, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepo } from '../store/slice/masterSlice';
import * as React from 'react';


export default function MyComponent({ name, url, id, onPressHandler, setUrl, repo }) {
  // console.log(uri, "di belakang")

  const { repos } = useSelector(state => state.masterSlice)
  // console.log(repos[0])

  const dispatch = useDispatch()
  const [expandedId, setExpandedId] = useState(false)

  // console.log("---------------------------")
  // console.log(expandedId, "<<<<<<< expendedId sebelom kena function")
  // console.log("---------------------------")

  const _onAccordionPress = (newExpandedId) => {

    // console.log("===================================")
    // console.log(expandedId, "<<<<<< expandedId")
    // console.log(newExpandedId, "<<<<<<< newExpandedId")
    // console.log(expandedId === newExpandedId, "<<<<banding antara expanded")
    // console.log("===================================")

    // console.log(url)
    dispatch(getRepo(url, name))

    if (expandedId === newExpandedId) {
      setExpandedId(undefined)
      console.log("kondisi 1")
    } else {
      setExpandedId(newExpandedId);
      console.log("kondisi 2")
    }

    //   // expandedId === newExpandedId
    //   //   ? setExpandedId(undefined)
    //   //   : setExpandedId(newExpandedId);
  }

  // ++===================================

  // const [expandedId, setExpandedId] = React.useState(false)

  // const _onAccordionPress = (newExpandedId: string | number) =>
  //   expandedId === newExpandedId
  //     ? setExpandedId(undefined)
  //     : setExpandedId(newExpandedId);

  // ==================================

  const handlePress = (uri) => {
    console.log(uri, "<<<< di dalem func handlepress")
  }

  return (
    // <TouchableOpacity onPress={() => handlePress(uri)}>
    //   <List.Accordion
    //     title={name}
    //     id={id}>
    //     <List.Item title="List item 1" />
    //     <List.Item title="List item 2" />
    //   </List.Accordion>
    // </TouchableOpacity>

    <List.AccordionGroup
      expandedId={expandedId}
      onAccordionPress={_onAccordionPress}>
      {/* ACCORDION */}
      <List.Section >
        <List.Accordion
          title={name}
          id={id}
          className='bg-red-400 mx-5 my-1'
        >
          {/* <List.Item title="List item 1" />
          <List.Item title="List item 2" /> */}
          {repo.length > 1 ?
            repo?.map((item, index) => {
              return <View key={index} className='bg-yellow-200 w-[350] self-center mx-1 my-1'>
                <View className='flex-row justify-between'>
                  <View className='bg-green-200 w-[290] p-4'>
                    <Text className='text-lg font-bold'>{item?.name}</Text>
                    <Text>{item?.description}</Text>
                  </View>
                  <View className='bg-blue-300 flex-1'>
                    <Text className='m-auto'>{item?.stargazers_count}⭐️</Text>
                  </View>
                </View>
              </View>
            }) :

            <View className='bg-yellow-200 w-[350] h-[50] self-center mx-1 my-1'><Text className='m-auto text-lg'>repo is empty</Text></View>

          }

        </List.Accordion>
      </List.Section>
      {/* ACCORDION */}

    </List.AccordionGroup>

    // ++===================================

    // <List.AccordionGroup
    //   expandedId={expandedId}
    //   onAccordionPress={_onAccordionPress}>
    //   <List.Section >

    //   </List.Section>

    // </List.AccordionGroup>
  )
};