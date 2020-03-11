import * as React from 'react';
import { BackHandler, Platform, WebView, SafeAreaView, StatusBar } from 'react-native';
import { Icon, Fab } from 'native-base';

export default class OpenWebView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        };
    }
    
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#443266',
            height: 10,
        },
        header: null,
    };
    webView = {
        canGoBack: false,
        ref: null,
    };


    onNavigationStateChange = navState => {
        this.webView.canGoBack = navState.canGoBack;
        this.webView.uri = navState.url;
        this.webView.canGoForward = navState.canGoForward;
    };

    onAndroidBackPress = () => {
        //if(this.webView.canGoBack == false){
        //this.webView.canGoBack = true;  
        //} 
        if (this.webView.canGoBack && this.webView.ref) {
            this.webView.ref.goBack();
            return true;
        }
        return false;
    };

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener(
                'hardwareBackPress',
                this.onAndroidBackPress
            );
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress');
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
                <StatusBar barStyle="light-content" />
                <WebView
                    style={{ marginTop: 26 }}
                    source={{
                        uri: navigation.getParam('itemUrl', 'https://www.google.com'),
                    }}
                    ref={webView => {
                        this.webView.ref = webView;
                    }}
                    originWhitelist={['*']}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    geolocationEnabled={true}
                    automaticallyAdjustContentInsets={true}
                    startInLoadingState={true}
                    onNavigationStateChange={this.onNavigationStateChange}
                />
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => navigation.goBack()}>
                    <Icon name="home" />
                </Fab>
            </SafeAreaView>
        );
    }
}

/*import * as React from 'react';
import { Text, View, StyleSheet, Image, WebView } from 'react-native';

export default class Tab2 extends React.Component {
  static navigationOptions = { 
    header: null, 
  }
  render() {
    const { navigation } = this.props; 
    return (
      <WebView style={{marginTop:24}} source = {{ uri:
         navigation.getParam('itemUrl', 'http://google.com/askhdbaskbdkasbd') }}/>
    )
  }
} */
