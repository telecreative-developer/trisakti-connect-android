import React from 'react'
import { View, Image, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'
import { Container, Text,  Form, Item, Input, Icon, Content, Button, Textarea, Picker, Header, Body, Right, Left } from 'native-base'
import ImagePicker from 'react-native-image-picker'
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons'
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons'
const { width, height } = Dimensions.get('window')

class AddShop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1",
      avatarSource: 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
    };
  }
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };
  
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        this.setState({
          avatarSource: source
        });
      }
    });
  }

  render() { 
    return (
      <Container>
        <Header style={styles.header}>
  				<Left style={styles.left}>
  					<Button transparent onPress={() => this.props.navigation.goBack()}>
  						<Icon name='close' style={styles.iconClose}/>
  					</Button>
  				</Left>
  				<Body style={styles.body}>
  					<Text style={styles.textBody}> Jual Barang </Text>
  				</Body>
  				<Right style={styles.right} />
  			</Header>
        <Content>
          <View style={styles.wrapBox}>
            <Form>
              <TouchableHighlight onPress={() => this.selectPhotoTapped()}>
                <Image source={{uri: "https://increasify.com.au/wp-content/uploads/2016/08/default-image.png"}} style={styles.imageBarang} />
              </TouchableHighlight>
              <Item>
                <Input placeholder='Nama Barang'/>
              </Item>
              <View style={styles.flexRow}>
                <View style={styles.viewHarga}>
                  <Item>
                    <Input placeholder="Harga Barang" />
                  </Item>
                </View>
                <View style={styles.viewStock}>
                  <Item>
                    <Input placeholder="Stok" />
                  </Item>
                </View>
              </View>
              <Picker
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={this.state.selected1}
                style={styles.picker}
              >
                  <Picker.Item label="Perlengkapan Pria" value="Perlengkapan Pria" />
                  <Picker.Item label="Perlengkapan Wanita" value="Perlengkapan Wanita" />
                  <Picker.Item label="Aksesoris" value="Aksesoris" />
                  <Picker.Item label="Elektronik" value="Elektronik" />
                  <Picker.Item label="Furniture" value="Furniture" />
                  <Picker.Item label="Makanan" value="Makanan" />
              </Picker>
              <Textarea rowSpan={5} bordered placeholder="Detail Barang" style={styles.textarea}/>
              <Button full style={styles.button}>
                <Text style={styles.textButton}>Jual Barang</Text>
              </Button>
            </Form>
          </View>
        </Content>
      </Container>
    )
  }
}
 
const styles = StyleSheet.create({
  flexRow:{
    flexDirection: 'row'
  },
  header:{
    backgroundColor: '#2989d8'
  },
  iconClose:{
    color: '#fff'
  },
  left:{
    flex:0.2
  },
  body:{
    flex:0.6
  },
  textBody:{
    color:'#fff' ,alignSelf: 'center'
  },
  right:{
    flex:0.2
  },
  viewHarga:{
    flex:0.7
  },
  viewStock:{
    flex:0.3
  },
  imageBarang:{
    width: width,
    height: 200
  },
  wrapBox:{
    paddingTop: 10
  },
  iconSearch:{
    marginLeft: 10
  },
  picker:{
    margin: 10, 
    borderWidth: 1, 
    borderColor: '#ccc'
  },
  textarea:{
    margin: 10
  },
  button:{
    backgroundColor:'#2989d8', 
    margin: 10
  },
  textButton:{
    color: '#fff'
  }
})

export default AddShop