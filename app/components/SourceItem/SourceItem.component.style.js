import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';


export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 15,
  },
  contentWrapper: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontFamily: 'Sunflower-Medium',
    color: theme.COLOR_BLACK,
    fontSize: 18,
    marginBottom: 5,
  },
  desc: {
    fontFamily: 'Sunflower-Light',
    color: theme.COLOR_DARK_LIVER,
  },
  thumbnailImage: {
    width: 70,
    height: 70,
  },
  thumbnailDefault: {
    width: 70,
    height: 70,
    backgroundColor: theme.COLOR_MANGO_TANGO,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.RADIUS_SMALL,
  },
  thumbnailDefaultText: {
    fontFamily: 'Sunflower-Medium',
    fontSize: 30,
    color: 'white',
  },
});