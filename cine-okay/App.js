import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './Home'
import CineListaScreen from './CineLista'
import CineInfoScreen from './CineInfo'
import FilmeListaScreen from './FilmeLista'
import FilmeInfoScreen from './FilmeInfo'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  CineLista: {screen: CineListaScreen},
  CineInfo: {screen: CineInfoScreen},
  FilmeLista: {screen: FilmeListaScreen},
  FilmeInfo: {screen: FilmeInfoScreen},

});
 
const App = createAppContainer(MainNavigator);
export default App;