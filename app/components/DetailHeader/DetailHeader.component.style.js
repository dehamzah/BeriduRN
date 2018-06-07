import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';


export default StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 85,
    paddingBottom: 40,
    backgroundColor: 'white',
  },
  separator: {
    width: 40,
    height: 5,
    backgroundColor: theme.COLOR_MANGO_TANGO,
    marginVertical: 10,
  },
  title: {
    fontFamily: 'Sunflower-Medium',
    fontSize: 30,
    color: theme.COLOR_PURE_BLACK,
  },
  linkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  link: {
    marginLeft: 5,
  }
});