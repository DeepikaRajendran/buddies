import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import AppText from './AppText';

function PickerItem({ label, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}>
            <AppText style={styles.container}>{label}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        color: "royalblue",
        fontSize: 14,
        padding: 20,
    }
});

export default PickerItem;
