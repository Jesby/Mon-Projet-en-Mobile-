import { StyleSheet } from "react-native";
import { PADDING } from "../../constantes";

const styleSymtom = StyleSheet.create({
   item:{
      marginRight: 15,
      flexDirection: 'row',
      backgroundColor: 'white',
      alignItems: 'center',
      borderRadius:15,
      paddingHorizontal: PADDING.horizontal,
      paddingVertical:PADDING.vertical,
   },
   ItemImg: {
     width:30, height: 30, marginRight:5
   }, 
})
 export default styleSymtom