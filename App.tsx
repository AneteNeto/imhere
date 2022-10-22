import { View,Text, StyleSheet ,StatusBar} from 'react-native';

export default function App(){
  return(
    <View style={styles.container}>
        <Text style={styles.eventName}>Nome do Evento</Text>
        <Text style={styles.eventDate}> Sexta,24 de Setembro de 2022</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#132016',
    padding:24
  },
  eventName:{
    color:'#fff',
    fontSize:24,
    fontWeight:'bold',
    marginTop:48
  },
  eventDate:{
    color:'#6B6B6B',
    fontSize:16
  }
});