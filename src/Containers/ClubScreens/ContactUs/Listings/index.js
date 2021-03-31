//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Contact from '../Contact'
// create a component
const ContactList = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {props.contacts && props.contacts.map((contact) => {
                return (
                    <Contact
                        contact={contact}
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
export default ContactList;
