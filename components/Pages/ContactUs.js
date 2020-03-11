import React, { Component } from 'react';
import {
    Container,
    Header,
    Content,
    List,
    ListItem,
    Thumbnail,
    //Text,
    Left,
    Body,
    Right,
    Button,
} from 'native-base';
import Icon from '@expo/vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';

import { Text, View, StyleSheet } from 'react-native';

export class ContactUs extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('Contact Us', 'Contact Us'),
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor: '#443266',
            },
            headerLeft: (
                <Icon
                    style={{ paddingLeft: 10, margin:10 }}
                    onPress={() => navigation.goBack()}
                    color="#FFF"
                    name="md-arrow-round-back"
                    size={30}
                />
            ),
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    {`If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at multipletricks.com@gmail.com.`}
                </Text> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 15, 
        padding: 8,

    },
    paragraph: {
        margin: 5,
        fontSize: 14, 
        padding:5,        
        borderWidth:1,
    },
});

export default withNavigation(ContactUs);