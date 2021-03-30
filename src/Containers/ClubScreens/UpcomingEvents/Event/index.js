//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors } from '../../../../Theme/Variables';
import { useTheme } from '@/Theme'

// create a component
const Event = (props) => {
    console.log("showing value of props here in events", props)
    const { Images } = useTheme()
    return (
        <View style={styles.border}>
            <View style={styles.container}
                key={props.events.id}
            >
                <Image
                    source={props.events.image}
                    style={styles.imageLogo}
                />
                <View style={styles.eventName}>
                    <Text style={styles.BtnTextBlue} ellipsizeMode={'tail'}>{props.events.name}</Text>
                    <Text style={styles.BtnTextDate} ellipsizeMode={'tail'}>{props.events.date}</Text>
                </View>



                <TouchableOpacity
                    onPress={() => props.onPress(props.events)}
                >
                    <Image
                        source={Images.next}
                        style={styles.btn}
                    />
                </TouchableOpacity>

            </View>
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: widthPercentageToDP('95'),
        flexDirection: 'row',
        paddingBottom: widthPercentageToDP('1'),
        paddingTop: widthPercentageToDP('1'),
        alignSelf: 'center',
        alignItems: 'center',
    },
    imageLogo: {
        width: widthPercentageToDP('40'),
        height: heightPercentageToDP('14'),

    },

    BtnTextBlue: {
        color: '#000',
        fontSize: heightPercentageToDP('2'),
        fontFamily: "Helvetica Neue",
        fontWeight: '500',
    },
    BtnTextDate: {
        color: '#000',
        fontSize: heightPercentageToDP('2'),
        fontFamily: "Helvetica Neue",
        color: '#525252',
    },
    button: {
        width: widthPercentageToDP('95'),
        height: heightPercentageToDP('8'),
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: widthPercentageToDP('5'),
        paddingRight: widthPercentageToDP('4'),
    },
    btn: {
        height: heightPercentageToDP('5'),
        width: widthPercentageToDP('5'),
        resizeMode: 'contain',
        tintColor: '#525252'
    },
    eventName: {
        marginLeft: widthPercentageToDP('4'),
        width: widthPercentageToDP('45')
    },
    border: {
        borderBottomWidth: 0.6,
        borderColor: '#898989',
    }

});

//make this component available to the app
export default Event;
