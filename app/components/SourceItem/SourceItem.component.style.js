import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';


export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 15,
  },
  thumbnailWrapper: {
    
  },
  contentWrapper: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    color: theme.COLOR_BLACK,
    fontSize: 18,
    fontWeight: '700',
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
    fontSize: 30,
    color: 'white',
  },
});