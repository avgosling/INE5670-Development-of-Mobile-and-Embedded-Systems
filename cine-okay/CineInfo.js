import * as React from 'react';
import { Text, View, Image, StyleSheet, Button, Linking} from 'react-native';
import { Platform } from 'react-native';
 
export default class ContactDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Cinemas',
  };
 
  constructor(props) {
    super(props);
    let cine = props.navigation.getParam('cine');
    this.state = {
      nome: cine.nome,
      telefone: cine.telefone,
      endereco: cine.endereco.resumo,
      lat: cine.endereco.geo.lat,
      lng: cine.endereco.geo.lng,
      valorIngresso: cine.valorIngresso
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const { nome, telefone, endereco, lat, lng, valorIngresso } = this.state;

    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.cineNome}>{nome}</Text>
          <Text style={styles.cineDetalhes}>Telefone: {telefone}</Text>
          <Text style={styles.cineDetalhes}>Endereco: {endereco}</Text>
          <Text style={styles.cineDetalhes}>Ingresso: {valorIngresso}</Text>
        </View>
        <View style={styles.button} >
          <Button title="Filmes em cartaz" color="#000000" onPress={() => navigate('FilmeLista')} />
        </View>           
        <View style={styles.button} >
          <Button title="Voltar" color="#000000" onPress={() => navigate('CineLista')} />
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  cineNome: {
    fontSize: 18,
    fontWeight: 'bold',
    height: 44,
  },
  cineDetalhes: {
    fontSize: 16,
    height: 44,
  },
  button: {
    padding: 15
  }
});

