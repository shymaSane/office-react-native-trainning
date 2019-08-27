import { createStackNavigator, createSwitchNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/screens/Home'
import LoginScreen from './src/screens/Login'
import SignupScreen from './src/screens/Signup'
import ProductsScreen from './src/screens/Products'

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