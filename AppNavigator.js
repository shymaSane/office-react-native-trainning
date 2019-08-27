import { createStackNavigator, createSwitchNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'
import SignupScreen from './screens/Signup'
import ProductsScreen from './screens/Products'

const HomeNavigator = createStackNavigator({
    Home: HomeScreen, 
    Products: ProductsScreen
}
    
);

const AuthNavigator = createStackNavigator({
    Login: LoginScreen,
    Signup: SignupScreen
},
{
    initialRouteName: 'Login'
}
)
  
const MainNavigator = createSwitchNavigator({
    HomePage: HomeNavigator,
    auth: AuthNavigator
},
{
    initialRouteName: 'auth'
})

export default createAppContainer(MainNavigator);