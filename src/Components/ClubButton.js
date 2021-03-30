//import liraries
import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useTheme } from '@/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../Theme/Variables'
// create a component
const ClubButton = (props) => {
    const { Layout, Gutters, Fonts, Colors } = useTheme()

    return (
        <TouchableOpacity style={props.auth ? [styles.container, Layout.center, props.style] : [styles.blueButton, Layout.center, props.style]}
            onPress={props.onPress}
        >
            <Text style={props.auth ? styles.BtnText : styles.BtnTextBlue}>{props.name}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: hp('5'),
        width: wp('80'),
        borderColor: '#ffff',
        borderWidth: wp('0.4'),
        borderRadius: hp('0.5'),
        marginBottom: hp('2')
    },
    blueButton: {
        height: hp('5'),
        width: wp('80'),
        borderRadius: hp('0.5'),
        marginBottom: hp('2'),
        backgroundColor: Colors.buttonBg
    },
    BtnText: {
        color: '#ffff',
        fontSize: hp('2'),
        fontWeight: '400',
        fontFamily: "Helvetica Neue",
    },
    BtnTextBlue: {
        color: '#ffff',
        fontSize: hp('2'),
        fontWeight: '600',
        fontFamily: "Helvetica Neue",
    }
});

//make this component available to the app
export default ClubButton;
