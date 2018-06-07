import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen/HomeScreen.component';
import DetailScreen from '../screens/DetailScreen/DetailScreen.component';
import SearchScreen from '../screens/SearchScreen/SearchScreen.component';


export default createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
  Search: {
    screen: SearchScreen,
  }
}, {
  headerMode: 'none'
});