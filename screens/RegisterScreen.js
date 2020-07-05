import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import * as Yup from 'yup';

import colors from '../config/colors';
import { AppFormField, AppForm, SubmitButton } from '../components/form/';
import AppText from './../components/AppText';
import AppPicker from './../components/AppPicker';
import Screen from './../components/Screen';

export default function RegisterScreen() {
    const genders = [
        { label: 'Female', value: '1' },
        { label: 'Male', value: '2' }
    ]
    const [gender, setGender] = useState();
    const validationSchema = Yup.object().shape({
        name: Yup.string().required().label("Name"),
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password"),
        confirmPassword: Yup.string().required().oneOf([Yup.ref("password"), "It should match with Password"]).label("Confirm Password"),
        flatNo: Yup.string().required().label("FlatNo"),
        streetName: Yup.string().required().label("StreetName"),
        cityState: Yup.string().required().label("City/State"),
        country: Yup.string().required().label("Country")
    });
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    flatNo: '',
                    streetName: '',
                    cityState: '',
                    country: ''
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}>
                <View style={styles.content}>
                    <AppText>Register</AppText>
                    <AppFormField
                        name="name"
                        placeholder="Name"
                        textContentType="name"
                    />
                    <AppFormField
                        name="email"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <AppFormField
                        name="password"
                        placeholder="Password"
                        textContentType="password"
                        secureTextEntry={true}
                    />
                    <AppFormField
                        name="confirmPassword"
                        placeholder="Confirm password"
                        textContentType="password"
                        secureTextEntry={true}
                    />
                    <AppFormField
                        name="flatNo"
                        placeholder="House No/ Flat No"
                        textContentType="sublocality"
                    />
                    <AppFormField
                        name="streetName"
                        placeholder="Street Name"
                        textContentType="fullStreetAddress"
                    />
                    <AppFormField
                        name="cityState"
                        placeholder="City/State"
                        textContentType="addressCityAndState"
                    />
                    <AppFormField
                        name="country"
                        placeholder="Country"
                        textContentType="countryName"
                    />
                    <AppPicker
                        items={genders}
                        placeholder="Gender"
                        selectedItem={gender}
                        onSelectItem={(item) => setGender(item)} />
                    <SubmitButton title="Register" />
                </View>
            </AppForm>
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
    }
});