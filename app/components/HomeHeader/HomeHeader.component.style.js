import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';


export default StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 40,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: theme.COLOR_MANGO_TANGO,
  },
  title: {
    color: 'white',
    fontSize: 40,
  },
  desc: {
    fontSize: 18,
    color: 'white',
  }
});