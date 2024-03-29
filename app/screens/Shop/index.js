import React from 'react'
import { View, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Fab, Container, Text, Item, Input, Icon, Content, Thumbnail, Button } from 'native-base'
import Feather from 'react-native-vector-icons/dist/Feather'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import { connect } from 'react-redux'
import { setLinkNavigate } from '../../actions/processor'
import { fetchShopCategory, fetchAds, fetchShop } from '../../actions/shop'
import defaultAvatar from '../../assets/images/default-user.png'
import moment from 'moment'
import noImageFound from '../../assets/images/online-shop.png'

const { width, height } = Dimensions.get('window')

class Shop extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  componentWillMount() {
    this.props.fetchAds(this.props.session.accessToken)
    this.props.fetchShop(this.props.session.accessToken)
    this.props.fetchShopCategory(this.props.session.accessToken)
  }

  render() {
    return (
      <Container>
        <Content showsVerticalScrollIndicator={false}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.props.ads}
            renderItem={({ item }) => (
              <Image source={{ uri: item.thumbnail }} style={styles.coverBanner} />
            )}
            keyExtractor={(item, index) => index}
          />
          <View style={styles.wrapBox}>
            <View style={styles.contentBox}>
              {this.props.shopCategory.slice(0, 3).map((data, index) => (
                <TouchableOpacity
                  key={index}
                  transparent
                  onPress={() =>
                    this.props.setLinkNavigate({ navigate: 'DetailCategory', data: data })
                  }
                  style={styles.contentShop}>
                  <Image source={{ uri: data.thumbnail }} style={styles.imageIcon} />
                  <Text style={styles.text}>{data.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.contentBox}>
              {this.props.shopCategory.slice(3, 6).map((data, index) => (
                <TouchableOpacity
                  key={index}
                  transparent
                  onPress={() =>
                    this.props.setLinkNavigate({ navigate: 'DetailCategory', data: data })
                  }
                  style={styles.contentShop}>
                  
                    <Image source={{ uri: data.thumbnail }} style={styles.imageIcon} />
                    <Text style={styles.text}>{data.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        <View style={{backgroundColor: '#f8f8f8', marginTop: 10}}>
          <View style={{ margin: 10 }}>
            <Text>Barang Terpopuler</Text>
          </View>
          {this.props.shop.length ? (
            this.props.shop.map((item, index) => (
              <TouchableOpacity style={styles.card} 
                onPress={() => this.props.setLinkNavigate({ navigate: 'DetailItem', data: item })}>
                <View style={styles.viewMargin}>
                  <Image source={{ uri: item.cover }} style={styles.image} />
                  <View>
                    <Text style={styles.textTitle}>{item.name}</Text>
                    <Text note style={styles.text.date}>
                      <Feather name="calendar" style={styles.iconDateLocation} />{' '}
                      {moment(item.createdAt).format('LL')}
                    </Text>
                    <View style={styles.headerCard}>
                      {item.users[0].avatar ? (
                        <Image source={{ uri: item.users[0].avatar }} style={{width: 30, height: 30, borderRadius: 15}}/>
                      ) : (
                        <Image source={defaultAvatar} style={{width: 30, height: 30, borderRadius: 15}} />
                      )}
                      <View style={styles.nameCard}>
                        <Text>{item.users[0].name}</Text>
                      </View>
                    </View>
                    <Text style={styles.textPrice}>Rp.{item.price}</Text>
                    <Text style={styles.textAddress} numberOfLines={3}>{item.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          )) : (
            <View style={{ margin: 10, backgroundColor: '#fff', padding: 20, borderWidth: 1, borderColor: '#e0e0e0'}}>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <View style={{flex: 0.4}}>
                  <Image source={noImageFound} style={{ width: 100, height: 100 }} />
                </View>
                <View style={{flex: 0.6}}>  
                  <Text style={{ marginTop: 10, fontSize: 15, fontWeight: 'bold' }}>
                    Untuk saat ini barang populer belum tersedia
                  </Text>
                </View>
              </View>
            </View>
          )}
          <View style={{ marginBottom: 100 }} />
        </View>
        </Content>
        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="menu" />
            <Button style={{ backgroundColor: '#2989d8' }} onPress={() => this.props.setLinkNavigate({ navigate: 'AddShop' })}>
              <Entypo name="add-to-list" style={{fontSize: 14, color: '#fff'}}/>
            </Button>
            <Button style={{ backgroundColor: '#2989d8' }} onPress={() => this.props.setLinkNavigate({ navigate: 'ItemShop' })}>
              <Entypo name="shop" style={{fontSize: 14, color: '#fff'}}/>
            </Button>
            <Button style={{ backgroundColor: '#2989d8' }} onPress={() => this.props.setLinkNavigate({ navigate: 'InvoiceShop' })}>
              <Entypo name="news" style={{fontSize: 14, color: '#fff'}}/>
            </Button>
          </Fab>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  session: state.session,
  shop: state.shop,
  ads: state.ads,
  shopCategory: state.shopCategory
})

const mapDispatchToProps = dispatch => ({
  fetchShop: accessToken => dispatch(fetchShop(accessToken)),
  fetchAds: accessToken => dispatch(fetchAds(accessToken)),
  fetchShopCategory: accessToken => dispatch(fetchShopCategory(accessToken)),
  setLinkNavigate: data => dispatch(setLinkNavigate(data))
})

const styles = StyleSheet.create({
  viewMargin: {
    marginTop: 10
  },
  wrapBox: {
    paddingTop: 10
  },
  iconSearch: {
    marginLeft: 10
  },
  contentShop: {
    flex: 0.33,
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 5,
    paddingBottom: 30,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    borderWidth: 1, borderColor: '#e0e0e0',
    borderRadius: 5,
  },
  text: {
    marginTop: 10,
    fontSize: 12
  },
  coverBanner: {
    width: 300,
    height: 150,
    marginRight: 10
  },
  viewDateLocation: {
    flexDirection: 'row'
  },
  iconDateLocation: {
    padding: 10
  },
  contentBox: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10
  },
  textTitle: {
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 16
  },
  date: {
    marginLeft: 20
  },
  textAddress: {
    fontSize: 14,
    marginTop: 10
  },
  iconAdd: {
    marginTop: 10
  },
  buttonAdd: {
    alignSelf: 'flex-end'
  },
  button: {
    height: 30,
    marginTop: 10,
    alignSelf: 'flex-end'
  },
  card: {
    margin: 10,
    borderRadius: 5,
    borderColor: '#f8f8f8',
    borderWidth: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  headerCard: {
    flexDirection: 'row',
    marginTop: 10
  },
  nameCard: {
    flexDirection: 'column',
    marginLeft: 10,
    marginTop: 5
  },
  image: {
    height: 200,
    width: null,
    flex: 1
  },
  imageIcon: {
    alignSelf: 'center',
    width: 40,
    height: 40
  },
  textPrice: {
    color: '#59a8e5',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 20
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
