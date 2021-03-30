//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../../../Theme/Variables';
import PageItem from '../PageItem'
import { useTranslation } from 'react-i18next'
import { navigate } from '../../../../Navigators/Root';
import { widthPercentageToDP } from 'react-native-responsive-screen';

// create a component
const PagesList = (props) => {
    console.log("showing props", props)
    const { t } = useTranslation()
    return (
        <View style={styles.container} >
            {props.pages.map((page) => {
                return (
                    <PageItem page={page} navigation={props.navigation} />
                )
            })}
        </View>
    );
};


//make this component available to the app
const styles = StyleSheet.create({
    container: {
        padding: widthPercentageToDP('5'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    helloTextContainer: {
        display: 'flex',
        borderBottomWidth: widthPercentageToDP('0.5'),
        borderColor: Colors.appColor,
        marginBottom: widthPercentageToDP('3'),
        paddingBottom: widthPercentageToDP('3')
    },
    titleText: {
        color: Colors.appColor,
        fontSize: widthPercentageToDP('12'),
    }
});
export default PagesList;
