import React from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { ClubTextInput, ClubButton } from '@/Components'
import { useTranslation } from 'react-i18next'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const RegisterForm = (props) => {
    const { t } = useTranslation()

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Formik
                initialValues={{ firstname: "", lastname: "", memberid: "", createUsername: "", password: "", confirmpassword: "" }}
                onSubmit={values => alert(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={styles.container}>
                        <ClubTextInput
                            name={t('register.firstname')}
                            placeholder={"Jhon"}
                            onChangeText={handleChange('firstname')}
                            onBlur={handleBlur('firstname')}
                            value={values.firstname}
                            multiline={true}
                            numberOfLines={2}
                            placeholderTextColor="#525252"
                        />
                        <ClubTextInput
                            name={t('register.lastname')}
                            placeholder={"Appleseed"}
                            onChangeText={handleChange('lastname')}
                            onBlur={handleBlur('lastname')}
                            value={values.lastname}
                            multiline={true}
                            numberOfLines={2}
                            placeholderTextColor="#525252"
                        />
                        <ClubTextInput
                            name={t('register.member')}
                            placeholder={"12345678"}
                            onChangeText={handleChange('memberid')}
                            onBlur={handleBlur('memberid')}
                            value={values.memberid}
                            keyboardType="numeric"
                            multiline={true}
                            numberOfLines={2}
                            placeholderTextColor="#525252"
                        />
                        <ClubTextInput
                            name={t('register.createUser')}
                            placeholder={"JhonAppleseed01"}
                            onChangeText={handleChange('createUsername')}
                            onBlur={handleBlur('createUsername')}
                            value={values.createUsername}
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
                        <ClubTextInput
                            name={t('register.confirmPassword')}
                            secureTextEntry={true}
                            placeholder={"•••••••••••••••••••"}
                            onChangeText={handleChange('confirmpassword')}
                            onBlur={handleBlur('confirmpassword')}
                            value={values.confirmpassword}
                            placeholderTextColor="#525252"
                        />
                        <ClubButton
                            name={t('register.next')}
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

export default RegisterForm
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: 5
    },
    btnContainer: {
        alignSelf: 'center',
        marginTop: heightPercentageToDP('3'),
        width: widthPercentageToDP('90'),
        height: heightPercentageToDP('6')
    }
});
