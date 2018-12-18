import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const InputItem = (props) => {
    return (
        <TouchableOpacity>
            <View style={styles.listItem}>
                <Text>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#eee'
    }
});

export default InputItem;