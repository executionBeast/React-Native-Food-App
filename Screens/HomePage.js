import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback
  

} from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import FoodItem from "../Components/FoodItem";
import { StatusBar } from "expo-status-bar";
import AddFoodModal from "../Components/AddFoodModal";
import DraggableFlatList from 'react-native-draggable-flatlist';
import { MaterialIcons } from '@expo/vector-icons';


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
  const [orderedFood, setOrderedFood] = useState(FoodList);

  //addFoodItem
  const addFoodItem = (name, price) => {
    setFoodList([
      ...FoodList,
      {
        id: Date.now().toString(),
        name: name,
        price: price,
      },
    ]);
    console.log(FoodList);
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
        
        <Text style={styles.Heading}>Food List</Text>
      </View>

      <View style={styles.FoodItemContainerDiv}>
        {
          <ScrollView style={styles.FoodItemContainer}>
            {FoodList.map((data) => {
              return (
                <FoodItem
                  key={data.id}
                  food={data}
                  setName={setName}
                  setPrice={setPrice}
                  deleteFoodItem={deleteFoodItem}
                  setFoodToEdit={setFoodToEdit}
                  setModalVisible={setModalVisible}
                  onEditClick={() => openEditModal(data)}
                />
              );
            })}
          </ScrollView>
      }


<View
          style={{
            flexDirection:'row',
            flex: 1,
            borderStyle: 'dashed',
            borderColor: 'gray',
            borderWidth:1,
          }}
        />
      </View>


<View style={
{
  width:'94%',
  marginTop:8,
  marginBottom:8,
  backgroundColor:'grey',
  borderColor:'grey',
  borderWidth:2


}

}></View>
      <View style={styles.addFoodBtnDiv}>
          <TouchableOpacity
            style={styles.addFoodBtn}
            onPress={() => {
              setModalVisible(true);
              setName(null);
              setPrice(null);
              setFoodToEdit(null);
            }}
          >
            <Text style={{ fontSize:18,fontWeight:'bold'}}>  + <Text style={{ fontSize:18,fontWeight:'bold'}}>  Add Food Item</Text></Text>
          </TouchableOpacity>
          
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
            setFoodToEdit={setFoodToEdit}
          />
      </View>

      <View style={styles.FinalFoodBtn}>
          <TouchableOpacity
            style={{width:'100%', alignItems:'center',justifyContent:'center'}}
            onPress={() => {
              navigation.navigate("FinalFoodList", FoodList);
            }}
          >
            <Text style={{ fontSize: 24 }}>Final Food List</Text>
          </TouchableOpacity>
      </View>
        
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: 
  {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'space-between',
    alignContent: "space-between",
    // position:'relative'
    flexDirection: "column",
  },


  // keyBoardView:{

  // },

Header:{
  marginTop:'14%',
},

  Heading: 
  { color:'black',
    fontSize: 40,
    fontWeight:'bold',
    alignItems: "center",
  },
  FoodItemContainerDiv:{
    width:'100%',
    alignItems:'space-between',

  },

  image:
  {
    height:'100%',
    width:'100%',
  },
  ImageDiv:
  {
    overflow:'hidden',
    flexWrap:'wrap',
    marginTop: 20,
    width: "100%",
    maxHeight: "100%",
    backgroundColor: "#ebebeb",
    // backgroundColor: "white",

    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,

  
},

  FoodItemContainer: {
    marginTop: 20,
    width: "100%",
    maxHeight: "100%",
    // backgroundColor: "#c8e3c5",
    backgroundColor: "white",

    borderRadius:20,

    
  },

  addFoodBtn:
  { padding:14,
    width: "95%",
    backgroundColor: "#E5F5EC",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "green",

    
  },



  addFoodBtnDiv: {
    margin:14,
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
    backgroundColor: "#e4ffca",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "green",
  },

  FoodItemScreen: 
  {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  
});

{
  /* <View style={styles.button}>
  <Button
    title="Go to FinalFoodList"
    onPress={()=>{
      navigation.navigate("FinalFoodList")
    }}
  ></Button>
</View>  */
}
