import { StyleSheet } from "react-native";


export const styles=StyleSheet.create({
  container:{
    width:'100%',
    height:56,
    backgroundColor:'#1f1e25',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:5,
    marginBottom:5,
  },
  nameParticipant:{
    flex:1,
    color:'#fff',
    fontSize:16,
    marginLeft:8
  },
  buttonText:{
    color:"#fff",
    fontSize:16
  },
  button:{
    width:56,
    height:56,
    borderRadius:5,    
    backgroundColor:'#E23C44',
    alignItems:'center',
    justifyContent:'center',
  },
});