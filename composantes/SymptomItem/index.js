import React from "react";

import { TouchableOpacity, Text, View, Image } from "react-native";
import styleSymtom from "./style";
const SymtomItem = ({item}) =>
{
   return ( 
    <TouchableOpacity >
      <View  style={styleSymtom.item}>
          <Image style={styleSymtom.ItemImg} source={require('../../assets/images/symtomes/MautDeTete.png')}/>
         <Text>{item.libelle}</Text>
         </View>
    </TouchableOpacity> 
   ) 
}

export default SymtomItem;