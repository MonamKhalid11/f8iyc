//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../../../Theme/Variables';
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { navigate } from '../../../../Navigators/Root';

// create a component

const PageItem = (props) => {
    const { t } = useTranslation()
    console.log('showing props', props)

    const navigater = (page) => {
        switch (page.title) {
            case t('drawer.home'):
                navigate('Home')
                break;
            case t('drawer.contact'):
                navigate('Contact')
                break;
            case t('drawer.account'):
                navigate('Profile')
                break;
            case t('drawer.Push'):
                navigate('Notification')
                break;
        }

    }

    return (
        <TouchableOpacity style={styles.blueButton}
            onPress={() => navigater(props.page)}
        >
            <Text style={styles.BtnTextBlue} >{props.page.title}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    blueButton: {
        height: heightPercentageToDP('14'),
        width: widthPercentageToDP('50'),
        marginBottom: heightPercentageToDP('1'),
        backgroundColor: Colors.buttonBg,
        alignItems: 'center',
        justifyContent: 'center'
    },
    BtnTextBlue: {
        color: '#ffff',
        fontSize: widthPercentageToDP('4'),
        // fontWeight: '600',
        fontFamily: 'TrajanPro-Regular',
        textAlign: 'center',
    }
});

//make this component available to the app
export default PageItem;
