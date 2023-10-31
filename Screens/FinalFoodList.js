import { Button,StyleSheet,Text,View, Image, TouchableOpacity} from "react-native"


const FinalFoodList = ({navigation, route})=>{

  const JsonData = ({data})=>{
      
    return(
        <View>

        <Text style={styles.dataText}>{'{'}</Text>
      <Text key={data.key} style={styles.dataText} >
        {
          `  name: "${data.name}",`
        }
        </Text>

        <Text key={data.key} style={styles.dataText} >
        {
          `  price: "${data.name}",`
        }
        </Text>
    <Text style={styles.dataText}>{'},'}</Text>
        
</View>
      )

  }

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
<View>
                <JsonData key={data.key} data={data}/>
      </View>        
                )

            }) 
              
              }
              <Text style={styles.dataText} >{']'}</Text>

              </View>
          
  
          }
        
  </View>

  <View style={styles.FinalFoodBtn}>
          <TouchableOpacity
           style={{width:'100%', alignItems:'center',justifyContent:'center',padding:12}}
            onPress={() => {
              navigation.navigate("HomePage");
            }}
          >
            <Text style={{ fontWeight:'800',fontSize: 18,color:'white' }}>Go to Home Screen</Text>
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
    justifyContent: 'space-between',
  },

  heading:{
    height:'10%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'

  },

  headingText:{
    fontSize:38,
    marginTop:'8%',
    color:'black'

  },

  dataDiv:{
    height:'70%',
    width:'90%',
    marginBottom:30,
    backgroundColor:'#EAE8E8',
    padding:8,
    borderRadius:12,
    paddingLeft:8,

  },
  dataText:{

    fontSize:20,
    color:'black'
    // marginTop:48
  },

  FinalFoodBtn:
   {
    padding: 8,
    width: "95%",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 8,
    marginBottom:18
  },


 

});