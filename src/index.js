
import { createStackNavigator, createAppContainer } from "react-navigation";

import {
  SignUp,
  SignIn,
  Dashboard,
  Splash,
  ViewDocument,
  TextEditor
} from "./Components/index"




const AppNavigator = createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    },
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null
    },
  },
  TextEditor: {
    screen: TextEditor,
    navigationOptions: {
      header: null
    },
  },
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: null
    },

  },
  ViewDocument: {
    screen: ViewDocument,
    navigationOptions: {
      header: null
    },

  }
}, {
    initialRouteName: "Splash",
  });

const AppNavigation = createAppContainer(AppNavigator);


export default AppNavigation