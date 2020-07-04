import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from './../config/colors';

function ItemSeperator() {
    return (
        <View style={styles.container}></View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 1,
        backgroundColor: colors.grey
    }
});

export default ItemSeperator;
