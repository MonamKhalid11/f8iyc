//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useTheme } from '@/Theme'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

// create a component
const ClubTextInput = (props) => {
    const { Layout, Gutters, Fonts } = useTheme()

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <TextInput
                {...props}
                style={styles.input}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: heightPercentageToDP('12'),
        borderBottomWidth: 0.5,
        borderColor: '#898989',
    },
    name: {
        width: widthPercentageToDP('40'),
        paddingLeft: widthPercentageToDP('7'),
        fontFamily: "Helvetica Neue",
        fontWeight: '500'
    },
    input: {
        marginLeft: widthPercentageToDP('3'),
        fontFamily: "Helvetica Neue",
        color: '#525252',
        width: widthPercentageToDP('40')

    }

});

//make this component available to the app
export default ClubTextInput;
