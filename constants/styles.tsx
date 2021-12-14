
import { StyleSheet } from 'react-native'
import { COLORS,SIZES } from './theme';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.paper,
      padding:SIZES.padding,
      marginTop: 20,
      flexDirection: "column",
    },
    cardShadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 11,
    },
    topCardShadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });

export default styles