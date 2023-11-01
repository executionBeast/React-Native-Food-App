import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  

} from "react-native";
import DraggableFlatList from 'react-native-draggable-flatlist';

import { useState } from "react";
import FoodItem from "../Components/FoodItem";
import { StatusBar } from "expo-status-bar";
import AddFoodModal from "../Components/AddFoodModal";




const HomePage = ({ navigation }) => {
  const [name, setName] = useState(foodToEdit ? foodToEdit.name : "");
  const [price, setPrice] = useState(foodToEdit ? foodToEdit.price : "");
  const [isModalVisible, setModalVisible] = useState(false);
  const [foodToEdit, setFoodToEdit] = useState(null);
  const [FoodList, setFoodList] = useState([
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


  const renderItem = ({ item, index, drag, isActive}) => {
    return (
      <View>     
        <FoodItem
        food={item}
        drag={drag}
        setName={setName}
        setPrice={setPrice}
        deleteFoodItem={deleteFoodItem}
        setFoodToEdit={setFoodToEdit}
        setModalVisible={setModalVisible}>

        </FoodItem>
      </View>

    );
  };

  const onDragEnd =({data})=>{
    setFoodList(data)
  }


    //addFoodItem
    const addFoodItem = (name, price) => {
      const MaxId= Math.max(...FoodList.map((food)=>food.id),0);
      const id = MaxId +1;

      setFoodList([
        ...FoodList,
        {
          id: id,
          name: name,
          price: price,
        },
      ]);
    };

    const updateFoodItem = (foodToEdit) => {
      const updatedFoodList = FoodList.map((item) => {
        if (item.id === foodToEdit.id) {

          return { ...item, name: name, price: price };
        
        }
        
        return item;
      
      });
      setFoodList(updatedFoodList);
      setFoodToEdit({ message: "Nothing is here" });
      setName("");
      setPrice("");
    };

  //deleteFoodItem
  const deleteFoodItem = (idFoodItem) => {
    const updatedFoodList = FoodList.filter((food) => food.id !== idFoodItem); //will get food as object from array and allow object not idFoodItem
    setFoodList(updatedFoodList);
  };

  //toggleModal
  const toggleModal = () => {
    setModalVisible(false);
  };

  return (
  
    <View style={styles.container}>
      <StatusBar/>
      <View style={styles.Header}>
        <View>
            <Text style={styles.Heading}>Food List</Text>
        </View>

      <View style={styles.FoodItemContainerDiv}>
{/* ------------------Draggable FlatList------------------------------------------ */}
      
    

      <DraggableFlatList
        style={{
          // height:'100%',
          width:'100%',
          maxHeight:700,
        }}
          data={FoodList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          onDragEnd={onDragEnd}>

      </DraggableFlatList>


{/* ------------------/Draggable FlatList------------------------------------------ */}



    <View style={
        {
          width:'94%',
          borderStyle: 'dashed',
          borderColor:'#d1caca',
          borderTopWidth:1.8,
          marginTop:'4%',
          marginBottom:'6%',
          alignSelf:'center'
        }}>

    </View>


    <View style={styles.addFoodBtnDiv}>
        <TouchableOpacity
          style={styles.addFoodBtn}
            onPress={() => {
              setModalVisible(true);
              setName(null);
              setPrice(null);
              setFoodToEdit(null);
            }}>


          <Text style={{ fontSize:18,fontWeight:'bold'}}>  + <Text style={{ fontSize:18,fontWeight:'bold'}}>  Add Food Item</Text></Text>
        </TouchableOpacity>
          
    </View>

    </View>     
    </View>

      

    <View style={styles.AddFoodModalDiv}>
      <AddFoodModal
            name={name}
            price={price}
            setName={setName}
            setPrice={setPrice}
            style={styles.AddFoodModal}
            visible={isModalVisible}
            onSave={addFoodItem}
            onUpdate={updateFoodItem}
            onCancel={toggleModal}
            foodToEdit={foodToEdit}
            setFoodToEdit={setFoodToEdit}/>

    </View>


    <View style={styles.FinalFoodBtn}>
        <TouchableOpacity
            style={{width:'100%', alignItems:'center',justifyContent:'center',padding:12}}
            onPress={() => {
              navigation.navigate("FinalFoodList", FoodList);
            }}>

            <Text style={{ fontWeight:'800',fontSize: 18,color:'white' }}>Final Food List</Text>
        </TouchableOpacity>
    </View>
        
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: 
  {
    flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent:'space-between' ,
    flexDirection: "column",
  },

Header:{
  justifyContent:'space-between',
  alignItems:'center',
  width:'100%',
},

  Heading: 
  { color:'black',
    fontSize: 40,
    fontWeight:'bold',
    alignItems: "center",
    paddingTop:40,
    paddingBottom:10


  },

  FoodItemContainerDiv:{
    width:'100%',
  justifyContent:'center'


  },



  FoodItemContainer: {
    padding:0,
    width: "100%",
    maxHeight: "100%",
    backgroundColor: "white",

    borderRadius:20,

    
  },

  addFoodBtn:
  { padding:14,
    width: "95%",
    backgroundColor: "#E5F5EC",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#7ECB9C",

    
  },



  addFoodBtnDiv: {
    width: "100%",
    alignItems: 'center',
    justifyContent:'center',
    
  },


 
  FinalFoodBtn:
   {
    padding: 8,
    width: "95%",
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 8,
    marginBottom:18
  },

  FoodItemScreen: 
  {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  FoodItem:{
    backgroundColor: '#ebebeb',
    flexDirection:'row',
    padding: 10,
    margin: 3,
    borderRadius: 8,
  },
});

