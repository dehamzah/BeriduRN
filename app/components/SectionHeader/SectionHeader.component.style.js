import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';


export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  text: {
    fontFamily: 'Sunflower-Medium',
    color: theme.COLOR_PURE_BLACK,
    fontSize: 22,
  },
  line: {
    width: 45,
    height: 5,
    marginTop: 5,
    backgroundColor: theme.COLOR_MANGO_TANGO,
  },
}); 