import React from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, icons, SIZES, styles, TopTravelProps } from '../constants';

const TopTravelCard = ({place,handleClickTravel, index}: TopTravelProps) =>{
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          ...styles.topCardShadow,
          backgroundColor: COLORS.white,
          width: 280,
          height: 100,
          borderRadius: SIZES.radius,
          margin: 10,
          padding: SIZES.base
        }}
        onPress={() => {
          handleClickTravel(place)
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <Image
            source={{
              uri: place.img,
            }}
            resizeMode="contain"
            style={{
              width: 130,
              height: "100%",
              borderRadius: SIZES.radius,
            }}
          />
        </View>
        <View
          style={{
            flex: 1.2,
            marginLeft: 20,
          }}
        >
           <Text style={{ color: "#000", ...FONTS.h4 }}>{place.name}</Text>
          <View style={{flex: 1, justifyContent:'center' }}>
          <View style={{display: 'flex', flexDirection: "row", }}>
            <Image
              source={icons.localization}
              style={{
                tintColor: COLORS.gray,
                width: 20,
                height: 20,
                marginRight: 5,
              }}
            />
            <Text style={{ ...FONTS.body4,color: COLORS.gray  }}>{place.countrie}</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: "row" }}>
            <Image
              source={icons.star}
              style={{
                tintColor: COLORS.amber,
                width: 20,
                height: 20,
                marginRight: 5,
              }}
            />
            <Text style={{ ...FONTS.body4, color: COLORS.gray }}>{place.rating} reviews</Text>
          </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

export default TopTravelCard
