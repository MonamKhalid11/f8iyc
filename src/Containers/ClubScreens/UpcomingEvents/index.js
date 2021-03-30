//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ClubView } from '@/Components'
import { useTranslation } from 'react-i18next'
import EventList from './EventsList'
import { useTheme } from '@/Theme'
import { navigate } from '../../../Navigators/Root';

// create a component 
const UpcomingEvents = (props) => {
    const { params } = props.route
    const { Images } = useTheme()

    const { t } = useTranslation()
    const eventTapped = (event) => {
        navigate('UpcomingEventsDetails', event)
    }
    return (
        <ClubView
            heading={t('upcoming.heading')}
            subHeadings={t('upcoming.subHeadings')}
            drawer={true}
            onPress={() => props.navigation.toggleDrawer()}
        >
            {params && params.events.length > 0 ?
                <EventList
                    events={params.events}
                    onPress={(event) => eventTapped(event)}
                />
                :
                null
            }

        </ClubView>
    );
};


//make this component available to the app
export default UpcomingEvents;
