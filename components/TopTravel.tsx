import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, SIZES, CountriesProps } from '../constants';
import TopTravelCard from './TopTravelCard';


const TopTravel = ({ countries,handleClickTravel }: CountriesProps) => {

    return (
      <View
        style={{
          flex: 1,
          marginTop: SIZES.base,
          paddingVertical: SIZES.radius,
        }}
      >
        <View style={{flex:1, justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{ ...FONTS.h3 }}>Top Viagens</Text>
          <TouchableOpacity>
            <Text style={{ ...FONTS.h4, color: COLORS.blue }}>Veja todos</Text>
          </TouchableOpacity>
        </View>
  
        <View style={{ flex: 1, alignItems: "center", marginTop: 10, marginBottom: 10  }}>
          {
            countries.slice(0,3).map((item,index)=>
                <TopTravelCard key={index} handleClickTravel={handleClickTravel} place={item} index={index} />
            )
          }
        </View>
      </View>
    );
  };
  

export default TopTravel