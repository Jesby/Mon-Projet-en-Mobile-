import React from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity, Text } from "react-native";
import StyleSetting from "./style";

const SettingsItem = ({item}) =>{
          return(
              <TouchableOpacity style={StyleSetting.container}>
                 <Text>{item.libelle}</Text>
                  <AntDesign name='arrowright' size={20} color='blue' /> 
              </TouchableOpacity>
          )
}

export default SettingsItem