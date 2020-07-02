import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import colors from '../config/colors';

function AppButton({ title, onPress, buttonColor = "blue", textColor = "white" }) {

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[buttonColor] }]} onPress={onPress}>
            <Text style={[styles.text, { color: textColor }]}> {title} </Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    button: {
        width: '90px',
        height: '42px',
        borderRadius: '5px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginVertical: 10,
        border: '1px solid #fff',
        borderColor: colors.white,
        borderWidth: '2.5px'
    },
    text: {
        color: colors.white,
        fontWeight: '600',
        fontSize: 16
    }
});

export default AppButton;