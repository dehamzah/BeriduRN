import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';


export default StyleSheet.create({
  container: {
    padding: 15,
    borderTopWidth: 0.25,
    borderColor: theme.COLOR_GREY,
  },
  contentWrapper: {
    flexDirection: 'row',
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    fontFamily: 'Sunflower-Medium',
    fontSize: 18,
    lineHeight: 23,
    color: theme.COLOR_PURE_BLACK,
  },
  thumbnailWrapper: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  thumbnail: {
    width: 120,
    height: 75,
    borderRadius: theme.RADIUS_MEDIUM,
  },
  metaWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  metaSeparator: {
    width: 5,
    height: 5,
    backgroundColor: theme.COLOR_MANGO_TANGO,
    marginHorizontal: 8,
    borderRadius: theme.RADIUS_MEDIUM,
  },
  metaText: {
    fontFamily: 'Sunflower-Light',
    color: theme.COLOR_MANGO_TANGO,
    fontSize: 12,
  }
});