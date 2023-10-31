import 'react-native-gesture-handler';

import { useState } from 'react';

import React from 'react';
import {Button, StyleSheet, Text, View,FlatList,TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { MaterialIcons } from '@expo/vector-icons';


export default function DragFlatList() {
  const [FoodLists,setFoodLists] = useState([
    {
      id:1,
      name:'Apple',
      price:122,
    },
    {id:2,
      name:"Banana",
      price:123
    },
    {id:3,
      name:"Banana",
      price:123
    },
  
  ])
  
  const [orderedFood, setOrderedFood] = useState([
    {
      id:1,
      name:'Apple',
      price:122,
    },
    {id:2,
      name:"Banana",
      price:123
    },
    {id:3,
      name:"Banana",
      price:123
    },
  
  ]);

  const renderItem = ({ item, index, drag, isActive }) => {
    return (
      <View style={styles.FoodItem}>
    <TouchableWithoutFeedback onLongPress={drag}
     delayLongPress={50} >
      <MaterialIcons name="drag-indicator" size={24} color="black" />
     
      </TouchableWithoutFeedback>
      <Text style={styles.name}>{item.id}.</Text>

        <Text style={styles.name}>{`Name: ${item.name}`}</Text>
        <Text style={styles.price}>{`Price: ${item.price}`}</Text>
      </View>
    );
  };


  const onDragEnd = ({ data }) => {
    // Handle the updated order of data
    setOrderedFood(data);
  };

  // const FoodItem = ({food}) => {
  //   return (
  //     <View style={styles.FoodItem}>
  //     <TouchableOpacity onPress={drag}></TouchableOpacity>
  //       <Text style={styles.name}>{`Name: ${food.name}`}</Text>
  //       <Text style={styles.price}>{`Price: ${food.price}`}</Text>
  //     </View>
  //   );
  // };
  

  return (

    <View style={styles.container}>
<Text style={{marginTop:200}}>{JSON.stringify(FoodLists)}</Text>
<Text style={{marginTop:4}}>{JSON.stringify(orderedFood)}</Text>


      <View style={styles.FlatList}>

      <Button title='Add Food'
      onPress={()=>{
        setFoodLists([...FoodLists,{id:Math.random(),name:'Orange', price:69}])
        setOrderedFood([...orderedFood,{id:Math.random(),name:'Orange', price:69}])

      }}
      ></Button>

<DraggableFlatList
        data={orderedFood}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        onDragEnd={onDragEnd}
      />


</View>
    
    </View>
  
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  price: {
    fontSize: 14,
    marginLeft:10
  },
  FoodItem:{
    backgroundColor: '#ebebeb',
    flexDirection:'row',
    padding: 10,
    margin: 3,
    borderRadius: 8,
  },
  FlatList:{
    marginTop:1,

  }
});
