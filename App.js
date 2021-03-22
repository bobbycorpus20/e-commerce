import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput} from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      

      <TextInput 
      style = {{height: 80, 
      borderColor:'white', borderWidth: 1}} 
      placeholder = "Pilotbobby" value ="PILOT BOBBY SIGNING ON"/>

      <Text 
      style ={{height: 30,
       borderColor: 'white', borderWidth: 20}} >WE DELIVER ANYWHERE</Text>

      <Text 
      style ={{height: 30,
      borderColor: 'white', borderWidth: 20}} >PilotCorpus</Text>

      <Image 
      style = {{width: 300, height: 200}}source = {{uri: "https://www.brandcrowd.com/gallery/brands/pictures/picture1467630747486.png"}}></Image>
      
      
    </View>
    <Text style ={{height: 20, borderColor: 'yellow', borderWidth: 10}} > Aircraft </Text>
      <TextInput style = {{width: 400, height: 40, borderColor:'black', borderWidth: 1}} placeholder = "Captaincorpus" value ="PILOTS ARE READY TO DELIVER YOUR FOODS"/>
      <Image 
      style = {{width: 400, height: 300}}source = {{uri: "https://www.pngjoy.com/pngl/779/9258780_cartoon-man-healthy-foods-cartoons-png-download.png"}}></Image>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});