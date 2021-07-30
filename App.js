import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class RedButton extends Component{

  

  render(){

    return(
      <Button title="click me " color="red" />
    )
  }
}




export default class App extends Component {
 
 
  render() {
    return (
      <View style={{ marginTop: 200 }}>
      <Button title="click me " color="green" onPress={this.displayAlert}/>
      <RedButton onPress={this.displayAlert}/>
        <Text>My First React component</Text>
      </View>
    );
  }
}
