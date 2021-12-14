import {
  ScrollView,
} from "react-native";
import React from "react";
import {
  HomeProps,
  PLACES,
  styles,
  travelPlace,
} from "../constants";
import Header from "../components/Header";
import Search from "../components/Search";
import PopularCountry from "../components/PopularCountry";
import TopTravel from "../components/TopTravel";



const Home = ({navigation}:HomeProps) => {
  const [countries, setCountries] = React.useState(PLACES);

  const handleClickTravel = (travel:travelPlace)=>{

    navigation.navigate('Travel',{
      travel: travel
    })
  }

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Search />
      <PopularCountry handleClickTravel={handleClickTravel} countries={countries} />
      <TopTravel handleClickTravel={handleClickTravel} countries={countries} />
    </ScrollView>
  );
};

export default Home;
