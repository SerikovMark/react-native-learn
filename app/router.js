import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import ContactList from './screens/contacts/ContactList';
import ContactDetail from './screens/contacts/ContactDetail';
import InputPage from './screens/input/InputPage';

Dimensions.get('window');

export const Tabs = createBottomTabNavigator({
    'ContactList': {
        screen: ContactList,
        navigationOptions: {
            tabBarLabel: 'ContactList',
            tabBarIcon: ({ tintColor }) => <Icon name="open-book" type="entypo" size={28} color={tintColor} />
        }
    },
    'InputPage': {
        screen: InputPage,
        navigationOptions: {
            tabBarLabel: 'InputPage',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-add-circle-outline" type="ionicon" size={28} color={tintColor} />
        }
    }
});

export const ContactListStack = createStackNavigator({
    ContactList: {
        screen: ContactList,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
    ContactDetail: {
        screen: ContactDetail,
        navigationOptions: ({ navigation }) => ({
            headerMode: null,
            tabBarVisible: false,
            gesturesEnabled: false
        })
    }
});

export const createRootNavigator = () => {
    return createStackNavigator(
        {
            Tabs: {
                screen: Tabs,
                navigationOptions: ({ navigation }) => ({
                    gesturesEnabled: false
                })
            },
            ContactListStack: {
                screen: ContactListStack,
                navigationOptions: ({ navigation }) => ({
                    gesturesEnabled: false
                })
            }
        },
        {
            headerMode: "none",
            mode: 'modal'
        }
    );
};

export const AppContainer = createAppContainer(createRootNavigator(), Tabs);

// export const middleware = createReactNavigationReduxMiddleware(
//     "root",
//     state => state.navigation,
//   );

//  const addListener = reduxifyNavigator(AppContainer, "root");

// class Nav extends Component {
//     render() {
//         return (
//             <Navigator navigation={addNavigationHelpers({
//                 dispatch: this.props.dispatch,
//                 state: this.props.navigation,
//                 addListener
//               })} />
//         )
//     }

// }

// const mapStateToProps = state => ({
//     navigation: state.navigation,
//   });
  
// export default connect(mapStateToProps)(Nav)