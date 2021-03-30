//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ClubView, LoginForm } from '@/Components'
import { useTranslation } from 'react-i18next'
import { navigateAndReset } from '../../../Navigators/Root'

// create a component
const Login = (props) => {
    const { t } = useTranslation()
    return (
        <ClubView
            heading={t('register.heading')}
            subHeadings={t('register.subHeadings')}
        >
            <LoginForm
                onSubmit={() => navigateAndReset([{ name: 'Main' }])}
            />
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
export default Login;
