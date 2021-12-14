import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, icons, SIZES } from "../constants";

const Search = () => {
  return (
    <View
      style={{
        display: "flex",
        width: "100%",
        marginVertical: 24,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.lightBlue,
        borderRadius: 20,
        paddingHorizontal: SIZES.base,
      }}
    >
      <TouchableOpacity>
        <Image
          source={icons.search}
          style={{
            tintColor: COLORS.gray,
            width: 25,
            height: 25,
          }}
        />
      </TouchableOpacity>
      <TextInput
        placeholder="Procure o seu lugar favorito"
        style={{
          flex: 1,
          padding: 10,
          fontSize: SIZES.body3,
        }}
        selectionColor={"gray"}
      />
    </View>
  );
};

export default Search;
