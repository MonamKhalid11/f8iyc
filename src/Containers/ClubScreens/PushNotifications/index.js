//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ClubView, RegisterForm } from '@/Components'
import { useTranslation } from 'react-i18next'
import NotificationsList from './NotificationsList'
// create a component
const Notifications = (props) => {
    const { t } = useTranslation()
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            name: 'Marina Drive',
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },
        {
            id: 2,
            name: 'Marina Drive',
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },
        {
            id: 3,
            name: 'Marina Drive',
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },
    ])
    return (
        <ClubView
            heading={t('notifiy.heading')}
            subHeadings={t('notifiy.subHeadings')}
            drawer={true}
            onPress={() => props.navigation.toggleDrawer()}

        >
            <NotificationsList
                notifications={notifications}
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
export default Notifications;
