import { StyleSheet } from 'react-native';
import theme from '../../styles/theme.style';


export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
    paddingVertical: 5,
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderColor: theme.COLOR_GREY,
  },
  actionButton: {
    padding: 20
  },
  textInput: {
    flex: 1,
    height: 40,
  }
});