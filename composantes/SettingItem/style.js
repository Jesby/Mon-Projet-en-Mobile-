import { StyleSheet } from "react-native";
import { PADDING } from "../../constantes";

const StyleSetting = StyleSheet.create({
          container : {
                    marginTop : 15,
                    backgroundColor : 'white',
                    elevation : 5,
                    flexDirection: 'row',
                    alignItems : 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal : PADDING.horizontal,
                    paddingVertical: PADDING.vertical,
          },
})

export default StyleSetting