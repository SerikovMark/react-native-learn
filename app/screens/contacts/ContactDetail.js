import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import * as Contacts from "react-native-contacts";

export default class ContactDetail extends Component {

    constructor(props) {
        super(props);
        const { navigation } =  this.props;
        this.state = {
            contact: navigation.getParam('contact')
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.state.contact.thumbnailPath}}
                       style={styles.thumbnail}       
                       resizeMethod="resize"
                       resizeMode="contain"          
                />
                <Text style={styles.title}>
                    Name: {JSON.stringify(this.state.contact.givenName)}
                </Text>
                <Text style={styles.title}>
                    Family name: {JSON.stringify(this.state.contact.familyName)}
                </Text>
                <Text style={styles.title}>
                    Phone: {JSON.stringify(this.state.contact.phoneNumbers[0].number)}
                </Text>
                <Button title="Back to contacts list" onPress={() => this.props.navigation.navigate('Tabs')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#FFF',
        // height: 100,
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 4,
        shadowOffset:{  width: 1,  height: 1,  },
        shadowColor: '#CCC',
        shadowOpacity: 1.0,
        shadowRadius: 1,
        overflow: 'hidden'

    },
    title: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    },
    thumbnail: {
        // flex: 1,
        height: 300
    }
});