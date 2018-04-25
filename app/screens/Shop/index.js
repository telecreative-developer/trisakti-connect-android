import React from 'react'
import { View, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Container, Text, Item, Input, Icon, Content, Thumbnail, Button } from 'native-base'
import Feather from 'react-native-vector-icons/dist/Feather'
const { width, height } = Dimensions.get('window')
const dataBanner = [
  {
    cover: 'https://klik-eat.com/inc/images/landing/banner.jpg',
  },
  {
    cover: 'http://diskonbuzz.com/admin/images/promo/18299.jpg',
  },
  {
    cover: 'http://www.warungikancakyu.com/uploads/public/55a/38d/e12/55a38de121d39925044479.jpg',
  },
  {
    cover: 'http://maystargroup.com/web/wp-content/uploads/2014/10/logo-promo-ICBC_Jakarta_950.jpg',
  },
]
const dataBarang = [
  {
    owner: 'Rendi Simamora',
    major: 'Teknik Informatika',
    owner: 'Rendi Simamora',
    avatar: 'https://avatars0.githubusercontent.com/u/20592984?s=460&v=4',
    thumbnailBarang : 'http://cdn.elevenia.co.id/g/6/4/5/1/5/8/22645158_B_V2.jpg',
    title: 'Kemeja Pria kemeja cowok pakaian pria',
    desc: 'Baju Pakaian Atasan Wanita Raindoz Barang BEST SELLER Stok Terbatas!! Mohon untuk menanyakan ketersediaan BARANG'
  },
  {
    owner: 'Rendi Simamora',
    major: 'Teknik Informatika',
    owner: 'Rendi Simamora',
    avatar: 'https://avatars0.githubusercontent.com/u/20592984?s=460&v=4',
    thumbnailBarang : 'https://ae01.alicdn.com/kf/HTB1ZsZwLFXXXXcwXXXXq6xXFXXXo/Elegant-Women-Fashion-Career-White-Cotton-Shirts-Size-S-2XL-Classic-Button-Design-Office-Lady-Casual.jpg_640x640.jpg',
    title: 'Kemeja Pria kemeja cowok pakaian pria',
    desc: 'Baju Pakaian Atasan Wanita Raindoz Barang BEST SELLER Stok Terbatas!! Mohon untuk menanyakan ketersediaan BARANG'
  },
  ]

class Shop extends React.Component {
  render() { 
    return (
      <Container>
        <View style={{flexDirection: 'row'}}> 
          <View style={{flex: 0.8}}>
            <Item style={styles.iconSearch}>
              <Icon name='search' /><Input placeholder="Cari Barang" />
            </Item>
          </View>
          <View style={{flex: 0.2}}>
            <Button transparent style={styles.buttonAdd} onPress={() => this.props.navigation.navigate('AddShop')}>
              <Icon name='add' style={styles.iconAdd}/>
            </Button>
          </View>
        </View>
        <Content>
          <FlatList 
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data = {dataBanner}
              renderItem = {({item}) => (
                <Image source={{ uri: item.cover }} style={styles.coverBanner}/>
              )}
              keyExtractor={( item, index ) => index}
            />
          <View style={styles.wrapBox}>
            <View style={styles.contentBox}>
              <TouchableOpacity transparent onPress={() => this.props.navigation.navigate('DetailCategory')}  style={styles.contentShop}>
                <Image source={require("../../assets/images/icon/pria.png")} style={styles.imageIcon}/>
                <Text style={styles.text}>Peralatan Pria</Text>                
              </TouchableOpacity>
              <TouchableOpacity transparent onPress={() => this.props.navigation.navigate('DetailCategory')}  style={styles.contentShop}>
                <Image source={require("../../assets/images/icon/wanita.png")} style={styles.imageIcon}/>
                <Text style={styles.text}>Peralatan Wanita</Text>
              </TouchableOpacity>
              <TouchableOpacity transparent onPress={() => this.props.navigation.navigate('DetailCategory')}  style={styles.contentShop}>
                <Image source={require("../../assets/images/icon/aksesoris.png")} style={styles.imageIcon}/>
                <Text style={styles.text}>Aksesoris</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.contentBox}>
              <TouchableOpacity transparent onPress={() => this.props.navigation.navigate('DetailCategory')}  style={styles.contentShop}>
                <Image source={require("../../assets/images/icon/elektronik.png")} style={styles.imageIcon}/>
                <Text style={styles.text}>Elektronik</Text>
              </TouchableOpacity>
              <TouchableOpacity transparent onPress={() => this.props.navigation.navigate('DetailCategory')}  style={styles.contentShop}>
                <Image source={require("../../assets/images/icon/furniture.png")} style={styles.imageIcon}/>
                <Text style={styles.text}>Furniture</Text>
              </TouchableOpacity>
              <TouchableOpacity transparent onPress={() => this.props.navigation.navigate('DetailCategory')}  style={styles.contentShop}>
                <Image source={require("../../assets/images/icon/makanan.png")} style={styles.imageIcon}/>
                <Text style={styles.text}>Makanan</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{margin: 10}}>
            <Text>Barang Terpopuler</Text>
          </View>
          {dataBarang.map((item, index) => (
            <View style={styles.card}>
              <View style={styles.headerCard}>
                <Thumbnail source={{uri: item.avatar}} />
                <View style={styles.nameCard}>
                  <Text>{item.owner}</Text>
                  <Text note>{item.major}</Text>
                </View>
              </View>
              <View style={styles.viewMargin}>
                <Image source={{uri: item.thumbnailBarang}} style={styles.image}/>
                <View>
                  <Text style={styles.textTitle}>{item.title}</Text>
                  <Text note style={styles.text.date}><Feather name="calendar" style={styles.iconDateLocation}/> 21 April 2018</Text>
                  <Text style={styles.textPrice}>Rp 100.000</Text>  
                  <Text style={styles.textAddress}>{item.desc}</Text>
                  <Button style={styles.button} onPress={() => this.props.navigation.navigate('DetailItem')}>
                    <Text>Beli</Text>
                  </Button>
                </View>
              </View>
            </View>
          ))}
        </Content>
      </Container>
    )
  }
}
 
const styles = StyleSheet.create({
  viewMargin:{
    marginTop: 10
  },
  wrapBox:{
    paddingTop: 10
  },
  iconSearch:{
    marginLeft: 10
  },
  contentShop:{
    flex: 0.33, 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    margin:5,
    paddingBottom:30,
    paddingTop:30,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: '#fff'
  },
  text:{
    marginTop: 10,
    fontSize: 12
  },
  coverBanner:{
    width: 300, 
    height: 150, 
    marginRight: 10
  },
  viewDateLocation:{
    flexDirection: 'row'
  },
  iconDateLocation:{
    padding: 10
  },
  contentBox:{
    flexDirection: 'row', 
    paddingLeft: 5,
    paddingRight: 5
  },
  textTitle:{
    fontWeight:'bold', 
    marginTop: 15,
    fontSize: 16
  },
  date:{
    marginLeft: 20
  },
  textAddress:{
    fontSize: 14, 
    marginTop: 10
  },
  iconAdd:{
    marginTop: 10
  },
  buttonAdd:{
    alignSelf: 'flex-end'
  },
  button:{
    height: 30, 
    marginTop: 10, 
    alignSelf: 'flex-end'
  },
  card:{
    margin: 10,
    backgroundColor: '#fff',
    padding: 20
  },
  headerCard:{
    flexDirection:'row', 
    marginTop: 10
  },
  nameCard:{
    flexDirection:'column', 
    marginLeft: 10, 
    marginTop: 5
  },
  image:{
    height: 200, 
    width: null, 
    flex: 1
  },
  imageIcon:{
    alignSelf: 'center',
    width: 40, 
    height: 40
  },
  textPrice:{
    color: '#59a8e5',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 20
  },
})

export default Shop