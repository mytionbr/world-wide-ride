interface travelPlace {
  id: string;
  name: string;
  rating: string;
  img: string;
  countrie: string;
  price: string;
  reviews: number,
  description:string,
  gallery: string[]
}

type CountriesProps = {
  countries: travelPlace[];
  handleClickTravel: Function
};

type TopTravelProps = {
  place: travelPlace;
  index: number;
  handleClickTravel: Function
};

type TravelProps = {
  route: any,
  navigation: any
}

type HomeProps = {
  navigation: any
}

export { travelPlace, CountriesProps, TopTravelProps,TravelProps,HomeProps };
