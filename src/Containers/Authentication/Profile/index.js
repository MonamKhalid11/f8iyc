//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ClubView, UpdateProfile } from '@/Components'
import { useTranslation } from 'react-i18next'

// create a component
const Profile = (props) => {
    const { t } = useTranslation()
    return (
        <ClubView
            heading={t('profile.heading')}
            subHeadings={t('profile.subHeadings')}
            drawer={true}
            onPress={() => props.navigation.toggleDrawer()}
            isProfile={true}

        >
            <UpdateProfile />
        </ClubView>
    );
};


//make this component available to the app
export default Profile;
