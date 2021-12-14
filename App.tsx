import React from "react";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Home, Travel } from "./screens";

import { icons, COLORS, SIZES } from "./constants";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "tranparent",
  },
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabStack = () => {
  return (
  <Tab.Navigator
    initialRouteName={"Home"}
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: COLORS.darkBlue,
        height: 60,
        flexDirection: "row",
        borderTopRightRadius: SIZES.radius,
        borderTopLeftRadius: SIZES.radius,
      },
      tabBarShowLabel: false,
      headerStyle: {
        //backgroundColor: '#f4511e',
      },
      tabBarActiveTintColor: COLORS.white,
      tabBarInactiveTintColor: COLORS.gray,
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => {
          return (
            <Image
              source={icons.home}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="TravelList"
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => {
          return (
            <Image
              source={icons.card}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="Message"
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => {
          return (
            <Image
              source={icons.comment}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => {
          return (
            <Image
              source={icons.user}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          );
        },
      }}
    />
  </Tab.Navigator>
  )
};

const App = () => {
  const [loaded] = useFonts({
    "OpenSans-Light": require("./assets/fonts/OpenSans-Light.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-ExtraBold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
    <NavigationContainer theme={theme}>
      <Stack.Navigator 
        initialRouteName="Tabs"
        screenOptions={{
          headerShown: false,
        }}
        >
        <Stack.Screen name="Tabs" component={TabStack} />
        <Stack.Screen name="Travel" component={Travel} />
      </Stack.Navigator>
      
    </NavigationContainer>
    <StatusBar
        barStyle={"dark-content"}
        backgroundColor={COLORS.paper}
        translucent
      />
    </>
  );
};

export default App;
