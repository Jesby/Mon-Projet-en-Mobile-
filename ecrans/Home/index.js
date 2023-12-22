import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import dashboardStyle from "./style";
import { FlatList } from "react-native";
import { ServicesListe } from "../../Data/Data";
import ActivitesListe from "../../composantes/ActiviteListe";
import SymtomItem from "../../composantes/SymptomItem";
import { FakeSymptomes } from "../../Data/DataSymtomes";
import { DoctorListe } from "../../Data/DoctorsListe";

const Home = () => {
  return (
    <ScrollView>
        {/* // Debur de l'en tete de notre Application  */}
       <View style={dashboardStyle.header} >
        <Text style={dashboardStyle.user}> Nom Utilisateur </Text>
        <Image source={require('../../assets/user.png')} style={dashboardStyle.userImage} /> 
       </View>
       {/* Fin du l'en tete de notre Application */}

       {/* Liste des Activites de notre application  */}
        <FlatList data={ServicesListe} 
        keyExtractor={item =>item.id}
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        style={dashboardStyle.scrollableListe}
        renderItem={({item}) => {
          return (
            <ActivitesListe item={item} />
          )
        }}
         />
       {/* Fin des activite de notre application  */}

            {/* Titre Symtomes */}
             <View style={dashboardStyle.title}>
               <Text style={dashboardStyle.titleBold}>Quel symtomes avez vous ?
               </Text>
             </View>
            {/* Fin titre des Symtomes */}

       {/* Liste des symtomes */}
        <FlatList 
        data={FakeSymptomes} 
        keyExtractor={item =>item.id}
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        style={dashboardStyle.scrollableListe}
        renderItem={({item}) => {
          return (
            <SymtomItem item={item}/>
          )
        }}
         />
       {/* Fin liste des symtomes */}

       {/* Liste des docteur */}
       <View style={dashboardStyle.title_space_beetween}>
           <Text style={dashboardStyle.titleBold}>Les docteurs </Text>
            <TouchableOpacity>
               <Text style={dashboardStyle.link}>Afficher plus...</Text>
            </TouchableOpacity> 
         </View>

       {/* Fin listes des docteurs */}
        
       <View style={dashboardStyle.docteurContaint}>
        {DoctorListe && DoctorListe.slice(0, 3).map((doctor, index) => (
          <TouchableOpacity key={doctor.id} style={dashboardStyle.cardDoctor}>
           <Image source={doctor.img} style={dashboardStyle.doctorImage} />
           <View style={dashboardStyle.InfoDoctor}>
           <Text style={dashboardStyle.doctorName}>{doctor.noms}</Text>
            <Text style={dashboardStyle.specialisteDoctor}>{doctor.specialiste}</Text>
           </View>
          </TouchableOpacity>
        ))}
      </View>

    </ScrollView>
 )
}
export default Home; 