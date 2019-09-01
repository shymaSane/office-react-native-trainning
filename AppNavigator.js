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
import DrawerMenu from './src/screens/sub-screens/DarwerMenu';

const HomeNavigator = createStackNavigator({
  Home: HomeScreen,
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

const HomeDrawerNavigator = createDrawerNavigator({
  HomePage: HomeNavigator,
  AddProduct: AddProductScreen,
  Chat: ChatScreen,
  Notifications: NotificationsScreen,
  Categories: CategoriesScreen,
  Profile: ProfileScreen,
  Help: HelpScreen,
  Logout: LogoutScreen,
},
{
  contentComponent: DrawerMenu,
}
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
