import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/login';
import Home from './pages/home';
import Menu from './pages/menu';
import Cart from './pages/cart';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
});

const Routes = createAppContainer(MainNavigator);

export default Routes;