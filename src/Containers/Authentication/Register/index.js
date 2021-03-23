//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ClubView, RegisterForm } from '@/Components'
import { useTranslation } from 'react-i18next'

// create a component
const Register = (props) => {
    const { t } = useTranslation()
    return (
        <ClubView
            heading={t('register.heading')}
            subHeadings={t('register.subHeadings')}
        >
            <RegisterForm />
        </ClubView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Register;
