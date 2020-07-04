import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import colors from '../config/colors';
import AppText from './../components/AppText';
import AppTextInput from './../components/AppTextInput';
import AppButton from './../components/AppButton';
import AppPicker from './../components/AppPicker';
import Screen from './../components/Screen';

export default function RegisterScreen() {

    const genders = [
        { label: 'Female', value: '1' },
        { label: 'Male', value: '2' }
    ]
    const [gender, setGender] = useState();

    return (
        <Screen style={styles.container}>

            <View style={styles.content}>
                <AppText>Register</AppText>
                <AppTextInput
                    placeholder="Name"
                    contentType="name" />
                <AppTextInput
                    placeholder="Email"
                    contentType="emailAddress" />
                <AppTextInput
                    placeholder="Password"
                    contentType="password"
                    secureTextEntry={true} />
                <AppTextInput
                    placeholder="Confirm password"
                    contentType="password"
                    secureTextEntry={true} />
                <AppTextInput
                    placeholder="House No/ Flat No"
                    contentType="sublocality" />
                <AppTextInput
                    placeholder="Street Name"
                    contentType="fullStreetAddress" />
                <AppTextInput
                    placeholder="City/State"
                    contentType="addressCityAndState" />
                <AppTextInput
                    placeholder="Country"
                    contentType="countryName" />
                <AppPicker
                    items={genders}
                    placeholder="Gender"
                    selectedItem={gender}
                    onSelectItem={(item) => setGender(item)} />

                <AppButton title="Register" onPress={() => console.log("register presses")}></AppButton>
            </View>

        </Screen>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blue,
    },
    content: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },


});