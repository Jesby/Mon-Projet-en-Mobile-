
import { StyleSheet } from "react-native"
import { PADDING } from "../../constantes";
const dashboardStyle = StyleSheet.create({
    header : {
       flexDirection: 'row',
       backgroundColor: 'white',
       justifyContent: 'space-between',
       alignItems: 'center',
       paddingHorizontal: PADDING.horizontal,
       paddingVertical: PADDING.vertical,
    },
    userImage : {
       width:50,
       height:50,
       borderRadius: 50 / 2,
    },
    user: {
          fontSize: 17,
    },
//     Le style de la Flatliste 
    scrollableListe: {
          paddingHorizontal: PADDING.horizontal,
          paddingVertical: PADDING.vertical, 
    },

    title : {
       paddingHorizontal: PADDING.horizontal, 
    },
    titleBold : {
    fontWeight: 'bold',
    },

   title_space_beetween : {
      paddingHorizontal: PADDING.horizontal,
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
    
   link : {
     color: '#0388fc',
     fontWeight: 'bold',
   },

   docteurContaint: {
      paddingHorizontal : PADDING.horizontal,
      paddingVertical : PADDING.vertical,
   },

   cardDoctor : {
     flex : 1,
     flexDirection: 'row',
     backgroundColor: 'white',
     elevation:5,
     padding: 10,
     paddingHorizontal: PADDING.horizontal,
     paddingVertical:PADDING.vertical,
     marginBottom:20,
     borderRadius: 15,
   },
   doctorImage : {
      width : 50,
      height: 50,
      borderRadius: 50/2,
      marginRight: 15,
   },
  InfoDoctor: {
     flexDirection: 'column',
  }, 
  doctorName :  {
   fontWeight: 'bold',
   fontSize: 14,
   marginBottom: 10,
  },
  specialisteDoctor : {
   backgroundColor: '#0388fc',
   borderRadius: 15,
   paddingHorizontal: PADDING.horizontal,
   paddingVertical: 5,
   fontSize:14,
   color: 'white',
  },
});

export default dashboardStyle