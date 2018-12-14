import React, { Component } from 'react'
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'

export default class ContactItem extends Component {

    showContactDetail = () => {
        let id = this.props.id;
        let name = this.props.name;
        let promise = this.props.navigation.navigate('ContactDetail', {id: id, name: name});
        console.log("-----------------" + id + " promise = " + promise);
    };

    render() {
        return (
            <TouchableOpacity onPress={this.showContactDetail}>
                <View style={styles.rowContainer}>
                    <Image source={{uri: this.props.thumbnail}} 
                            style={styles.thumbnail}
                            resizeMode="contain" />
                    <View style={styles.rowText}>
                        <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
                            {this.props.name}
                        </Text>
                        <Text style={styles.number} numberOfLines={1} ellipsizeMode="tail">
                            {this.props.phoneNumber}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        height: 100,
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 4,
        shadowOffset:{  width: 1,  height: 1,  },
        shadowColor: '#CCC',
        shadowOpacity: 1.0,
        shadowRadius: 1
    },
    name: {
        paddingLeft: 10,
        paddingTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#777'
    },
    number: {
        paddingLeft: 10,
        marginTop: 5,
        fontSize: 14,
        color: '#777'
    },
    thumbnail: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    rowText: {
        flex: 4,
        flexDirection: 'column'
    }
});