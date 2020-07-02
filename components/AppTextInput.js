import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import colors from '../config/colors';

function AppTextInput({ placeholder, contentType, secureTextEntry }) {
    return (<TextInput
        textContentType={contentType}
        placeholder={placeholder}
        placeholderTextColor={colors.white}
        textalign="center"
        style={styles.container}
        secureTextEntry={secureTextEntry}
    />);
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.medium,
        borderRadius: 5,
        width: '70%',
        height: 42,
        padding: 12
    }
});

export default AppTextInput;
