import { Button,StyleSheet,Text,View, Image, TouchableOpacity} from "react-native"

const FinalFoodList = ({navigation, route})=>{
  const FoodList = route.params;
  return(
<View style={styles.container}>
  <View style={styles.heading}>

         <Text style={styles.headingText}>Final Food List</Text>
  </View>

  <View style={styles.dataDiv}>
        
          {
          <View>
              <Text style={styles.dataText}>{'['}</Text>

            {
            FoodList.map(data=>{
              return(
                
                <Text key={data.key} style={styles.dataText} >
                  {
                    `name: ${data.name}, price: ${data.price}`
                  },
                  </Text>
                
              )
            }) 
              
              }
              <Text style={styles.dataText} >{']'}</Text>

              </View>
          
  
          }
        
  </View>

  <View style={styles.FinalFoodBtn}>
          <TouchableOpacity
            style={{width:'100%', alignItems:'center',justifyContent:'center'}}
            onPress={() => {
              navigation.navigate("HomePage");
            }}
          >
            <Text style={{ fontSize: 24 }}>Go to Home Screen</Text>
          </TouchableOpacity>
      </View>


</View>
  )
}

export default FinalFoodList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  heading:{
    height:'10%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'

  },

  headingText:{
    fontSize:48,
    color:'green'

  },

  dataDiv:{
    height:'70%',
    width:'100%',
    alignItems:'center',
    marginBottom:30,
    justifyContent:'center',

  },
  dataText:{
    fontSize:30,
    color:'green'
    // marginTop:48
  },

  FinalFoodBtn:
   {
    padding: 8,
    width: "95%",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e4ffca",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "green",
  },

  ImageDiv:
  {
    overflow:'hidden',
    flexWrap:'wrap',
    marginTop: 20,
    width: "100%",
    maxHeight: "100%",
    backgroundColor: "#e4ffca",
    alignItems:'flex-start',
    justifyContent:'flex-end',
    borderRadius:20, 
    elevation:5,
    shadowColor:'black',
    padding:13,

  
},
image:
{
  height:'100%',
  width:'100%',
  borderRadius:20, 

 
},
  // HomeBtnDiv:{
  //   flexWrap:'wrap',
  //   width:'100%'

  // },
  // HomeBtnText:{
  //   fontSize:32,
  // },


  // HomeBtn:{
  //   alignItems:'center',
  //   justifyContent:'center',
  //   width:'100%',
  //   padding:16,
  //   borderRadius:16,
  //   backgroundColor:'green',

    
  // }


});