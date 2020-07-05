import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from './AppText';

function ErrorMessage({ error, visible }) {
    if (!error || !visible) return null;
    return (
        <AppText style={styles.error}>{error}</AppText>
    );
}

const styles = StyleSheet.create({
    error: {
        color: 'tomato',
        fontSize: 17,
        fontWeight: 'normal',
        padding: 10
    }
});

export default ErrorMessage;
