//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ClubView } from '@/Components'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Theme'
import ContactList from './Listings'
// create a component 
const ContactUs = (props) => {
    const { params } = props.route
    const { Images } = useTheme()
    const [contacts, setContacts] = useState([
        {
            id: 1,
            Heading: 'Location',
            details: 'Figure 8 Island Yacht Club',
            details1: '5 Bridge',
            details2: 'Wilmington, NC 28411',
            image: Images.location
        },
        {
            id: 2,
            Heading: 'Office Hours',
            details: '9:00 AM to 5:00 PM',
            details1: 'Monday through Saturday',
            details2: '',
            image: Images.OfficeHours
        },
        {
            id: 3,
            Heading: 'Contact Info',
            details: 'Phone: 910-686-0631',
            details1: 'Fax: 910-686-2441',
            details2: '',
            image: Images.contactIcon
        },

    ])
    const { t } = useTranslation()

    return (
        <ClubView
            heading={t('contact.heading')}
            subHeadings={t('contact.subHeadings')}
            drawer={true}
            onPress={() => props.navigation.toggleDrawer()}
            isContact={true}
        >
            <ContactList
                contacts={contacts}
            />
        </ClubView>
    );
};


//make this component available to the app
export default ContactUs;
