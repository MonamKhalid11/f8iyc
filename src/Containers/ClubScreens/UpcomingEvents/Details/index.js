//import liraries
import React, { Component, useState } from 'react';
import { ClubView } from '@/Components'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Theme'
import EventDetails from './SubDetails'
// create a component 
const UpcomingEventsDetails = (props) => {
    const { params } = props.route
    console.log("showing vlaues here in props for events", params)
    const { Images } = useTheme()
    const { t } = useTranslation()

    return (
        <ClubView
            heading={t('eventDetails.heading')}
            subHeadings={t('eventDetails.subHeadings')}
            drawer={true}
            onPress={() => props.navigation.toggleDrawer()}
        >
            <EventDetails
                events={params}
            />
        </ClubView>
    );
};


//make this component available to the app
export default UpcomingEventsDetails;
