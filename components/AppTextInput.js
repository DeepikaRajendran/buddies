import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import colors from '../config/colors';

function AppTextInput({ placeholder, ...otherProps }) {
    return (<TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.white}
        textalign="center"
        style={styles.container}
        {...otherProps}
    />);
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.medium,
        borderRadius: 5,
        width: '70%',
        height: 42,
        padding: 10,
        margin: 10
    }
});

export default AppTextInput;
