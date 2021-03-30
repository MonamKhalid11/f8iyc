//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors } from '../../../../Theme/Variables';
import Event from '../Event'
// create a component
const EventsList = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {props.events && props.events.map((event) => {
                return (
                    <Event
                        events={event}
                        onPress={(eventTapped) => props.onPress(eventTapped)}
                    />
                )
            })}
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: Colors.white,
        paddingTop: heightPercentageToDP('1'),
        borderTopLeftRadius: widthPercentageToDP('3'),
        borderTopRightRadius: widthPercentageToDP('3'),
    },
});

//make this component available to the app
export default EventsList;
