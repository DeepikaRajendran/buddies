
import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from './../config/colors';
import ItemSeperator from './../components/ItemSeperator';
import PickerItem from './PickerItem';

function AppPicker({ items, onSelectItem, placeholder, selectedItem }) {
    const [modalvisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons style={styles.icon} name="chevron-down" size={20} color={colors.white} />
                </View>
            </TouchableWithoutFeedback>
            <Modal
                visible={modalvisible}
                animationType={"fade"}>
                <Button title="Close" onPress={() => setModalVisible(false)} />
                <FlatList style={styles.listContainer}
                    data={items}
                    ItemSeparatorComponent={() => <ItemSeperator />}
                    renderItem={({ item }) => (
                        <PickerItem
                            label={item.label}
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                            }} />
                    )}
                    keyExtractor={item => item.value}
                />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colors.medium,
        borderRadius: 5,
        width: '70%',
        height: 42,
        padding: 12,
    },
    text: {
        flex: 1,
        fontSize: 14
    },
    icon: {
        marginRight: 20
    },
});

export default AppPicker;