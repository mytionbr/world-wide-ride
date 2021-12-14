import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, icons } from '../constants';

const Header = () => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Text style={{ ...FONTS.h2 }}>Explore o mundo</Text>
      <TouchableOpacity>
        <Image
          source={icons.bell}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.gray,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header