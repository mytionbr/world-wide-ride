import React from 'react'
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, icons, travelPlace, SIZES, styles, CountriesProps } from '../constants';


const PopularCountry = ({ countries,handleClickTravel }: CountriesProps) => {
    function renderPopularCoutry(item: travelPlace, index: number) {
      let itemStyle = {};
  
      if (index === 0) {
        itemStyle = { marginLeft: SIZES.padding };
      } else {
        itemStyle = {};
      }
  
      return (
        <TouchableOpacity
          style={{
            height: 200,
            width: 230,
            justifyContent: "center",
            marginHorizontal: SIZES.base,
            ...itemStyle,
          }}
          onPress={() => {
            handleClickTravel(item)
          }}
        >
          <View
            style={[
              {
                flex: 1,
                justifyContent: "flex-end",
                marginTop: SIZES.base,
                borderRadius: SIZES.radius,
                marginRight: SIZES.padding,
                paddingBottom: SIZES.radius,
                backgroundColor: COLORS.white,
              },
              styles.cardShadow,
            ]}
          >
            <Image
              source={{
                uri: item.img,
              }}
              resizeMode="cover"
              style={{
                borderRadius: SIZES.radius,
                flex: 1,
              }}
            ></Image>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <Text style={{ ...FONTS.h4, color: "#000" }}>{item.name}</Text>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    source={icons.star}
                    style={{
                      tintColor: COLORS.amber,
                      width: 15,
                      height: 15,
                      marginRight: 5,
                    }}
                  />
                  <Text style={{ ...FONTS.body5, color: COLORS.gray }}>
                    {item.rating} estrelas
                  </Text>
                </View>
              </View>
              <Image
                source={icons.rightArrow}
                style={{
                  tintColor: COLORS.gray,
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <Text
          style={{
            ...FONTS.h3,
          }}
        >
          Lugares populares
        </Text>
        <View style={{ height: 220, marginTop: SIZES.base }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={countries}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => renderPopularCoutry(item, index)}
          />
        </View>
      </View>
    );
  };

export default PopularCountry