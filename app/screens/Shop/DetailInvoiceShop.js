import React from 'react'
import { View, Image, BackHandler, StyleSheet } from 'react-native'
import { Container, Text, Header, Left, Body, Right, Content, Button } from 'native-base'
import Communications from 'react-native-communications'
import headerlogo from '../../assets/images/logoheader.png'
import shopping_bag from '../../assets/images/shopping-bag.png'

class DetailInvoiceShop extends React.Component {
  
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
      <Container style={styles.container}>
        <Header style={styles.header}>
					<Left>
						<Image source={headerlogo} style={styles.logo} />
					</Left>
					<Right/>
				</Header>
        <Content showsVerticalScrollIndicator={false}>
          <View style={styles.viewAvatar}>
            <View style={styles.flexOnly1}>
              <Image source={{uri: "https://avatars0.githubusercontent.com/u/20592984?s=460&v=4"}} style={styles.imageAvatar}/>
            </View>
            <View style={styles.flexOnly9}>
              <View style={{paddingLeft: 20, paddingTop: 5}}>
                <Text style={styles.txtTitle}>Rendi Simamora</Text>
                <Text note style={{fontSize: 12}}>Teknik Informatika</Text>
              </View>
            </View>
          </View>
          <View style={{paddingLeft: 10, paddingRight: 10}}>
            <View style={{marginTop: 10, paddingTop: 10, borderTopWidth: 1, borderColor: '#ccc'}}>
              <Text style={styles.txtTitle}>Detail Pemesanan</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.flexOnly8}>
                  <Text style={styles.txtDate}>Minggu 24 Januari 2018</Text>
                </View>
                <View style={styles.flexOnly2}>
                  <Image source={shopping_bag} style={styles.imageShop}/>
                </View>
              </View>
            </View>
          </View>
          <View style={{paddingLeft: 10, paddingRight: 10}}>
            <View style={styles.viewTable}>
              <View style={styles.flexOnly2}>
                <Text style={styles.txtHeaderTable}>Jumlah</Text>
              </View>
              <View style={styles.flexOnly4}>
                <Text style={styles.txtHeaderTable}>Nama</Text>
              </View>
              <View style={styles.flexOnly4}>
                <Text style={styles.txtHeaderTable}>Total</Text>
              </View>
            </View>
            <View style={styles.viewContentTable}>
              <View style={{flex:0.2, borderRightWidth: 1, borderLeftWidth: 1, borderColor: '#ccc' }}>
                <Text style={styles.txtContentTable}>1</Text>
              </View>
              <View style={{flex:0.4, borderRightWidth: 1, borderColor: '#ccc' }}>
                <Text style={styles.txtContentTable}>Lenovo Thinkpad X1 Carbon</Text>
              </View>
              <View style={{flex:0.4, borderRightWidth: 1, borderColor: '#ccc'}}>
                <Text style={styles.txtContentTable}>Rp. 18.750.000</Text>
              </View>
            </View>
          </View>
          <View style={styles.viewTotalPembayaran}>
            <View style={styles.viewSubTotalPembayaran}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.flexOnly5}>
                  <Text style={styles.txtTitle}>Total Pembayaran</Text>
                </View>
                <View style={styles.flexOnly5}>
                  <Text style={styles.txtTotalPembayaran}>Rp. 18.750.000</Text>
                </View>
              </View>
            </View>
          </View>
        </Content>
        <Button full onPress={() => Communications.phonecall("12312", true)} style={styles.button}>
          <Text style={styles.textButton}>Hubungi Pemesan</Text>
        </Button>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff'
  },
  header:{
    backgroundColor: '#2989d8'
  },
  imageAvatar:{
    width: 50, 
    height: 50, 
    borderRadius: 25
  },
  logo:{
    height: 15, 
    width: 180
  },
  flexOnly1:{
    flex: 0.1
  },
  flexOnly2:{
    flex:0.2
  },
  flexOnly4:{
    flex:0.4
  },
  flexOnly5:{
    flex: 0.5
  },
  flexOnly8:{
    flex: 0.8
  },
  flexOnly9:{
    flex: 0.9
  },
  imageShop:{
    width: 40, 
    height: 40, 
    bottom: 15, 
    alignSelf: 'flex-end'
  },
  txtTitle:{
    fontWeight: 'bold', 
    fontSize: 14
  },
  txtDate:{
    fontSize: 14, 
    color: '#2989d8'
  },
  txtHeaderTable:{
    color: '#fff', 
    textAlign: 'center'
  },
  txtContentTable:{
    paddingTop: 10, 
    paddingBottom: 10, 
    textAlign: 'center', 
    fontSize: 14
  },
  textButton: {
    color: '#fff'
  },
  viewContentTable:{
    flexDirection: 'row', 
    borderBottomWidth: 1, 
    borderColor: '#ccc'
  },
  viewAvatar:{
    flexDirection: 'row', 
    paddingTop: 15, 
    paddingLeft: 10, 
    paddingRight: 10 
  },
  viewTable:{
    flexDirection: 'row', 
    backgroundColor: '#2989d8', 
    paddingTop: 5, 
    paddingBottom: 10
  },
  viewTotalPembayaran:{
    paddingLeft: 10, 
    paddingRight: 10
  },
  viewSubTotalPembayaran:{
    marginTop: 10, 
    paddingTop: 10, 
    paddingBottom: 10, 
    borderBottomWidth: 1, 
    borderColor: '#ccc'
  },
  txtTotalPembayaran:{
    alignSelf: 'flex-end', 
    fontSize: 14
  },
  button:{
    backgroundColor: '#2989d8'
  }
})

export default DetailInvoiceShop
