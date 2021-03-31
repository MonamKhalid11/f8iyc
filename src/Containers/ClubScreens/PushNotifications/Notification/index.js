//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

// create a component
const Notify = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.detailContainer}>
                <Text style={styles.heading}>{props.notification.name}</Text>
                <Text style={styles.details}>{props.notification.details}</Text>

            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0.5,
        borderColor: '#898989',
        paddingBottom: widthPercentageToDP('5'),
        flexDirection: 'row',
        padding: widthPercentageToDP('5'),
        height: widthPercentageToDP('40'),
    },
    imageContaner: {
        height: widthPercentageToDP('10'),
        width: widthPercentageToDP('10'),
        resizeMode: 'contain',
        marginTop: widthPercentageToDP('5')
    },
    heading: {
        fontFamily: 'TrajanPro-Regular',
        fontSize: widthPercentageToDP('5'),
        marginBottom: widthPercentageToDP('1'),
        color: "#000"
    },
    details: {
        fontFamily: "Helvetica Neue",
        color: '#898989',
        fontSize: widthPercentageToDP('5'),
    },
    detailContainer: {
        marginLeft: widthPercentageToDP('4'),
        marginTop: widthPercentageToDP('5')

    }
});

//make this component available to the app
export default Notify;
