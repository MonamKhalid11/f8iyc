import React from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { ClubTextInput, ClubButton } from '@/Components'
import { useTranslation } from 'react-i18next'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const LoginForm = (props) => {
    const { t } = useTranslation()

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Formik
                initialValues={{ Username: "", password: "" }}
                onSubmit={props.onSubmit}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={styles.container}>
                        <ClubTextInput
                            name={t('login.username')}
                            placeholder={"Jhon"}
                            onChangeText={handleChange('firstname')}
                            onBlur={handleBlur('firstname')}
                            value={values.firstname}
                            multiline={true}
                            numberOfLines={2}
                            placeholderTextColor="#525252"
                        />
                        <ClubTextInput
                            name={t('register.Password')}
                            placeholder={"•••••••••••••••••••"}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={true}
                            placeholderTextColor="#525252"
                        />

                        <ClubButton
                            name={t('login.login')}
                            auth={false}
                            onPress={handleSubmit}
                            style={styles.btnContainer}
                        />
                    </View>
                )}
            </Formik>
        </KeyboardAwareScrollView>

    );

}

export default LoginForm
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: 5
    },
    btnContainer: {
        alignSelf: 'center',
        marginTop: heightPercentageToDP('20'),
        width: widthPercentageToDP('90'),
        height: heightPercentageToDP('6')
    }
});
