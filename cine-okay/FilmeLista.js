import * as React from 'react';
import { Text, View, Image, StyleSheet, Button, ActivityIndicator, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native';
 
export default class CineListaScreen extends React.Component {
  static navigationOptions = {
    title: 'Em cartaz',
  };
 
  constructor(props){
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount(){
    const { navigation } = this.props;

    this.focusListener = navigation.addListener('didFocus', () => {
      return fetch('https://api.jsonbin.io/b/60eca037c68da8710308169b/4')
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            isLoading: false,
            filme: json,
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
          data={this.state.filme}
          renderItem={({item}) =>
          <TouchableOpacity onPress={ () => navigate('FilmeInfo', {filme: item})}>
            <View>
              <Text style={styles.filme}>{item.nome}</Text>
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
   padding: 15
  },
  filme: {
    fontSize: 18,
    height: 44,
  }
})
