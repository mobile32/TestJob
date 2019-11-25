import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {LoginScreen} from './LoginScreen';
import {HomeScreen} from './HomeScreen';

const RootStack = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Login: {screen: LoginScreen},
  },
  {
    initialRouteName: 'Login',
  },
);
const AppContainer = createAppContainer(RootStack);

export default AppContainer;
