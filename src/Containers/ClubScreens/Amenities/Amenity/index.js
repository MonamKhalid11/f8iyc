//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors } from '../../../../Theme/Variables';
import { useTheme } from '@/Theme'

// create a component
const Amenity = (props) => {
    const { Images } = useTheme()
    return (
        <View style={styles.container}
            key={props.ameity.id}
        >
            <Image
                source={props.ameity.image}
                style={styles.imageLogo}
            />
            <View style={styles.button}>
                <Text style={styles.BtnTextBlue} ellipsizeMode={'tail'}>{props.ameity.name}</Text>
                <TouchableOpacity
                    onPress={() => props.onPress(props.ameity)}
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
        height: heightPercentageToDP('20'),
        backgroundColor: Colors.buttonBg,
        alignSelf: 'center',
        marginBottom: widthPercentageToDP('2'),
    },
    imageLogo: {
        width: widthPercentageToDP('95'),
        height: heightPercentageToDP('12'),
        resizeMode: 'cover'
    },

    BtnTextBlue: {
        color: '#ffff',
        fontSize: heightPercentageToDP('2.5'),
        fontFamily: "Helvetica Neue",
        fontWeight: '500',
        width: widthPercentageToDP('80'),
    },
    button: {
        width: widthPercentageToDP('95'),
        height: heightPercentageToDP('8'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: widthPercentageToDP('5'),
        paddingRight: widthPercentageToDP('4'),
    },
    btn: {
        height: heightPercentageToDP('5'),
        width: widthPercentageToDP('5'),
        resizeMode: 'contain',
    }

});

//make this component available to the app
export default Amenity;
