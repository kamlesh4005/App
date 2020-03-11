import React, { Component } from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text, 
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import { withNavigation } from 'react-navigation'; 
import * as Constants from './Constants';

class TrendingDeals extends Component {
  constructor(props){
    super(props);
    const datas = Constants.DealsData.TodaysDealsData;
    global.datas = datas;
  }
  render() {
    return (  
      <Container>
        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem thumbnail key={data.key}>
                <Left>
                  <Thumbnail square size={40} source={{uri:data.img}} />
                </Left>
                <Body>
                  <Text>
                    {data.text}
                  </Text>
                  <Text numberOfLines={2} note>
                    {data.note}
                  </Text>
                </Body>
                <Right>
                  <Button transparent onPress={() => this.props.navigation.navigate('OpenWebView',{itemUrl:data.sourceUrl})}>
                    <Text >View</Text>
                  </Button>
                </Right>
              </ListItem>}
          />
        </Content> 
        </Container>
    );
  }
}

export default withNavigation(TrendingDeals);

// import * as React from 'react';
// import { Text, View, StyleSheet, Image, Linking } from 'react-native';

// export default class TrendingDeals extends React.Component {
//   static navigationOptions = { 
//     header: null, 
//   }
//    _handlePress = () => {
//     Linking.openURL('https://play.google.com/store/apps/details?id=com.roidtechnologies.appbrowzer');
//     //this.props.onPress && this.props.onPress();
//   };

//   render() {
//     return (
//       <Text onPress={this._handlePress}>
//         Click Here
//       </Text>
//     );
//   }
// }