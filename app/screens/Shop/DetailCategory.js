import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import { Container, Text, Item, Input, Icon, Content, Thumbnail, Button } from 'native-base'
import Feather from 'react-native-vector-icons/dist/Feather'
const { width, height } = Dimensions.get('window')
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

class DetailCategory extends React.Component {
  render() { 
    return (
      <Container>
        <View style={styles.flexRow}> 
          <View style={styles.viewSearch}>
            <Item style={styles.iconSearch}>
              <Icon name='search' /><Input placeholder="Cari Barang" />
            </Item>
          </View>
          <View style={styles.viewAdd}>
            <Button transparent style={{alignSelf:'flex-end'}} onPress={() => this.props.navigation.navigate('AddShop')}>
              <Icon name='add' style={styles.iconAdd}/>
            </Button>
          </View>
        </View>
        <Content>
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
  flexRow:{
    flexDirection: 'row'
  },
  viewSearch:{
    flex: 0.8
  },
  viewAdd:{
    flex: 0.2
  },
  iconAdd:{
    marginTop: 10
  },
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
    borderWidth: 1, 
    borderColor: '#f8f8f8'
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
  textAddress:{
    fontSize: 14, 
    marginTop: 10
  },
  button:{
    height: 30, 
    marginTop: 10, 
    alignSelf: 'flex-end'
  },
  card:{
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
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
  viewDateLocation:{
    flexDirection: 'row'
  },
  iconDateLocation:{
    padding: 10
  },
  icon:{
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

export default DetailCategory