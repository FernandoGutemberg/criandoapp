import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component{
  render(){

    let nome = 'Fernando';

    return(
      <View>
        <Text>Olá mundo</Text>
        <Text>Meu Primeiro Projeto</Text>
        <Text style={{ color: '#FF0000', fontSize: 25, margin: 15}}>
          Sujeito Programador
        </Text>

        <Text style={{ fontSize: 30}}> {nome} </Text> 

        <Jobs largura={200} altura={500} fulano="Steve Jobs" />

      </View>
    );
  }
}

export default App;

class Jobs extends Component{
  render(){

    let img = 'https://sujeitoprogramador.com/steve.png'

    return(
      <View>
        <Image
        source={{ uri: img }}
        style={{ width: this.props.largura, height: this.props.altura }}
        />
        <Text>{this.props.fulano}</Text>

      </View>
   
      
    );
  }
}

