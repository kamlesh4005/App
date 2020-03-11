import React, { Component } from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  //Header,
  // Thumbnail,
  // Text,
  // Left,
  // Body,
  // Right,
  // Button,
} from 'native-base';
import { Image, Dimensions, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation'; 
const screenHeigth = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

class TodaysDeals extends Component {
  constructor(props) {
    super(props);
    const dealsData = [
      {
        dealName: "Paytm Mall Deal",
        clickUrl: "https://www.paytmmall.com",
        imageUrl: 'https://www.dqweek.com/wp-content/uploads/2017/09/xpSivrQ.jpg',
        key: "1"
      },
      {
        dealName: "Flipkart Deal",
        clickUrl: "https://www.flipkart.com",
        imageUrl: 'https://cashbackoffers.today/wp-content/uploads/2017/12/Flipkart-Cashback-Offers.jpg',
        key: "2"
      },
      {
        dealName: "Amazon Deal",
        clickUrl: "https://www.amazon.com",
        imageUrl: 'https://assets.indiadesire.com/images/amazon%20exclusive%20diwali%20offer.jpg',
        key: "3"
      },
      {
        dealName: "Paytm Mall Deal",
        clickUrl: "https://www.paytmmall.com",
        imageUrl: 'https://www.dqweek.com/wp-content/uploads/2017/09/xpSivrQ.jpg',
        key: "4"
      },
      {
        dealName: "Amazon Deal",
        clickUrl: "https://www.amazon.com",
        imageUrl: 'https://assets.indiadesire.com/images/amazon%20exclusive%20diwali%20offer.jpg',
        key: "5"
      },
    ]
    global.dealsData = dealsData;
  }
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={dealsData}
            renderRow={data =>
              <ListItem key={data.key}  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('OpenWebView', { itemUrl: data.clickUrl })}>
                  <Image source={{ uri: data.imageUrl }} style={{ flexDirection: "row",  marginHorizontal: 5, height: screenHeigth / 6 - 20, width: screenWidth - 20, resizeMode:'stretch', borderWidth:1, borderColor:"gray", borderRadius:5 }} />
                </TouchableHighlight>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default withNavigation(TodaysDeals);