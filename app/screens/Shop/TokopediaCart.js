import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native'
import { Container, Content, Header, Left, Body, Right, Button } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import headerlogo from '../../assets/images/logoheader.png'
import imageCart from '../../assets/images/icon/bag.png'

class TokopediaCart extends React.Component {

  render() {
    return (
      <Container>
        <Header hasTabs style={styles.header}>
          <Left style={styles.left}>
            <Image source={headerlogo} style={{ height: 15, width: 180}} />
          </Left>
          <Body/>
          <Right>
            <TouchableOpacity>
              <Feather name="shopping-cart" style={{fontSize: 20, color: '#fff'}}/>
            </TouchableOpacity>
          </Right>
        </Header>
        <StatusBar
          backgroundColor="#1f7fce"
          barStyle="light-content"
        />
        <View style={{padding: 10}}>
          <View style={{alignSelf: 'center', paddingTop: 20}}>
            <Image source={imageCart} style={{alignSelf: 'center', width: 100, height: 100}}/>
            <View style={{paddingTop: 10, alignItems: 'center'}}>
              <Text>Ayo segera belanja</Text>
              <Text>Dan temukan barang yang anda suka</Text>
              <View style={{paddingTop: 10}}>
                <Button style={{height: 40, alignSelf: 'center', backgroundColor: '#2989d8'}}>
                  <Text style={{padding: 10, color: '#fff'}}>MULAI BELANJA</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
        
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#2989d8',
    
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: 0.3,
    width: '100%',
  }
})

export default TokopediaCart