//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ClubView } from '@/Components'
import { useTranslation } from 'react-i18next'
import AmenititesList from './AmenitiesList'
import { useTheme } from '@/Theme'
import { navigate } from '../../../Navigators/Root'
// create a component 
const Amenities = (props) => {
    const { Images } = useTheme()

    const { t } = useTranslation()
    const [amentity, setAmenity] = useState([
        {
            id: Math.random(),
            image: Images.amone,
            name: 'This Week at the Helm',
            events: [{
                id: 1,
                name: 'Name of Event',
                date: 'Oct.31'
            }]
        },
        {
            id: Math.random(),
            image: Images.amtwo,
            name: 'Shorelines',
            events: []

        },
        {
            id: 1,
            image: Images.amone,
            name: 'Upcoming Events',
            events: [
                {
                    id: 1,
                    name: 'Name of Event',
                    image: Images.events,
                    date: 'Oct.31',
                    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dignissim massa, id congue augue. Fusce at risus eros. 
                    •  Pellentesque venenatis mattis elit      
                    •  Ut magna ex, luctus eu lacus 
                    •  Konvallis sapien`
                },
                {
                    id: 1,
                    name: 'Name of Event',
                    image: Images.events,
                    date: 'Oct.31',
                    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dignissim massa, id congue augue. Fusce at risus eros. 

                    •  Pellentesque venenatis mattis elit      
                    •  Ut magna ex, luctus eu lacus 
                    •  Konvallis sapien`
                },
                {
                    id: 1,
                    name: 'Name of Event',
                    image: Images.events,
                    date: 'Oct.31',
                    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dignissim massa, id congue augue. Fusce at risus eros. 
                    •  Pellentesque venenatis mattis elit      
                    •  Ut magna ex, luctus eu lacus 
                    •  Konvallis sapien`
                },
                {
                    id: 1,
                    name: 'Name of Event',
                    image: Images.events,
                    date: 'Oct.31',
                    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dignissim massa, id congue augue. Fusce at risus eros. 

                    •  Pellentesque venenatis mattis elit      
                    •  Ut magna ex, luctus eu lacus 
                    •  Konvallis sapien`
                },
                {
                    id: 1,
                    name: 'Name of Event',
                    image: Images.events,
                    date: 'Oct.31',
                    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dignissim massa, id congue augue. Fusce at risus eros. 

                    •  Pellentesque venenatis mattis elit      
                    •  Ut magna ex, luctus eu lacus 
                    •  Konvallis sapien`
                },
                {
                    id: 1,
                    name: 'Name of Event',
                    image: Images.events,
                    date: 'Oct.31',
                    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at dignissim massa, id congue augue. Fusce at risus eros. 

                    •  Pellentesque venenatis mattis elit      
                    •  Ut magna ex, luctus eu lacus 
                    •  Konvallis sapien`
                }

            ]
        },
        {
            id: Math.random(),
            image: Images.amthree,
            name: 'Our Dining Menu',
            events: []

        },
        {
            id: Math.random(),
            image: Images.amfour,
            name: 'Events',
            events: []

        },
    ])
    const aminityTapped = (aminity) => {
        if (aminity.id == 1) {
            navigate('UpcomingEvents', aminity)
        }
    }
    return (
        <ClubView
            heading={t('Amenities.heading')}
            subHeadings={t('Amenities.subHeadings')}
            drawer={true}
            onPress={() => props.navigation.toggleDrawer()}
        >
            <AmenititesList
                amenties={amentity}
                onPress={(aminity) => aminityTapped(aminity)}

            />
        </ClubView>
    );
};


//make this component available to the app
export default Amenities;
