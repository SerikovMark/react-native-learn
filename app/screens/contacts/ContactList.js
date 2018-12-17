import React, { Component } from 'react';
import { StatusBar, StyleSheet, FlatList, View } from 'react-native';
import ContactItem from './ContactItem';
import SplashScreen from 'react-native-splash-screen';
import * as Contacts from "react-native-contacts";
import {SearchBar} from "react-native-elements";

export default class ContactList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            contacts: []
        };
        this.contactsCache = [];
    }

    componentDidMount() {
        SplashScreen.hide();
        this.loadContacts();
    }

    _renderItem = ({ item }) => (
        <ContactItem
            id={item.id}
            name={item.givenName}
            phoneNumber={item.phoneNumbers[0].number}
            thumbnail={item.thumbnailPath}
            contact={item}
            navigation={this.props.navigation}
        />
    );

    _keyExtractor = (item, index) => item.id;

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <FlatList
                    ListHeaderComponent={this.getHeaderComponent}
                    data={this.state.contacts}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }

    loadContacts() {
        Contacts.getAll((err, contacts) => {
            if (err) throw err;
            // contacts returned
            if (contacts != null) {
                for (const contact of contacts) {
                    if (!contact.hasThumbnail) {
                        contact.thumbnailPath = "https://bizraise.pro/wp-content/uploads/2014/09/no-avatar-300x300.png"
                        contact.hasThumbnail = true;
                    }
                    if (contact.phoneNumbers == null || contact.phoneNumbers.length === 0) {
                        contact.phoneNumbers[0] = "";
                    }
                    if (contact.middleName == null) {
                        contact.middleName = "";
                    }
                    if (contact.familyName == null) {
                        contact.familyName = "";
                    }
                    if (contact.givenName == null) {
                        contact.givenName = "";
                    }
                }
                this.setState({
                    contacts: contacts
                });
                this.contactsCache = contacts;
            }
        });
    }

    getHeaderComponent =() => {
        return (
            <SearchBar
                placeholder="Search..."
                lightTheme
                round
                onChangeText={text => this.searchContactFilter(text)}
            />
        )
    };

    searchContactFilter(text) {
        if (text == null || text.length < 1) {
            this.setState({
                    contacts: this.contactsCache
            } );
            return;
        }
        const foundContacts = this.contactsCache.filter(contact => {
            const itemData = `${contact.givenName.toUpperCase()} ${contact.familyName.toUpperCase()} ${contact.middleName.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            contacts: foundContacts,
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});