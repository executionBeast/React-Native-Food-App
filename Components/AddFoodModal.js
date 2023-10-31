// AddFoodModal.js
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet, TouchableOpacity,SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons';



function AddFoodModal({ visible, onSave,onUpdate, onCancel, foodToEdit,name,price,setName,setPrice}) {
  // const [name, setName] = useState(foodToEdit?foodToEdit.name:'FoodKaaNaamNhi');
  // const [price, setPrice] = useState(foodToEdit?foodToEdit.price:'FoodKaaPriceNhi');

  const handleSave = () => {

    onSave(name,price);

    setName('');
    setPrice('');
  };

  const handleUpdate=()=>{
    // alert(JSON.stringify(foodToEdit))
    onUpdate(foodToEdit)
  }

  return (
    <SafeAreaView>
    <Modal visible={visible} animationType="slide" transparent={true}>
      
      <View style={styles.modalBackdrop}>
        
        <View style={styles.modalContent}>
<View style={styles.topOfModalContent}>
        {/* <Button  title="Cancel"  /> */}
        <Entypo style={styles.cancelButton } name="cross" size={38} color="black" onPress={onCancel}/>

          <Text style={styles.heading }>Add Food</Text>
          </View>
          <Text style={{fontSize:20, marginBottom:10}}>Food Name</Text>
          <TextInput style={styles.InputField}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Text style={{fontSize:20, marginBottom:10}}>Food Price</Text>

          <TextInput style={styles.InputField}
            value={price}
            onChangeText={(text) => setPrice(text)}
          />

          {foodToEdit ? (
            <TouchableOpacity style={styles.button} onPress={handleUpdate} >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        ):(
        
        
      <TouchableOpacity style={styles.button} onPress={handleSave} >
      <Text style={styles.buttonText}>Add Food Item</Text>
    </TouchableOpacity>
    )}
          
        </View>
      </View>
    </Modal>
    </SafeAreaView>
  );
}

export default AddFoodModal;

const styles = StyleSheet.create({
  topOfModalContent:{
    flexDirection:'row-reverse',
    justifyContent:'space-between'
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    width:'100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  modalContent: {
    padding:12,
    backgroundColor:'white',
    // borderRadius:32,
    borderTopLeftRadius:32,
    borderTopRightRadius:32,

    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
  },

  InputField:{
    padding:16,
    borderRadius:8,
    borderColor:'black',
    borderWidth:1,
    marginBottom:'2%',

  },
  heading:{
    fontSize:28,
    marginBottom:'4%',
    fontWeight:'400'
  },
  button:{
    padding:16,
    backgroundColor:'green',
    borderWidth: 2,
    borderColor: "green",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:16,
    marginTop:30,
    marginBottom:16
  },
  buttonText:{
    fontSize:16,
    fontWeight:'bold',
    color:'white',

  },
  cancelButton:{
    padding:4
  }
})