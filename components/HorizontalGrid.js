// This is an Example to make Vertical+Horizontal Scroll View Like Google Play Store in RN
import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';

import { Card } from 'react-native-elements';
import * as Constants from './Constants';

class HorizontalGrid extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
        <View>
          <SingleRow navigation={this.props.navigation} datas={Constants.webUrlData.DailyUse} gridData={Constants.webUrlData.DailyUse} title='Popular Apps' />
          <SingleRow navigation={this.props.navigation} datas={Constants.webUrlData.Shopping} gridData={Constants.webUrlData.Shopping} title='Shopping' />
          <SingleRow navigation={this.props.navigation} datas={Constants.webUrlData.Travel} gridData={Constants.webUrlData.Travel} title='Travel' />
          <SingleRow navigation={this.props.navigation} datas={Constants.webUrlData.Grocery} gridData={Constants.webUrlData.Grocery} title='Grocery' />
          <SingleRow navigation={this.props.navigation} datas={Constants.webUrlData.Food} gridData={Constants.webUrlData.Food} title='Food' />
          <SingleRow navigation={this.props.navigation} datas={Constants.webUrlData.Medicine} gridData={Constants.webUrlData.Medicine} title='Medicine' />
          <SingleRow navigation={this.props.navigation} datas={Constants.webUrlData.Flights} gridData={Constants.webUrlData.Flights} title='Flights' />
          <SingleRow navigation={this.props.navigation} datas={Constants.webUrlData.Furniture} gridData={Constants.webUrlData.Furniture} title='Furniture' />
          <SingleRow navigation={this.props.navigation} datas={Constants.webUrlData.Gifts} gridData={Constants.webUrlData.Gifts} title='Gifts' />
          <SingleRow navigation={this.props.navigation} datas={Constants.webUrlData.RealEstate} gridData={Constants.webUrlData.RealEstate} title='Real Estate' />
          <SingleRow navigation={this.props.navigation} datas={Constants.webUrlData.Jobs} gridData={Constants.webUrlData.Jobs} title='Jobs' />
          <SingleRow navigation={this.props.navigation} datas={Constants.webUrlData.Movies} gridData={Constants.webUrlData.Movies} title='Movies' />
          <SingleRow navigation={this.props.navigation} datas={Constants.webUrlData.Social} gridData={Constants.webUrlData.Social} title='Social Sites' />
          <SingleRow navigation={this.props.navigation} datas={Constants.webUrlData.NEWS} gridData={Constants.webUrlData.NEWS} title='NEWS' />
        </View>
      </ScrollView>
    );
  }
}
class SingleRow extends React.Component {
  constructor(props) {
    super(props);
    const slides = props.datas;
    const gridData = props.gridData;
    global.slides = slides;
    global.gridData = gridData;
  }

  onPressLearnMore() {
    alert('Hello');
  }
  render() {
    return (
      <View>
        <Card
          containerStyle={{
            backgroundColor: '#FFFFFF',
            padding: 10,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
          }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#606070', fontWeight: 'bold' }}>
              {this.props.title}
            </Text>
            <Text style={{ color: '#228B22' }} onPress={() => this.props.navigation.navigate('FlatListGrid', { gridData: this.props.gridData, topTitle: this.props.title })}>
              MORE
            </Text>
          </View>
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {global.slides.map((item, key) => (
                <View style={{ margin: 5 }} key={key}>
                  <TouchableHighlight onPress={() => this.props.navigation.navigate('OpenWebView', { itemUrl: item.clickUrl })}>
                    <Image
                      source={{
                        uri: item.imageUrl,
                      }}
                      style={{ width: 75, height: 75, marginHorizontal: 5, borderWidth: 1, borderColor: "#F1F0FF", borderRadius: 5 }}
                    />
                  </TouchableHighlight>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{ color: '#494949', fontWeight: '200' }}>
                      {item.title}
                    </Text>
                  </View>
                  {/* <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{ color: '#606070', fontWeight: '200' }}>
                      {item.key}
                    </Text>
                    <Text style={{ color: '#228B22' }}>{item.text}</Text>
                  </View> */}
                </View>
              ))}
            </ScrollView>
          </View>
        </Card>
      </View>
    );
  }
}

export default withNavigation(HorizontalGrid)