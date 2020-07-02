import * as React from 'react';
import { StyleSheet, View } from 'react-native';
//import { useNavigation } from '@react-navigation/core';

import colors from './../config/colors';
import AppTextInput from './../components/AppTextInput';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

export default function LoginScreen() {
    //const navigate = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <AppText>Sign In</AppText>
                <AppTextInput
                    placeholder="Email"
                    contentType="emailAddress" />
                <AppTextInput
                    placeholder="Password"
                    contentType="password"
                    secureTextEntry={true} />
            </View>

            <View style={styles.buttons}>
                <AppButton title="Sign In" buttonColor="white" textColor="blue" onPress="handlePress"></AppButton>
                <AppButton title="Register" onPress="handlePress"></AppButton>
            </View>
        </View >
    );
}
function handlePress() {
    console.log("verified")
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 0.5,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    buttons: {
        flex: 0.1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});
