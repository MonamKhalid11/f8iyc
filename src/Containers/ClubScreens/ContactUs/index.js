//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ClubView } from '@/Components'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Theme'

// create a component 
const ContactUs = (props) => {
    const { params } = props.route
    const { Images } = useTheme()

    const { t } = useTranslation()

    return (
        <ClubView
            heading={t('contact.heading')}
            subHeadings={t('contact.subHeadings')}
            drawer={true}
            onPress={() => props.navigation.toggleDrawer()}
            isContact={true}
        >

        </ClubView>
    );
};


//make this component available to the app
export default ContactUs;
