import * as React from 'react';
import { Text, View, Image, StyleSheet, Button, Linking} from 'react-native';
import {AppRegistry} from 'react-native';
 
export default class ContactDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Filmes',
  };
 
  constructor(props) {
    super(props);
    let filme = props.navigation.getParam('filme');
    this.state = {
      nome: filme.nome,
      imagem: filme.imagem,
      sinopse: filme.sinopse,
      duracao: filme.duracao,
      diretor: filme.diretor,
      elenco: filme.elenco,
      classificacao: filme.classificacao,
      horarios: filme.horarios,
      trailer: filme.trailer
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const { nome, imagem, sinopse, duracao, diretor, elenco, classificacao, horarios, trailer} = this.state;
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.filmeNome}>{nome}</Text>
          <Image source={{uri: imagem}}
                 style={{width: 100, height: 150}} />
          <Text style={styles.filmeSinopse}><Text style={{fontWeight: "bold"}}>Sinopse: </Text>{sinopse}</Text>
          <Text style={styles.filmeDetalhes}><Text style={{fontWeight: "bold"}}>Duracao: </Text>{duracao}</Text>
          <Text style={styles.filmeDetalhes}><Text style={{fontWeight: "bold"}}>Diretor: </Text>{diretor}</Text>
          <Text style={styles.filmeDetalhes}><Text style={{fontWeight: "bold"}}>Elenco: </Text>{elenco}</Text>
          <Text style={styles.filmeDetalhes}><Text style={{fontWeight: "bold"}}>Classificacao: </Text>{classificacao}</Text>
          <Text style={styles.filmeDetalhes}><Text style={{fontWeight: "bold"}}>Horarios: </Text>{horarios}</Text>
        </View>
        <View style={styles.button} >
        <Button onPress={() => Linking.openURL(`${trailer}`) }
          title="Assistir Trailer" color="#000000"/>
        </View>
        <View style={styles.button} >
          <Button title="Voltar" color="#000000" onPress={() => navigate('FilmeLista')} />
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    padding: 15, 
  },
  filmeNome: {
    fontSize: 18,
    fontWeight: 'bold',
    height: 44,
  },
  filmeDetalhes: {
    fontSize: 13,
  },
  filmeSinopse: {
    fontSize: 13
  },

  logo: {
    width: 25,
    height:30,
  },

  button: {
    padding: 15
  }
});

