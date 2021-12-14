import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

export const COLORS = {
    paper: '#F9FAFB',
    black: '#0C1025',
    blue: '#1957A1',
    gray: '#9DA0AB',
    darkBlue: '#1D2C4E',
    lightBlue: '#deecf7',
    amber: '#FFBF00',
    white: '#fff',
    darkGray:'#4F515D'
}

export const SIZES = {
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    navTitle: 25,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,
    width,
    height
};

export const FONTS = {
    navTitle: { fontFamily: "OpenSans-Light", fontSize: SIZES.navTitle },
    largeTitleBold: { fontFamily: "OpenSans-Regular", fontSize: SIZES.h2},
    h1: { fontFamily: "OpenSans-ExtraBold", fontSize: SIZES.h1, lineHeight: 36},
    h2: { fontFamily: "OpenSans-ExtraBold", fontSize: SIZES.h2, lineHeight: 30},
    h3: { fontFamily: "OpenSans-ExtraBold", fontSize: SIZES.h3, lineHeight: 22},
    h4: { fontFamily: "OpenSans-Regular", fontSize: SIZES.h4, lineHeight: 22},
    h5: { fontFamily: "OpenSans-ExtraBold", fontSize: SIZES.h5, lineHeight: 22},
    body1: { fontFamily: "OpenSans-Regular", fontSize: SIZES.body1, lineHeight: 36},
    body2: { fontFamily: "OpenSans-Regular", fontSize: SIZES.body2, lineHeight: 30},
    body3: { fontFamily: "OpenSans-Regular", fontSize: SIZES.body3, lineHeight: 22},
    body4: { fontFamily: "OpenSans-Light", fontSize: SIZES.body4, lineHeight: 22},
    body5: { fontFamily: "OpenSans-Light", fontSize: SIZES.body5, lineHeight: 22},
}

const appTheme = { COLORS, SIZES, FONTS }; 

export default appTheme;
