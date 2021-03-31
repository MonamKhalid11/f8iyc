//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Notify from '../Notification'
// create a component
const NotificationsList = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {props.notifications && props.notifications.map((notification) => {
                return (
                    <Notify
                        notification={notification}
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
    },
});

//make this component available to the app
export default NotificationsList;
