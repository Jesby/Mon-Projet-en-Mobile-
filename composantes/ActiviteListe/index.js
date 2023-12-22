import React from "react";
import { Text, TouchableOpacity } from "react-native";
import SVG_HOSPITAL from '../../assets/images/svg/undraw_medicine_b-1-ol.svg'
import dashboardStyle from "./style.js";

const ActivitesListe = ({item}) =>{
  return (
          <TouchableOpacity style={dashboardStyle.scrolableListeItem}>
          <SVG_HOSPITAL width={55} height={55} />  
           <Text style={dashboardStyle.mainText}>{item.mainText}</Text>
           <Text style={dashboardStyle.DescriptionText}>{item.description}</Text>
        </TouchableOpacity>
  ) 
}

export default ActivitesListe