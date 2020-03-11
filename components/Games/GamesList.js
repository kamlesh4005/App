import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions, TouchableHighlight } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import * as Constants from './GameConstants';
import { withNavigation } from 'react-navigation';

const data = Constants.GamesData.Games

const imageWidth = Dimensions.get("window").width / 4 - 18;
const fontWidth = imageWidth / 7;

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  return data;
};

const numColumns = 4;
class GamesList extends React.Component {
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View
        style={styles.item}
      >
        <TouchableHighlight onPress={() => this.props.navigation.navigate('OpenWebView', { itemUrl: item.clickUrl })}>
          <Image
            source={{
              uri: item.imageUrl,
            }}
            style={{ width: imageWidth, height: imageWidth, margin: 8, marginBottom: 0, borderRadius: 20 }}
          />
        </TouchableHighlight>
        <Text style={{fontSize: fontWidth}}>{item.title}</Text>
      </View>
    );
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#443266',
      },
      headerLeft: (
        <Icon
          style={{ paddingLeft: 10 }}
          onPress={() => navigation.goBack()}
          color="#FFF"
          name="md-arrow-round-back"
          size={30}
        />
      ),
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <FlatList
        data={formatData(data, numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={numColumns}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    // backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    marginBottom: 10,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});

export default withNavigation(GamesList)