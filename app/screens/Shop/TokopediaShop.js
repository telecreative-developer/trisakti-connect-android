import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import { Container, Content, Header, Left, Body, Right, Button, Icon, Tab, Tabs, TabHeading } from 'native-base'
import headerlogo from '../../assets/images/logoheader.png'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ImageFood from '../../assets/images/cover/1.png'
import ImageWanita from '../../assets/images/cover/2.png'
import ImagePria from '../../assets/images/cover/3.png'
import ImageElektronik from '../../assets/images/cover/4.png'
import IconWomen from '../../assets/images/icon/women.png'
import IconMen from '../../assets/images/icon/men.png'

class TokopediaShop extends React.Component {

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
        <Tabs>
          <Tab style={{backgroundColor: "#efefef"}} heading={ <TabHeading style={{backgroundColor: "#2989d8"}}><MaterialCommunityIcons name="shopping" style={{fontSize: 16, color: '#fff'}}/><Text style={{color:'#fff'}}> Beli</Text></TabHeading>}>
            <Content>
            <View style={{backgroundColor: '#fff'}}>
              <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 16, paddingTop:10, paddingBottom: 10}}>Kategori Favorite</Text>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <View style={{flex: 0.5}}>
                      <ImageBackground source={ImageFood} style={{width: '100%', height: 65, paddingRight: 10, borderRadius: 50}}>
                        <View style={styles.overlay}/>
                        <View style={{flexDirection: 'row'}}>
                          <View style={{flex: 0.8}}>
                            <Text style={{color: '#fff', fontWeight: 'bold', paddingTop: 20, paddingLeft: 20, maxWidth: 110}}>MAKANAN</Text>
                          </View>
                          <View style={{flex:0.2}}>
                            <Feather name="chevron-right" style={{paddingTop: 16, fontSize: 24, color: '#fff', alignSelf: 'flex-end', paddingRight: 5}}/>
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                    <View style={{flex: 0.5}}>
                      <ImageBackground source={ImageWanita} style={{width: '100%', height: 65, paddingRight: 5, borderRadius: 50}}>
                        <View style={styles.overlay}/>
                        <View style={{flexDirection: 'row'}}>
                          <View style={{flex: 0.8}}>
                            <Text style={{color: '#fff', fontWeight: 'bold', paddingTop: 20, paddingLeft: 20, maxWidth: 110}}>FASHION PRIA</Text>
                          </View>
                          <View style={{flex:0.2}}>
                            <Feather name="chevron-right" style={{paddingTop: 16, fontSize: 24, color: '#fff', alignSelf: 'flex-end', paddingRight: 5}}/>
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <View style={{flex: 0.5}}>
                      <ImageBackground source={ImageWanita} style={{width: '100%', height: 65, paddingRight: 10, borderRadius: 50}}>
                        <View style={styles.overlay}/>
                        <View style={{flexDirection: 'row'}}>
                          <View style={{flex: 0.8}}>
                            <Text style={{color: '#fff', fontWeight: 'bold', paddingTop: 20, paddingLeft: 20, maxWidth: 110}}>FASHION WANITA</Text>
                          </View>
                          <View style={{flex:0.2}}>
                            <Feather name="chevron-right" style={{paddingTop: 16, fontSize: 24, color: '#fff', alignSelf: 'flex-end', paddingRight: 5}}/>
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                    <View style={{flex: 0.5}}>
                      <ImageBackground source={ImageElektronik} style={{width: '100%', height: 65, paddingRight: 5, borderRadius: 50}}>
                        <View style={styles.overlay}/>
                        <View style={{flexDirection: 'row'}}>
                          <View style={{flex: 0.8}}>
                            <Text style={{color: '#fff', fontWeight: 'bold', paddingTop: 20, paddingLeft: 20, maxWidth: 110}}>ELEKTRONIK</Text>
                          </View>
                          <View style={{flex:0.2}}>
                            <Feather name="chevron-right" style={{paddingTop: 16, fontSize: 24, color: '#fff', alignSelf: 'flex-end', paddingRight: 5}}/>
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  </View>
              </View>
            </View>
            <View style={{backgroundColor: '#fff', marginTop: 10, paddingBottom: 5}}>
              <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Belanja di Trisakti Connect</Text>
                <View style={{paddingTop: 10, flexDirection: 'row'}}>
                  <View style={{flex: 0.5}}> 
                    <View style={{flexDirection: 'row'}}>
                      <View style={{flex: 0.2}}>
                        <Image source={IconWomen} style={{width: 30, height: 30}}/>
                      </View>
                      <View style={{flex: 0.8}}>
                        <Text style={{paddingTop: 5}}>Fashion Wanita</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{flex: 0.5}}> 
                    <View style={{flexDirection: 'row'}}>
                      <View style={{flex: 0.2}}>
                        <Image source={IconMen} style={{width: 30, height: 30}}/>
                      </View>
                      <View style={{flex: 0.8}}>
                        <Text style={{paddingTop: 5}}>Fashion Pria</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            </Content>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: "#2989d8"}}><MaterialCommunityIcons name="store" style={{fontSize: 16, color: '#fff'}}/><Text style={{color:'#fff'}}> Jual</Text></TabHeading>}>
            <Text>Tab3</Text>
          </Tab>
        </Tabs>
        
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

export default TokopediaShop