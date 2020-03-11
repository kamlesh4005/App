import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
import { Font, AppLoading } from 'expo';
import Icon from '@expo/vector-icons/Ionicons';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
/**
 * - AppSwitchNavigator
 *    - WelcomeScreen
 *      - Login Button
 *      - Sign Up Button
 *    - AppDrawerNavigator
 *          - Dashboard - DashboardStackNavigator(needed for header and to change the header based on the                     tab)
 *            - DashboardTabNavigator
 *              - Tab 1 - FeedStack
 *              - Tab 2 - ProfileStack
 *              - Tab 3 - SettingsStack
 *            - Any files you don't want to be a part of the Tab Navigator can go here.
 */

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import HorizontalGrid from './components/HorizontalGrid';
import DrawerScreen from './components/DrawerScreen';
import FlatListGrid from './components/FlatListGrid';
import TabsView from './components/TabsView';
import OpenWebView from './components/OpenWebView';
import GamesList from './components/Games/GamesList';
import AboutUs from './components/Pages/AboutUs';
import PrivacyPolicy from './components/Pages/PrivacyPolicy';
import ContactUs from './components/Pages/ContactUs';

const DEVICE_WIDTH = Dimensions.get('window').width;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  render() {
    return <AppContainer />;
  }
}
export default App;

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
        <Button title="Sign Up" onPress={() => alert('button pressed')} />
      </View>
    );
  }
}

class DashboardScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DashboardScreen</Text>
      </View>
    );
  }
}


async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  //ExponentPushToken[2kaLcJC87Q0qHPmdCCnife]
  //console.log("TOKEN -   ", token)
  // POST the token to your backend server from where you can retrieve it to send push notifications.
  // return fetch(PUSH_ENDPOINT, {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     token: {
  //       value: token,
  //     },
  //     user: {
  //       username: 'Brent',
  //     },
  //   }),
  // });
}

class Apps extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      return <Icon
        color={tintColor}
        name="md-apps"
        size={30}
      />;
    },
  };
  componentDidMount() {
    registerForPushNotificationsAsync();
  }

  render() { 
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <HorizontalGrid />
      </View>
    );  
  }
}

class Deals extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      return <Icon
        color={tintColor}
        name="ios-pricetags"
        size={30}
      />;
    },
  };
  render() {
    return (
      <View style={{ flex: 1}}>
        <TabsView />
      </View>
    );
  }
}

class Games extends Component {
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => {
      return <Icon
        color={tintColor}
        name="logo-game-controller-b"
        size={30}
      />;
    },
  };
  render() {
    return (
      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <GamesList /> 
      // </View>
    );
  }
}

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Apps,
    Games,
    Deals,
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTintColor: '#FFF',
        headerStyle: {
          backgroundColor: '#443266',
        },
        headerTitle: routeName,
      };
    },
    tabBarOptions: {
      activeTintColor: '#F1F0FF',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 13,
      },
      style: {
        backgroundColor: '#443266',
      },
    },
  }
);
const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator,
    FlatListGrid: FlatListGrid,
    OpenWebView: OpenWebView,
    AboutUs: AboutUs,
    PrivacyPolicy: PrivacyPolicy,
    ContactUs: ContactUs
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            color="#FFF"
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator,
  },
  Welcome: { screen: WelcomeScreen },
},
  {
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold', 
      },
    },
    //headerTitle: "Something",
    drawerWidth: DEVICE_WIDTH - 90,
    drawerBackgroundColor: "#F1F0FF",
    contentComponent: DrawerScreen,
    contentOptions: {
      activeTintColor: '#443266',
    },
  });

const AppSwitchNavigator = createSwitchNavigator({
  Dashboard: { screen: AppDrawerNavigator },
});

const AppContainer = createAppContainer(AppSwitchNavigator);
