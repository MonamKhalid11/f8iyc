//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '@/Theme'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

// create a component
const ClubView = (props) => {
    const { Layout, Images } = useTheme()

    return (
        <View style={styles.parent}>
            <ImageBackground style={styles.container}
                source={props.isProfile ? Images.profileBg : props.isContact ? Images.contact : Images.storyBg}
            >
                {props.drawer ?
                    <TouchableOpacity onPress={props.onPress}
                        style={styles.appDrawer}
                    >
                        <Image
                            source={Images.drawerIcon}
                            style={styles.drawerIcon}
                        />
                    </TouchableOpacity>
                    : null
                }
                {
                    props.isProfile ?

                        <View style={{ alignSelf: 'center' }}>
                            <View style={{ borderWidth: widthPercentageToDP('2'), borderColor: '#CAB4AC', height: widthPercentageToDP('35'), width: widthPercentageToDP('35'), borderRadius: 100 }}>
                                <Image
                                    source={Images.profiledp}
                                    style={styles.profile}
                                />
                            </View>
                            <Image
                                source={Images.addBtn}
                                style={styles.btn}
                            />

                        </View>
                        :
                        null
                }
                <Text style={styles.heading}>{props.heading}</Text>
                <Text style={styles.subHeading}>{props.subHeadings}</Text>
            </ImageBackground>

            <View style={styles.content}>
                {props.children}
            </View>
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    parent: {
        flex: 1
    },
    container: {
        width: "100%",
        height: heightPercentageToDP('55'),
        justifyContent: 'flex-end',
    },
    appDrawer: {
        position: 'absolute',
        top: widthPercentageToDP('5'),
        left: widthPercentageToDP('5')
    },
    drawerIcon: {
        height: widthPercentageToDP('7'),
        width: widthPercentageToDP('7'),
        resizeMode: 'contain',

    },
    heading: {
        color: "#ffff",
        paddingLeft: widthPercentageToDP('5'),
        fontSize: widthPercentageToDP('5'),
        marginBottom: widthPercentageToDP('1'),
        fontFamily: "Helvetica Neue"
    },
    subHeading: {
        color: "#ffff",
        marginBottom: heightPercentageToDP('20'),
        paddingLeft: widthPercentageToDP('5'),
        fontSize: widthPercentageToDP('6'),
        fontFamily: 'TrajanPro-Regular'

    },
    content: {
        flex: 1,
        backgroundColor: '#ffff',
        borderTopLeftRadius: widthPercentageToDP('3'),
        borderTopRightRadius: widthPercentageToDP('3'),
        marginTop: heightPercentageToDP('-18'),
    },
    base: {

    },
    btn: {
        height: widthPercentageToDP('7'),
        width: widthPercentageToDP('7'),
        resizeMode: 'contain',
        position: 'absolute',
        right: 0,
        bottom: widthPercentageToDP('-4'),
    },
    profile: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
        overflow: 'hidden'
    }
});

//make this component available to the app
export default ClubView;
