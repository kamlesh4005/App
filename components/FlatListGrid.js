import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions, TouchableHighlight } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

const data = [
  { key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' }, { key: 'I' }, { key: 'J' },
  // { key: 'K' },
  // { key: 'L' },
]; 

const imageWidth = Dimensions.get("window").width / 3 - 30;
const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};

const numColumns = 3;
export default class FlatListGrid extends React.Component {

  constructor(props) {
    super(props); 
  }

  renderItem = ({ item, index }) => {   
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View
        style={styles.item}
      >
      <TouchableHighlight onPress={() => this.props.navigation.navigate('OpenWebView',{itemUrl:item.clickUrl})}>
        <Image
          source={{
            uri: item.imageUrl,
          }}
          style={{ width: imageWidth, height: imageWidth, margin: 10, marginBottom: 0, borderWidth:1, borderColor:"#C3C3E5", borderRadius: 20 }}
        />
        </TouchableHighlight>
        <Text>{item.title}</Text>
      </View>
    );
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('topTitle', 'A Nested Details Screen'),
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
        data={formatData(navigation.getParam('gridData',[]), numColumns)}
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
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});