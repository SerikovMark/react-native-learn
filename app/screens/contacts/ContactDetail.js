import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ContactDetail extends Component {
    render() {
        const { navigation } =  this.props;
        const contactName = navigation.getParam('name', 'NO-NAME');

        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Name #{JSON.stringify(contactName)}
                </Text>
                <Button title="Back to contacts list" onPress={() => this.props.navigation.navigate('Tabs')} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});