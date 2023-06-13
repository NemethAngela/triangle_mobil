import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';   //itt importálódnak 

export default function App() {
  const [base, setBase] = useState();    //tömb jön létre
  const [height, setHeight] = useState();
  const [area, setArea] = useState();

  function startCalc(){

    let localArea = calcArea();

    setArea(localArea)
    console.log(localArea)
    console.log(base)
  }

  function calcArea() {
    return  base * height / 2;
  }

  return (   //átírtuk a címet: Háromszögre, beírtuk az inputTexet a base, height, area megnevezés az onChangeText-nél lehet akármi, nem egyezik meg a base-el 
    <View style={styles.container}>
      <Text style={styles.title}>Háromszög</Text>  

      <Text style={styles.inputText}>Alap</Text> 
      <TextInput style={styles.input}
      onChangeText={base => setBase(base)}/>  

      <Text style={styles.inputText}>Magasság</Text>
      <TextInput style={styles.input}
      onChangeText={height => setHeight(height)}/>

      <Button title= "Számít" //eseménykezelő, itt nem klikk, hanem press
      onPress={startCalc}/>

      <Text style={styles.inputText}>{area}</Text>
      <TextInput style={styles.input}
      value={area} />

      <StatusBar style="auto" />
    </View>
  );
}
//itt határozzuk meg a stílust
const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#85d5bc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 38,   //itt megnöveltük a betűméretet
    color: '#522719',
  },
  inputText: {
    fontSize: 34,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    fontSize: 28,
    width: '80%',
    marginTop: 8,
  }
});
