import React from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  COLORS,
  FONTS,
  icons,
  images,
  SIZES,
  styles,
  TravelProps,
  travelPlace,
} from "../constants";

const tabs = ["DETAILS", "LOCATION", "HOTEL", "REVIEWS"];

const TabsLink = ({
  title,
  isActive,
  handleChangeTab,
}: {
  title: string;
  isActive: boolean;
  handleChangeTab: Function;
}) => {
  return (
    <TouchableOpacity onPress={() => handleChangeTab()}>
      <Text
        style={{
          ...FONTS.body3,
          color: isActive ? COLORS.blue : COLORS.darkGray,
          borderBottomColor: isActive ? COLORS.blue : COLORS.paper,
          borderWidth: 2,
          borderLeftColor: COLORS.paper,
          borderRightColor: COLORS.paper,
          borderTopColor: COLORS.paper,
          marginTop: SIZES.padding,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const TabsHeader = ({
  active,
  handleChangeTab,
}: {
  active: string;
  handleChangeTab: Function;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TabsLink
        title="Detalhes"
        isActive={tabs[0] === active}
        handleChangeTab={() => handleChangeTab(tabs[0])}
      />
      <TabsLink
        title="Localização"
        isActive={tabs[1] === active}
        handleChangeTab={() => handleChangeTab(tabs[1])}
      />
      <TabsLink
        title="Hotel"
        isActive={tabs[2] === active}
        handleChangeTab={() => handleChangeTab(tabs[2])}
      />
      <TabsLink
        title="Reviews"
        isActive={tabs[3] === active}
        handleChangeTab={() => handleChangeTab(tabs[3])}
      />
    </View>
  );
};

const TabsTextBox = ({ text }: { text: string }) => {
  const [isActive, setIsActive] = React.useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const ShowMore = () => {
    return (
      <TouchableOpacity onPress={handleToggle}>
        <Text
          style={{
            ...FONTS.body5,
            color: COLORS.blue,
            fontWeight: "700",
          }}
        >
          {isActive ? "Mostrar mais" : "Esconder"}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {isActive ? (
        <Text
          style={{
            ...FONTS.body4,
            flexWrap: "wrap",
            color: COLORS.gray,
          }}
        >
          {text.slice(0, 100)}....
        </Text>
      ) : (
        <Text style={{ ...FONTS.body4, flexWrap: "wrap", color: COLORS.gray }}>
          {text}
        </Text>
      )}
      <ShowMore />
    </View>
  );
};

const TabsContent = ({
  active,
  travel,
}: {
  active: string;
  travel: travelPlace;
}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.base,
      }}
    >
      {active === tabs[0] ? (
        <TabsTextBox text={travel.description} />
      ) : active === tabs[1] ? (
        <TabsTextBox text={travel.description} />
      ) : active === tabs[2] ? (
        <TabsTextBox text={travel.description} />
      ) : (
        active === tabs[3] && <TabsTextBox text={travel.description} />
      )}
    </View>
  );
};

const Gallery = ({ gallery, handleChangeImage }: { gallery: string[],handleChangeImage: Function }) => {
  function renderImage(image: string, index: number) {
    return (
      <TouchableOpacity
        style={{
          marginRight: 20,
        }}
        onPress={()=>handleChangeImage(image)}
      >
        <Image
          source={{
            uri: image,
          }}
          resizeMode="cover"
          style={{
            width: 100,
            height: 100,
            borderRadius: SIZES.radius,
          }}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.base,
        marginBottom: 20,
      }}
    >
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={gallery}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => renderImage(item, index)}
      />
    </View>
  );
};

const BookNow = () => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => Alert.alert("Opa")}
        style={{
          width: "100%",
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.blue,
          padding: SIZES.padding,
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.white,
            textAlign: "center",
          }}
        >
          Agende agora
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Travel = ({ route, navigation }: TravelProps) => {
  const { travel }: { travel: travelPlace } = route.params;
  
  const [active, setActive] = React.useState(tabs[0]);
  const [currentImage, setCurrentImage] = React.useState(travel.img);
  
  const handleChangeTab = (tab: string) => {
    setActive(tab);
  };


  const handleChangeImage = (image: string)=>{
    setCurrentImage(image)
  }


  const handleGoBack = () => {
    navigation.navigate("Home");
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.paper,
      }}
    >
      <View
        style={{
          height: 250,
          width: SIZES.width,
        }}
      >
        <Image
          source={{
            uri: currentImage,
          }}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: SIZES.radius,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.white,
            padding: 12,
            borderRadius: SIZES.radius,
            position: "absolute",
            top: 40,
            left: 10,
          }}
          onPress={handleGoBack}
        >
          <Image
            source={icons.goBack}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.white,
            padding: 12,
            borderRadius: SIZES.radius,
            position: "absolute",
            top: 40,
            right: 10,
          }}
        >
          <Image
            source={icons.points}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray,
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          padding: SIZES.padding,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingVertical: SIZES.base,
          }}
        >
          <Text style={{ ...FONTS.h1, color: COLORS.darkGray, maxWidth: 180 }}>
            {travel.name}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ ...FONTS.body2, color: COLORS.darkGray }}>
              ${travel.price}
            </Text>
            <Text style={{ ...FONTS.body3, color: COLORS.gray }}>/pessoa</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: SIZES.base,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={icons.star}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.amber,
              }}
            />
            <Text style={{ ...FONTS.body4, color: COLORS.gray }}>
              {travel.rating} ( {travel.reviews} reviews )
            </Text>
          </View>
        </View>
        <TabsHeader active={active} handleChangeTab={handleChangeTab} />
        <TabsContent active={active} travel={travel} />
        <Gallery gallery={travel.gallery} handleChangeImage={handleChangeImage} />
        <BookNow />
        <View
          style={{
            marginBottom: 50,
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Travel;
