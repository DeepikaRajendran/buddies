import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import colors from '../config/colors';

function AppButton({ title, onPress, buttonColor = "white", textColor = "blue" }) {

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[buttonColor] }]} onPress={onPress}>
            <Text style={[styles.text, { color: colors[textColor] }]}> {title} </Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 42,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginVertical: 10,
        //border: '1px solid #fff',
        borderColor: colors.white,
        borderWidth: 2.5
    },
    text: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 16,
    }
});

export default AppButton;