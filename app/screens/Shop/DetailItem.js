import React from 'react'
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native'
import { Container, Text, Content, Thumbnail, Button, Input, Item, Footer } from 'native-base'
import Feather from 'react-native-vector-icons/dist/Feather'
import Communications from 'react-native-communications'
const { width, height } = Dimensions.get('window')
const dataBarang = [
  {
    cover: 'https://ae01.alicdn.com/kf/HTB1ZsZwLFXXXXcwXXXXq6xXFXXXo/Elegant-Women-Fashion-Career-White-Cotton-Shirts-Size-S-2XL-Classic-Button-Design-Office-Lady-Casual.jpg_640x640.jpg',
  },
  {
    cover: 'https://cdn.shopify.com/s/files/1/0849/2944/products/product-image-546361023.jpg?v=1516247314',
  },
  {
    cover: 'https://s1.thcdn.com/productimg/600/600/11297655-4174419799940535.jpg',
  },
]


class DetailItem extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        jumlahBarang: '1',
        hargaAsli: '100000',
        totalHarga: '100000'
      };
  }

  plusBarang(){
    this.setState({
      jumlahBarang: JSON.stringify(parseInt(this.state.jumlahBarang) + 1 ),
      totalHarga: JSON.stringify(parseInt(this.state.hargaAsli) * (parseInt(this.state.jumlahBarang) + 1))
    })
  }

  minusBarang(){
    this.setState({
      jumlahBarang: JSON.stringify(parseInt(this.state.jumlahBarang) - 1),
      totalHarga: JSON.stringify(parseInt(this.state.hargaAsli) * (parseInt(this.state.jumlahBarang) - 1))
    })
  }

  render() { 
    return (
      <Container>
        <Content showsVerticalScrollIndicator = { false } >
          <FlatList 
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data = {dataBarang}
              renderItem = {({item}) => (
                <Image source={{uri: item.cover}} style={styles.image}/>
              )}
              keyExtractor={( item, index ) => index}
            />
          <View style={styles.viewMargin}>
            <Text>Baju Pakaian Atasan Wanita Randoz</Text>
            <Text note><Feather name="calendar" style={styles.iconDateLocation}/> 21 April 2018</Text>
            <Text style={styles.textPrice}>Rp{this.state.totalHarga}</Text>              
            <Text note>Stok terbatas! Tersisa 10 lagi!</Text>
            <Text note>Masukkan jumlah yang diinginkan</Text>
            <Item style={styles.item}>
              <Button style={styles.button} onPress={()=> this.minusBarang()}>
                <Feather name="minus" style={styles.icon}/>
              </Button>
              <Input 
                placeholder="Jumlah barang" 
                keyboardType="numeric"
                value={this.state.jumlahBarang}
              />
              <Button style={styles.button} onPress={()=> this.plusBarang()}>
                <Feather name="plus" style={styles.icon}/>
              </Button>
            </Item>
            <Text style={styles.textTitle}>Deskpsi Barang</Text> 
            <View style={styles.DetailProduct}>
              <Text style={styles.textDetail}>
                Baju Pakaian Atasan Wanita Raindoz Barang BEST SELLER Stok Terbatas!! Mohon untuk menanyakan ketersediaan BARANG 
                Baju Pakaian Atasan Wanita Raindoz Barang BEST SELLER Stok Terbatas!! Mohon untuk menanyakan ketersediaan BARANG 
                Baju Pakaian Atasan Wanita Raindoz Barang BEST SELLER Stok Terbatas!! Mohon untuk menanyakan ketersediaan BARANG 
              </Text> 
            </View>
            <View>
              <Text style={styles.textTitle}>Nama Penjual</Text> 
              <View style={styles.headerCard}>
                <Thumbnail source={{uri: "https://avatars0.githubusercontent.com/u/20592984?s=460&v=4"}} />
                <View style={styles.nameCard}>
                  <Text>Rendi Simamora</Text>
                  <Text note>Teknik Informatika</Text>
                </View>
              </View>
            </View>
        </View>
      </Content>
      <Button full onPress={() => Communications.phonecall('081220764407', true)}>
        <Text style={styles.textButton}>Hubungi Penjual</Text>
      </Button>
    </Container>
    )
  }
}
 
const styles = StyleSheet.create({
  viewMargin:{
    margin: 10
  },
  textTitle:{
    fontWeight:'bold', 
    fontSize: 16,
    marginTop: 20
  },
  image:{
    height: 300, 
    width: width
  },
  headerCard:{
    flexDirection:'row', 
    margin:10,
    marginRight: 30
  },
  nameCard:{
    flexDirection:'column',    
    marginLeft: 10,
    marginTop: 10
  },
  textAddress:{
    fontSize: 14, 
    marginTop: 10,
  },
  textPrice:{
    color: '#59a8e5',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  button:{
    height: 40,
    backgroundColor: '#59a8e5',
  },
  item:{
    marginTop:10
  },
  textDetail:{
    fontSize: 12
  },
  icon:{
    padding: 10, 
    color:'#fff'
  },
  DetailProduct:{
    marginTop: 10
  },
  textButton:{
    color: '#fff'
  }
})

export default DetailItem