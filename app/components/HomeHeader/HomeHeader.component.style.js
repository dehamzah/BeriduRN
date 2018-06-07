import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';


export default StyleSheet.create({
  container: {
    paddingTop: 90,
    paddingBottom: 60,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white',
  },
  title: {
    color: theme.COLOR_PURE_BLACK,
    fontSize: 50,
    fontFamily: 'Sunflower-Medium',
  },
  desc: {
    fontSize: 18,
    color: theme.COLOR_BLACK,
    fontFamily: 'Sunflower-Light',
  }
});