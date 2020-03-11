import React, { Component } from 'react';
import {
  Container,
  Header,
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

class TodaysDeals extends Component {
  constructor(props) {
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
                  <Thumbnail square size={40} source={{ uri: data.img }} />
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
                  <Button transparent onPress={() => this.props.navigation.navigate('OpenWebView', { itemUrl: data.sourceUrl })}>
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

export default withNavigation(TodaysDeals);