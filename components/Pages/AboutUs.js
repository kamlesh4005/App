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

export class AboutUs extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('About Us', 'About Us'),
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
                    {`Hello Users, This App will allow you to redirect all other websites by clicking on their respective logo. Here we are not storing any user data. This App is Just using third party websites to redirect user. 
            Disclaimer: All contents of the website are owned by respective website. We have no copyright over the content/logo of other websites. For any details please mail us. These third party sites have separate and independent privacy policies and terms.
            Please read their privacy policy and terms and conditions carefully.`}
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

export default withNavigation(AboutUs);