//import liraries
import React, { Component, useState } from 'react';
import { ImageBackground, StyleSheet, Image } from 'react-native';
import {
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import PagesList from './Components/PagesList'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Theme'
import { widthPercentageToDP } from 'react-native-responsive-screen';

// create a component
const CustomDrawer = (props) => {
    const { Images } = useTheme()

    const { t } = useTranslation()
    const [pages, setPages] = useState([
        {
            title: t('drawer.home'),
            id: Math.random()
        },
        {
            title: t('drawer.account'),
            id: Math.random()
        },
        {
            title: t('drawer.Push'),
            id: Math.random()
        },
        {
            title: t('drawer.contact'),
            id: Math.random()
        },
    ])

    const toggleDrawer = () => props.navigation.toggleDrawer();;
    return (
        <ImageBackground
            source={Images.drawer}
            style={styles.container}
        >
            <DrawerContentScrollView {...props}>
                <Image
                    source={Images.logo}
                    style={styles.logo}
                />
                <PagesList pages={pages} navigation={props.navigation} />
            </DrawerContentScrollView>
        </ImageBackground>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    logo: {
        height: widthPercentageToDP('40'),
        width: widthPercentageToDP('40'),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: widthPercentageToDP('10')
    }
});

//make this component available to the app
export default CustomDrawer;
