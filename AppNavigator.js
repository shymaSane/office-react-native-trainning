import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
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
import DrawerMenu from './src/screens/sub-screens/DrawerMenu';
import FilterScreen from './src/screens/Filter';
import SettingsScreen from './src/screens/Settings'
import ChangeNameScreen from './src/screens/ChangeName'
import ChangeEmailScreen from './src/screens/ChangeEmail'
import ChangeLocationScreen from './src/screens/ChangeLocation'

//filter nav style
FilterScreen.navigationOptions = {
  header: null,
};

SettingsScreen.navigationOptions ={
  header: null,
 
};
ProfileScreen.navigationOptions = {
  header: null,
}

ChangeNameScreen.navigationOptions = {
  header: null,
}

ChangeEmailScreen.navigationOptions = {
  header: null,
}

ChangeLocationScreen.navigationOptions = {
  header: null,
}


const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Filter: FilterScreen,
    
  },
  {
    initialRouteName: 'Home',
  },
);


const ProfileNavigator = createStackNavigator({
  Profile: ProfileScreen,
  Settings: SettingsScreen,
  ChangeName: ChangeNameScreen,
  ChangeEmail: ChangeEmailScreen,
  ChangeLocation: ChangeLocationScreen
},
{
  initialRouteName: 'Profile'
}
)
//Auth stack navigator
const AuthNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
  },
  {
    initialRouteName: 'Login',
  },
);

//Drawer navigator
HomeNavigator.navigationOptions = {
  drawerLabel: 'Browse',
  drawerIcon: ({tintColor}) => (
    <Image
      source={require('./assets/images/home.png')}
      resizeMode="contain"
      style={{width: 19, height: 19, tintColor: tintColor}}
    />
  ),
};
AddProductScreen.navigationOptions = {
  drawerLabel: 'Sell Your Items',
  drawerIcon: ({tintColor}) => (
    <Image
      source={require('./assets/images/camera.png')}
      resizeMode="contain"
      style={{width: 19, height: 19, tintColor: tintColor}}
    />
  ),
};
ChatScreen.navigationOptions = {
  drawerLabel: 'Chat',
  drawerIcon: ({tintColor}) => (
    <Image
      source={require('./assets/images/chat.png')}
      resizeMode="contain"
      style={{width: 19, height: 19, tintColor: tintColor}}
    />
  ),
};
NotificationsScreen.navigationOptions = {
  drawerLabel: 'Notifications',
  drawerIcon: ({tintColor}) => (
    <Image
      source={require('./assets/images/notification.png')}
      resizeMode="contain"
      style={{width: 19, height: 19, tintColor: tintColor}}
    />
  ),
};
CategoriesScreen.navigationOptions = {
  drawerLabel: 'Categories',
  drawerIcon: ({tintColor}) => (
    <Image
      source={require('./assets/images/categories.png')}
      resizeMode="contain"
      style={{width: 19, height: 19, tintColor: tintColor}}
    />
  ),
};

ProfileNavigator.navigationOptions = {
  drawerLabel: 'Profile',
  drawerIcon: ({tintColor}) => (
    <Image
      source={require('./assets/images/person.png')}
      resizeMode="contain"
      style={{width: 19, height: 19, tintColor: tintColor}}
    />
  ),
};

HelpScreen.navigationOptions = {
  drawerLabel: 'Help',
  drawerIcon: ({tintColor}) => (
    <Image
      source={require('./assets/images/help.png')}
      resizeMode="contain"
      style={{width: 19, height: 19, tintColor: tintColor}}
    />
  ),
};

LogoutScreen.navigationOptions = {
  drawerLabel: 'Logout',
  drawerIcon: ({tintColor}) => (
    <Image
      source={require('./assets/images/logout.png')}
      resizeMode="contain"
      style={{width: 19, height: 19, tintColor: tintColor}}
    />
  ),
};



const HomeDrawerNavigator = createDrawerNavigator(
  {
    HomePage: HomeNavigator,
    AddProduct: AddProductScreen,
    Chat: ChatScreen,
    Notifications: NotificationsScreen,
    Categories: CategoriesScreen,
    ProfileHome: ProfileNavigator,
    Help: HelpScreen,
    Logout: LogoutScreen,
  },
  {
    backBehavioral: 'history',
    contentComponent: DrawerMenu,
    contentOptions: {
      activeTintColor: '#DE4D4F',
      activeBackgroundColor: 'transparent',
      activeLabelStyle: {
        color: '#DE4D4F',
      },
      labelStyle: {
        fontWeight: 'normal',
        fontFamily: 'Montserrat-Medium',
        color: '#9a9a9aff',
        fontSize: 14,
      },
    },
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
