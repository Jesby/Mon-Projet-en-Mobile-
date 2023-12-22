import { StyleSheet } from "react-native"
import { PADDING } from "../../constantes";

const style = StyleSheet.create({
   container : {
          flex:1,
          paddingHorizontal : PADDING.horizontal,
          paddingVertical: PADDING.vertical,
   },
   header : {
          elevation:5,
          backgroundColor : 'white',
          alignItems: 'center',
          flexDirection : 'row',
          padding: 10,
   },

   image : {
          width : 60,
          height : 60,
          borderRadius : 60 / 2,
   },
   userInfo : {
       marginLeft : 15,
   },
   UserName : {
          fontWeight : 'bold',
          marginBottom : 5,
   },
   userMail : {
          marginBottom: 5,
   }
})

export default style;