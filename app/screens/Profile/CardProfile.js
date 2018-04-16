import React, { Component } from 'react'
import QRCode from 'react-native-qrcode'
import { Container, Content, Button, Text, Card, Thumbnail, Icon, Left, Header, Body, Title, Right, Footer } from 'native-base'
import { StyleSheet, View, BackHandler, Image, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import ThemeContainer from '../ThemeContainer'
import { setLinkNavigate } from '../../actions/processor'
import trisaktiConnectLogo from '../../assets/images/logo-membership.png'
import moment from 'moment'
import card from '../../assets/images/member-card.png'
import Modal from 'react-native-modal'

const { width, height } = Dimensions.get('window')

class CardProfile extends Component {
  constructor() {
    super()

    this.state = {
      isModalCode: false
    }
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.handleBack()
    })
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress')
  }

  async handleBack() {
    await this.props.navigation.goBack()
    await this.props.setLinkNavigate({navigate: '', data: ''})
  }

  render() {
    const { dataUser } = this.props
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.handleBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body />
        </Header>
          {/* <View style={styles.viewQrCode}>
            <QRCode
              value={`${dataUser.nim}`}
              size={150} />
          </View> */}
        {/* <View style={{margin: 10, alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.dataNumeric}>{dataUser.nim}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.viewDescription}>
            <View style={styles.label}>
              <Text style={styles.dataName}>{dataUser.name}</Text>
            </View>
            <View style={styles.label}>
              <Text style={styles.dataStyle}>{dataUser.phone}</Text>
            </View>
            <View style={styles.label}>
              <Text style={styles.dataEmail}>{dataUser.email}</Text>
            </View>
            <View style={styles.label}>
              <Text style={styles.dataAddress}>{dataUser.address}</Text>
            </View>
          </View>
        </View> */}
        <Modal 
          isVisible = {this.state.isModalCode} style={styles.modal}
        	onBackButtonPress={() => this.setState({ isModalCode: false })}
          onBackdropPress={() => this.setState({ isModalCode: false })}>
          <View style={styles.modalContent}>
            <QRCode
              value={`${dataUser.nim}`}
              size={150} />
          </View>
        </Modal>
        <View style={styles.contentView}>
          <Text style={styles.nim}>{dataUser.nim}</Text>
          <Text style={styles.name}>{dataUser.name}</Text>
          <Text style={styles.phone}>{dataUser.phone}</Text>
          <Text style={styles.email}>{dataUser.email}</Text>
          <Text style={styles.address}>{dataUser.address}</Text>
        </View>
        <View style={styles.cardView}>
          <Image source={card} style={styles.cardImage}/> 
        </View>
        <Footer style={styles.footer}>
          <Button full style={styles.button} onPress={() => this.setState({isModalCode: true})}>
            <Text>QR Code</Text>
          </Button>
        </Footer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataUser: state.dataUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLinkNavigate: (navigate) => dispatch(setLinkNavigate(navigate))
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  viewDescription: {
    flex: 1,
    margin: 20,
    alignItems: 'flex-start'
  },
  viewImageLogo: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  imageLogo: {
    height: 45,
    width: '84%'
  },
  cardImage: {
    width: 400,
    height: 400,
    marginTop: 20,
    position: 'absolute',
    zIndex: 0
  },
  label: {
    marginBottom: 10
  },
  viewQrCode: {
    flex: 1,
    margin: 20,
    alignItems: 'flex-start'
  },
  dataNumeric: {
    fontFamily: 'Orbitron',
    lineHeight: 30,
  },
  dataName: {
    fontFamily: 'Quantico',
    fontSize: 14,
    fontWeight: 'bold'
  },
  dataEmail: {
    fontFamily: 'Quantico',
    fontSize: 12,
    color: '#3366ff'
  },
  dataAddress: {
    fontFamily: 'Quantico',
    fontSize: 12,
    color: '#a3a3c2'
  },
  dataStyle: {
    fontFamily: 'Quantico',
    fontSize: 12
  },
  cardView: {
    alignItems: 'center',
    flex: 1
  },
  footer: {
    height: height / 12,
  },
  button: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  nim: {
    fontSize: 14,
    textAlign: 'right',
    fontFamily: 'Orbitron',
    color: '#fff',
  },
  name: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  },
  email: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  },
  address: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  },
  contentView: {
    position: 'absolute',
    zIndex: 999,
    top: height / 4.4,
    left: width / 10
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 300,
    backgroundColor: '#fff'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ThemeContainer(CardProfile))