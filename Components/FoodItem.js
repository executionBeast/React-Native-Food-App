import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const FoodItem = ({drag,food,setName,setPrice,deleteFoodItem,setFoodToEdit,setModalVisible}) => {

  const onEditClick= async (food)=>{
    // console.log("food is ",food)
    await setFoodToEdit(food)
    setName(food.name)
    setPrice(food.price.toString()) //these are set so that the item to be changed should show up in modal input

  }

  
  return (
    

    <View style={styles.FoodItemList}>
      {/* <MaterialIcons style={{marginLeft:4}} name="drag-indicator" size={24} color="#5F5F5F" /> */}
      <TouchableOpacity
      onLongPress={drag}
     delayLongPress={0} >
      <MaterialIcons name="drag-indicator" size={45} color="#5F5F5F" />
      </TouchableOpacity>
      
      <Text style={styles.foodtext}>{food.name}</Text>
      <Text style={{fontSize:18,color:'#5F5F5F'}} >Price: </Text>
      <Text style={styles.foodtext}>₹ {food.price} </Text>
    <View style={styles.divider}></View>
    
    <Feather
      style={{marginRight:"4%"}}
      name="edit-2"
      size={24}
      color="black"
      onPress={() => 
       { onEditClick(food)
        setModalVisible(true)

       }}
     
    />

     <MaterialCommunityIcons
          style={{marginRight:'4%'}}
          name="delete-outline"
          size={28}
          color="black"
          onPress={() => {deleteFoodItem(food.id)}}
        />


  </View>
  )
}

export default FoodItem;

const styles = StyleSheet.create({
  FoodItemDiv:{
    flexDirection:'row',
    width:'100%',
    height:'5%',
    backgroundColor:'grey',
    marginTop:2,
    marginBottom:2,
  },
  foodtext:{
    marginLeft:4,
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
  },
 FoodItemList: {
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    borderWidth: 1,
    borderColor: "#E2E2E2",
    height:58,
    width:'95%'
    
  },

  divider:{
    marginRight:16,
    height:'100%',
    borderLeftWidth:1,
    borderColor:'#E2E2E2'
  }

})