import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import style from "./style";
import { SettingsData } from "../../Data/FakeSetting";
import SettingsItem from "../../composantes/SettingItem";


const Settings = () => {
          return(
            <View  style={style.container}>
              {/* Header */}
               <View style={style.header}> 
                  <Image style={style.image}  source={require('../../assets/user.png')} />
                 <View style={style.userInfo}>
                   <Text style={style.UserName}>Jesby Bayiha</Text>
                   <Text style={style.userMail}>Jesbybayiha@gmail.com</Text>
                   <Text>+237 655-467-437</Text>
               </View>
               </View>
               {/*Fin Header */}

                {/*Fin Header */}
                
                <FlatList data={SettingsData} keyExtractor={Item=>Item.id}
                showsVerticalScrollIndicator={false} renderItem={({item})=>{
                  return <SettingsItem item={item} />
                }} />
            </View>
          )
}

export default Settings;