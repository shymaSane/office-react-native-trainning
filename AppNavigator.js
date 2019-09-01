import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';
import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/Login';
import SignupScreen from './src/screens/Signup';
import CategoriesScreen from './src/screens/Categories';
import ChatScreen from './src/screens/Chat';
import HelpScreen from './src/screens/Help';
import NotificationsScreen from './src/screens/Notifications';
import ProfileScreen from './src/screens/Profile';
import LogoutScreen from './src/screens/Logout';
import AddProductScreen from './src/screens/AddProduct';

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
  AddProduct: AddProductScreen,
  Chat: ChatScreen,
  Notifications: NotificationsScreen,
  Categories: CategoriesScreen,
  Profile: ProfileScreen,
  Hlep: HelpScreen,
  Logout: LogoutScreen,
});

const HomeDrawerNavigator = createDrawerNavigator({
  HomePage: HomeNavigator,
});

const AuthNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
  },
  {
    initialRouteName: 'Login',
  },
);

const MainNavigator = createSwitchNavigator(
  {
    HomeDrawer: HomeDrawerNavigator,
    auth: AuthNavigator,
  },
  {
    initialRouteName: 'auth',
  },
);

export default createAppContainer(MainNavigator);
