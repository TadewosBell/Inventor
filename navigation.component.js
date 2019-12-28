import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Scanner from './src/components/Scanner';
import {HomeScreen} from './src/components/HomeScreen';
import {SignInForm2} from './src/components/auth/index';
import {RegisterForm} from './src/components/auth/Register';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Scanner: Scanner,
    Login: SignInForm2,
    Register: RegisterForm,
  },
  {
    initialRouteName: 'Login',
  }
);

export const AppNavigator = createAppContainer(RootStack);