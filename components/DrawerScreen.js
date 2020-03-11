import React, { Component } from 'react';
import {
    Header,
    Title,
    Left,
    Body,
    Right
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { ScrollView, Image, Text, View, StyleSheet, Dimensions } from 'react-native';
import { DrawerActions } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class DrawerScreen extends Component {

    navigateToScreen = route => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route,
        }); 
        //this.props.navigation.dispatch(navigateAction);
        this.props.navigation.navigate(route)
        this.props.navigation.dispatch(DrawerActions.closeDrawer());
    };

    render() {
        return ( 
            <View>
                <ScrollView>
                    <Header
                        style={{
                            backgroundColor: '#290E36', 
                            height: 250,
                            fontWeight: 'bold',
                            justifyContent: 'flex-start',
                        }}>
                        <Left>
                            <Image source={require('../assets/cover.png')} style={{
                                height:250, width: DEVICE_WIDTH-120
                            }} />
                        </Left>
                        {/* <Body>
                            <Title style={{ 
                            marginTop:25,fontSize: 32, justifyContent:'center', alignContent:'center', fontFamily: 'sans-serif-medium' }}>Appso</Title>
                        </Body>
                        <Right /> */}
                    </Header>
                    <View>
                        <View style={styles.menuItem}>
                            <Text style={{ fontSize: 20, fontFamily: 'sans-serif-medium' }} onPress={this.navigateToScreen('AboutUs')}> <Icon name="ios-filing" size={30} />   About Us</Text>
                        </View>
                        <View style={styles.menuItem}>
                            <Text style={{ fontSize: 20, fontFamily: 'sans-serif-medium' }} onPress={this.navigateToScreen('ContactUs')}> <Icon name="md-contact" size={30} />   Contact Us</Text>
                        </View>
                        <View style={styles.menuItem}>
                            <Text style={{ fontSize: 20, fontFamily: 'sans-serif-medium' }} onPress={this.navigateToScreen('PrivacyPolicy')}> <Icon name="md-information-circle" size={30} />   Privacy Policy</Text>
                        </View>
                    </View>
                    {/* <FooterTab style={{ justifyContent: 'center', backgroundColor:'#FFF' , alignItems:'center' }}>
                        <Text style={{ fontSize: 15, justifyContent: 'center' }}>V 1.0.1/n</Text>
                        <Text style={{ fontSize: 15, justifyContent: 'center' }}>Developed by Me</Text>
                    </FooterTab> */}
                </ScrollView>
            </View>
        );

    }
}

DrawerScreen.propTypes = {
    navigation: PropTypes.object,
};
const styles = StyleSheet.create({
    menuItem: {
        padding: 10,
        height: 50,
        borderWidth: 1,
        fontSize: 18,
        borderColor: '#d6d7da',
    },
});
