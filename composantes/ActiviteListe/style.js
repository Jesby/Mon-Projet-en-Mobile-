import { StyleSheet } from "react-native";
import { PADDING } from "../../constantes";

const dashboardStyle = StyleSheet.create({
        scrolableListeItem: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        marginRight: 15,
        backgroundColor:'white',
        elevation: 5,
          },
        mainText :{
       fontWeight: 'bold',
       fontSize: 14,
          },
        DescriptionText : {
        marginTop: 3,
        marginRight:10,
        fontSize: 12,
        },
})
 export default dashboardStyle