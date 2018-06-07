import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen/HomeScreen.component';
import DetailScreen from '../screens/DetailScreen/DetailScreen.component';


export default createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
}, {
  headerMode: 'none'
});