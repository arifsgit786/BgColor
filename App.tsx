import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';





function App(): React.JSX.Element {
  const [bgColor , setBgColor] = useState('white')

  const randomColor=()=>{
    const hexRange = "0123456789ABCDEF"
    let color = "#"

    for(let i=0;i<6;i++){
      color += hexRange[Math.floor(Math.random()*16)]
    }

    setBgColor(color)

  }
  return (
    <>
    <StatusBar backgroundColor={bgColor}/>
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <TouchableOpacity onPress={() => randomColor()}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnTxt}>Press Here</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    justifyContent:'center'
  },
  actionBtn:{
    borderRadius:12,
    backgroundColor:"white",
    paddingHorizontal:40,
    paddingVertical:10

  },
  actionBtnTxt:{
    fontSize:22,
    color:"black",
    textTransform:'uppercase'
  },
});

export default App;
