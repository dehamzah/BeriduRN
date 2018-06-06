import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';


export default StyleSheet.create({
  container: {
    padding: 15,
  },
  text: {
    fontWeight: '700',
    color: theme.COLOR_BLACK,
    fontSize: 23,
  },
  line: {
    width: 45,
    height: 5,
    marginTop: 5,
    backgroundColor: theme.COLOR_MANGO_TANGO,
  },
}); 