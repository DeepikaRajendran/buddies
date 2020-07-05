import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import colors from './../config/colors';
import { AppFormField, AppForm, SubmitButton } from '../components/form/';
import AppText from '../components/AppText';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    email: Yup.string().required("Please enter Email").email().label("Email"),
    password: Yup.string().required("Please enter Password").min(4).label("Password")
});
export default function LoginScreen() {
    return (

        <Screen style={styles.container}>
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}>
                <View style={styles.content}>
                    <AppText style={{ padding: 20 }}>Sign In</AppText>
                    <AppFormField
                        autoCapitalize="none"
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
                </View>
                <View style={styles.buttons}>
                    <SubmitButton title="Sign In" />
                    <SubmitButton title="Register" buttonColor="blue" textColor="white" />
                </View>
            </AppForm>
        </Screen>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blue,
        justifyContent: 'center',
    },
    content: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
