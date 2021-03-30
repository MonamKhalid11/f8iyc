//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { Colors } from '../../../../../Theme/Variables';

// create a component
const EventDetails = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Image
                source={props.events && props.events.image}
                style={styles.eventsImage}
            />

            <Text style={styles.subHeading}>{props.events.name}</Text>
            {/* <Text style={styles.date}>{props.events.date}</Text> */}
            <Text style={styles.date}>Sunday, October. 31 ,2020</Text>
            <View style={styles.contentContainer}>
                <Text style={styles.details} >{props.events.details}</Text>
            </View>

        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingBottom: 50,
        paddingTop: widthPercentageToDP('5')
    },
    eventsImage: {
        height: widthPercentageToDP('35'),
        width: widthPercentageToDP('95'),
        alignSelf: 'center',
    },
    subHeading: {
        fontSize: widthPercentageToDP('6'),
        fontFamily: 'TrajanPro-Regular',
        marginTop: widthPercentageToDP('5'),
        marginLeft: widthPercentageToDP('5')

    },
    date: {
        fontSize: widthPercentageToDP('3'),
        fontFamily: "Helvetica Neue",
        marginLeft: widthPercentageToDP('5'),
        color: Colors.buttonBg,
        fontWeight: '400'

    },
    contentContainer: {
        borderTopWidth: 0.6,
        borderColor: '#898989',
        marginTop: widthPercentageToDP('2'),
        padding: widthPercentageToDP('5'),
    },
    details: {
        color: '#898989',
        fontFamily: "Helvetica Neue",
        fontWeight: '500',
    }

});

//make this component available to the app
export default EventDetails;
