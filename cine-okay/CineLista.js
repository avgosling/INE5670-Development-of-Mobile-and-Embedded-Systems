import * as React from 'react';
import { Text, View, Image, StyleSheet, Button, ActivityIndicator, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
 
export default class CineListaScreen extends React.Component {
  static navigationOptions = {
    title: 'Cinemas',
  };
 
  constructor(props){
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount(){
    const { navigation } = this.props;

    this.focusListener = navigation.addListener('didFocus', () => {
      return fetch('https://api.jsonbin.io/b/60eca10cf72d2b70bbae8c30')
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            isLoading: false,
            cines: json,
          }, function(){
          });
        })
        .catch((error) =>{
          console.error(error);
        });
    });
  }
 
  componentWillUnmount() {
    this.focusListener.remove();
  } 
 
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
 
    const {navigate} = this.props.navigation;
    return(
      <ScrollView style={styles.container}>
        <FlatList
          data={this.state.cines}
          renderItem={({item}) =>
          <TouchableOpacity onPress={ () => navigate('CineInfo', {cine: item})}>
            <View>
              <Text style={styles.cineNomes}>{item.nome}</Text>
            </View>
          </TouchableOpacity>}
        />
        <Button title="Voltar" color="#000000" onPress={() => navigate('Home')} />
        </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
   padding: 40
  },
  cineNomes: {
    fontSize: 23,
    height: 60,
    padding: 5
  }
})