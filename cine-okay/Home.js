import * as React from 'react';
import { View, Text, Image, Button, BackHandler, StyleSheet } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <View style={styles.container}>
          <Image source={{uri:'https://images.vexels.com/media/users/3/208221/isolated/lists/e2df691b4e7b40cb3f919b366e8a610f-film-clapperboard-black.png'}}
                 style={{width: 180, height: 180}} />
          <Text style={styles.title} > Cine Okay </Text>
          <Text style={styles.container} >Bem vindo ao App!</Text>
        </View>
        <View style={styles.button}>
          <Button title="Nossos Cinemas" color="#000000"  onPress={() => navigate('CineLista')} />
        </View>
        <View style={styles.button}>
          <Button title="Sair" color="#000000" onPress={() => BackHandler.exitApp() } />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    height: 160,
    width: 160,
  },
  title: {
    padding: 30,
    fontSize: 30,
  },
  button: {
    padding: 15
  }
});