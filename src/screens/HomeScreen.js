import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TextInput } from 'react-native';
import * as React from 'react';
import { List } from 'react-native-paper';

const MyComponent = () => (
  <List.AccordionGroup>

    {/* ACCORDION */}
    <List.Accordion title="Accordion 1" id="1" className='bg-red-400 mx-5 my-1'>
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

    {/* ACCORDION */}
    <List.Accordion title="Accordion 1" id="2" className='bg-red-400 mx-5 my-1'>
      <View className='bg-red-300 h-[70] w-[350] self-center pt-1 mx-1'>
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

      <View className='bg-red-300 h-[70] w-[350] self-center pt-1 mt-2'>
        <View className='flex-row justify-between'>
          <Text> test 1</Text>
          <Text>12</Text>
        </View>
      </View>

    </List.Accordion>
    {/* ACCORDION */}
    {/* ACCORDION */}
    <List.Accordion title="Accordion 1" id="3" className='bg-red-400 mx-5 my-1'>
      <View className='bg-red-300 h-[70] w-[350] self-center pt-1 mx-1'>
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

      <View className='bg-red-300 h-[70] w-[350] self-center pt-1 mt-2'>
        <View className='flex-row justify-between'>
          <Text> test 1</Text>
          <Text>12</Text>
        </View>
      </View>

    </List.Accordion>
    {/* ACCORDION */}
    {/* ACCORDION */}
    <List.Accordion title="Accordion 1" id="4" className='bg-red-400 mx-5 my-1'>
      <View className='bg-red-300 h-[70] w-[350] self-center pt-1 mx-1'>
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

      <View className='bg-red-300 h-[70] w-[350] self-center pt-1 mt-2'>
        <View className='flex-row justify-between'>
          <Text> test 1</Text>
          <Text>12</Text>
        </View>
      </View>

    </List.Accordion>
    {/* ACCORDION */}
    {/* ACCORDION */}
    <List.Accordion title="Accordion 1" id="5" className='bg-red-400 mx-5 my-1'>
      <View className='bg-red-300 h-[70] w-[350] self-center pt-1 mx-1'>
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

      <View className='bg-red-300 h-[70] w-[350] self-center pt-1 mt-2'>
        <View className='flex-row justify-between'>
          <Text> test 1</Text>
          <Text>12</Text>
        </View>
      </View>

    </List.Accordion>
    {/* ACCORDION */}



  </List.AccordionGroup>
);

export default function HomeScreen() {
  return (
    <View className='flex-1'>

      {/* SEARCH BAR */}
      <View className='justify-center items-center mt-[80]'>
        <TextInput className='bg-red-200 w-[350] h-[50] pl-5'>

        </TextInput>
      </View>
      <Text className='ml-5 mt-2 text-lg'>Showing users for "Exampleuser"</Text>
      {/* SEARCH BAR */}

      <MyComponent></MyComponent>


      <StatusBar style="auto" />
    </View>
  );
}

