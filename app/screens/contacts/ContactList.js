import React, { Component } from 'react';
import { StatusBar, StyleSheet, FlatList, View } from 'react-native';
import ContactItem from './ContactItem';
import SplashScreen from 'react-native-splash-screen';

export default class ContactList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: 'Ivan Ivanov',
                    phoneNumber: '89977-78-5454',
                    thumbnail: 'https://wp-seven.ru/wp-content/uploads/2017/06/Xbox-Avatar-2.0-2.png'
                },
                {
                    id: 2,
                    name: 'Sidor Sidorov',
                    phoneNumber: '912447-454-454',
                    thumbnail: 'https://avatar-ssl.xboxlive.com/avatar/davidvkimball/avatarpic-xl.png'
                },
                {
                    id: 3,
                    name: 'Pert Petrov',
                    phoneNumber: '65777-7845-4554',
                    thumbnail: 'http://www.mtv.co.uk/sites/default/files/styles/vimn_image_embed/public/mtv_uk/articles/2018/04/23/xbox-avatar-leak-.jpg?itok=zNFQlhWJ'
                }
            ]
        }
    }

    componentDidMount() {
        SplashScreen.hide()
      }

    _renderItem = ({ item }) => (
        <ContactItem
            id={item.id}
            name={item.name}
            phoneNumber={item.phoneNumber}
            thumbnail={item.thumbnail}
            navigation={this.props.navigation}
        />
    );

    _keyExtractor = (item, index) => item.id.toString();

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <FlatList
                    data={this.state.contacts}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});