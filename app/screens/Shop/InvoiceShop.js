import React from 'react'
import { View, Image, BackHandler, StyleSheet, TouchableOpacity } from 'react-native'
import { Container, Text, Header, Left, Body, Right, Content, Button, Icon } from 'native-base'
import headerlogo from '../../assets/images/logoheader.png'
import shopping_bag from '../../assets/images/shopping-bag.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const dataInvoice = [
  {
    name: 'Mark Zuckerberg',
    namaBarang: "Lenovo Thinkpad X1 Carbon Lenovo Thinkpad X1 Carbon Lenovo Thinkpad X1 Carbon Lenovo Thinkpad X1 Carbon",
    avatar: 'https://specials-images.forbesimg.com/imageserve/59d5062131358e542c034eb7/416x416.jpg?background=000000&cropX1=419&cropX2=1409&cropY1=53&cropY2=1044',
    date: '28 Mei 2018'
  },
  {
    name: 'Steve Jobs',
    namaBarang: "Lenovo Thinkpad X1 Carbon Lenovo Thinkpad X1 Carbon Lenovo Thinkpad X1 Carbon Lenovo Thinkpad X1 Carbon",
    avatar: 'http://adoption-alliance.com/wp-content/uploads/2018/01/steve-jobs.jpg',
    date: '26 Mei 2018'
  },
  {
    name: 'Bill Gates',
    namaBarang: "Lenovo Thinkpad X1 Carbon Lenovo Thinkpad X1 Carbon Lenovo Thinkpad X1 Carbon Lenovo Thinkpad X1 Carbon",
    avatar: 'https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg',
    date: '20 Mei 2018'
  },
  {
    name: 'Mark Zuckerberg',
    namaBarang: "Lenovo Thinkpad X1 Carbon Lenovo Thinkpad X1 Carbon Lenovo Thinkpad X1 Carbon Lenovo Thinkpad X1 Carbon",
    avatar: 'https://specials-images.forbesimg.com/imageserve/59d5062131358e542c034eb7/416x416.jpg?background=000000&cropX1=419&cropX2=1409&cropY1=53&cropY2=1044',
    date: '28 Mei 2018'
  },
  {
    name: 'Steve Jobs',
    namaBarang: "Lenovo Thinkpad X1 Carbon Lenovo Thinkpad X1 Carbon Lenovo Thinkpad X1 Carbon Lenovo Thinkpad X1 Carbon",
    avatar: 'http://adoption-alliance.com/wp-content/uploads/2018/01/steve-jobs.jpg',
    date: '26 Mei 2018'
  },
]


class InvoiceShop extends React.Component {
  
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backPressed)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backPressed)
  }

  backPressed = () => {
    this.props.setLinkNavigate({ link: '', data: '' })
    this.props.navigation.goBack()
    return true
  }

  render() {
    return (
      <Container style={{backgroundColor: '#fff'}}>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={this.backPressed}>
              <Icon name="close" style={styles.iconClose} />
            </Button>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.textBody}>Pemesanan Barang</Text>
          </Body>
          <Right style={styles.right} />
        </Header>
        <Content showsVerticalScrollIndicator={false} style={{paddingBottom: 20}}>
          {dataInvoice.map((item, index) => (
            <TouchableOpacity onPress={() => this.props.setLinkNavigate({ navigate: 'DetailInvoiceShopScreen' })}>
              <View style={{flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderColor: '#ccc'}}>
                <View style={{flex: 0.1}}>
                  <Image source={{uri : item.avatar}} style={{width: 50, height: 50, borderRadius: 25}}/>
                </View>
                <View style={{flex: 0.8}}>
                  <View style={{paddingLeft: 20, paddingTop: 5}}>
                    <Text style={{fontWeight: 'bold', fontSize: 14}}>{item.name}</Text>
                    <Text note style={{fontSize: 12}}>{item.date}</Text>
                    <Text note style={{fontSize: 12}} numberOfLines={1}>Ingin Memesan {item.namaBarang}</Text>
                  </View>
                </View>
                <View style={{flex: 0.1}}>
                  <FontAwesome name="angle-right" style={{fontSize: 25, alignSelf: 'flex-end', top: 10}}/>
                </View>
              </View>
            </TouchableOpacity>
          ))
          }
        </Content>
      </Container>
    )
  }
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2989d8'
  },
  iconClose: {
    color: '#fff'
  },
  left: {
    flex: 0.1
  },
  body: {
    flex: 0.8
  },
  textBody: {
    color: '#fff',
  },
  right: {
    flex: 0.1
  },
  textButton: {
    color: '#fff'
  }
})

export default InvoiceShop
