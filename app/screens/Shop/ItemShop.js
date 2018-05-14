import React from 'react'
import { View, Image, Text, StyleSheet, BackHandler, FlatList, Alert, ToastAndroid } from 'react-native'
import { Header, Left, Body, Right, Icon, Button, Container, Content } from 'native-base'
import moment from 'moment'
import { fetchMyShop, deleteMyShop } from '../../actions/shop'
import { setLinkNavigate } from '../../actions/processor'
import { connect } from 'react-redux'
import headerlogo from '../../assets/images/logoheader.png'
import noImageFound from '../../assets/images/myitems.png'

class ItemShop extends React.Component {
  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchMyShop(this.props.session.id, this.props.session.accessToken)
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
    this.props.setLinkNavigate({navigate: '', data: ''})
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillReceiveProps(previousProps){
    if(previousProps.success.condition && previousProps.success.process_on === 'delete_my_shop'){
      ToastAndroid.show("Berhasil hapus item", ToastAndroid.SHORT)
    }
  }

  handleBackButtonClick() {
      this.props.navigation.goBack();
      return true;
  }

  handleDelete(){
    Alert.alert(
      'Hapus Item',
      'Apakah anda yakin ingin menghapusnya? ',
      [
        {text: 'Cancel'},
        {text: 'OK', onPress: () => this.props.deleteMyShop(this.props.session.id, this.props.session.accessToken)},
      ],
      { cancelable: false }
    )
  }
  
  backPressed = () => {
    this.props.setLinkNavigate({ link: '', data: '' })
    this.props.navigation.goBack()
    return true
  }
  
  render() { 
    return (
      <Container>
        <Header style={styles.header}>
          <Left style={styles.left}>
            <Button transparent onPress={this.backPressed}>
              <Icon name="close" style={styles.iconClose} />
            </Button>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.textBody}> Item </Text>
          </Body>
          <Right style={styles.right} />
        </Header>
        {this.props.myShop.length ? (
        <Content>
          <View style={{marginLeft: 10, marginRight: 10, marginTop: 10}}>
            <FlatList
              data={this.props.myShop}
              renderItem={({item}) => (
                <View style={{flexDirection: 'row', padding: 10, backgroundColor: '#fff'}}>
                  <View style={{flex: 0.3}}>
                    <Image 
                      source={{uri: item.cover}}
                      style={{width: '100%', height: 100}}
                      />
                  </View>
                  <View style={{flex: 0.5}}>
                    <View style={{paddingLeft: 10}}>
                      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
                      <Text note>
                        {moment(item.createdAt).format('YYYY-MM-DD')}
                      </Text>
                      {item.status ? (
                        <View style={styles.badgeCategoryApprove}>
                          <Text note style={styles.badgeTextCategory}>Approve</Text>
                        </View>
                      ):(
                        <View style={styles.badgeCategoryPending}>
                          <Text note style={styles.badgeTextCategory}>Pending</Text>
                        </View>
                      )}
                    </View>
                  </View>
                  <View style={{flex: 0.2}}>
                    <Button transparent style={{alignSelf: 'flex-end'}} onPress={() => this.handleDelete()}><Icon name="close"/></Button>
                  </View>
                </View>
              )}
            />
          </View>
        </Content>
        ): (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
          <Image source={noImageFound} style={{ width: 200, height: 200 }} />
            <Text style={{ marginTop: 10, fontSize: 15, fontWeight: 'bold' }}>
              Anda belum memiliki barang yang dipublish
            </Text>
          </View>
        )}
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
    flex: 0.2
  },
  body: {
    flex: 0.6
  },
  textBody: {
    color: '#fff',
    alignSelf: 'center'
  },
  right: {
    flex: 0.2
  },
	badgeCategoryApprove: {
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor:'#1ABC9C',
		width: 100,
		height: 25,
		borderRadius: 3
  },
  badgeCategoryPending: {
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor:'#c40f42',
		width: 100,
		height: 25,
		borderRadius: 3
  },
	badgeTextCategory: {
		color: '#ffffff'
	},
})

const mapStateToProps = (state) => {
  return{
    session: state.session,
    success: state.success,
    myShop: state.myShop
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMyShop: (id, accessToken) => dispatch(deleteMyShop(id, accessToken)),
    fetchMyShop: (id, accessToken) => dispatch(fetchMyShop(id, accessToken)),
    setLinkNavigate: (navigate) => dispatch(setLinkNavigate(navigate))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemShop)