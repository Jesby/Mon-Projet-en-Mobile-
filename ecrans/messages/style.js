import { StyleSheet } from "react-native";
import { PADDING } from "../../constantes";

const MessagesStlye = StyleSheet.create({

   ContainMessages : {
      paddingHorizontal: PADDING.horizontal,
      paddingVertical:PADDING.vertical,
      backgroundColor: 'white',
      marginBottom: 20,
      elevation:10,
      borderRadius: 15,
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      
   } ,
    imgStyle : {
          width: 40,
          height: 40,
          borderRadius: 100/2,
    },
    Flatlists : {
          paddingHorizontal : PADDING.horizontal,
          paddingVertical : PADDING.vertical,
          padding: 50,
    },
    titleContaint : {
          fontWeight : 'bold',
          fontSize: 14,
          justifyContent: "center",
          alignContent: "center",
          alignItems: 'center',
          marginLeft: 50,
          color: '#0388fc',
    },

    contenu : {
      flexDirection: 'row',

    },
    LeText : {
      paddingHorizontal: 10,
      paddingVertical: 10,
      padding: 20,
      paddingRight: 40,
      textAlign: 'justify',
    },
    Remarque : {
        color: 'red',
        paddingHorizontal: 25,
        paddingVertical: 2,
    },
})

export default MessagesStlye;