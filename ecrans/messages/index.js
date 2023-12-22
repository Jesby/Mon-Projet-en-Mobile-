import React from "react";
import { View, Text, FlatList, Image, ScrollView } from "react-native";
import { Examen } from "../../Data/DataExamen";
import EXAM_IMG from '../../assets/images/front/examen.png'
import MessagesStlye from "./style";

 

const Messages = () =>{
        return(
              <FlatList data={Examen}  keyExtractor={item => item.id}  style={MessagesStlye.Flatlists}
           renderItem={({item})=>{
            return <View style={MessagesStlye.ContainMessages} >
                     <Text style={MessagesStlye.titleContaint}  >Resultat de l'Examen <Text>Du 11/13/2020</Text> </Text>
                     <View style={MessagesStlye.contenu}>
                      <Image source={EXAM_IMG} style={MessagesStlye.imgStyle} />  
                      <Text style={MessagesStlye.LeText} >Apres votre examen vous avez les resultats suivantes : avec pour Temperaure {item.TemperatureCorporel}, humidite {item.Humidite}, Degre {item.Degre} </Text>
                     </View>
                     <Text style={MessagesStlye.Remarque}> Remarque : Vous devez voir urgement un medecin  </Text>
                  </View>
             }}
            />
           
          )
}

export default Messages