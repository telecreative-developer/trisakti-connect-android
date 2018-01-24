/* @flow */
import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, BackHandler, Alert } from 'react-native'
import { Container, Header, Title, Spinner, Picker, Text, Input, Left, Button, Icon, Body, Right, Content, Form, Item, Label } from 'native-base'
import { connect } from 'react-redux'
import Mailer from 'react-native-mail'
import ThemeContainer from '../screens/ThemeContainer'

type State = {
  subjectStatus: bool,
  subject: string,
  contentreport: string
}

const { width, height } = Dimensions.get('window')

class Report extends Component<{}, State> {
  state = {
    subjectStatus: false,
    subject: '',
    contentreport: ''
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.handleBackButton()
      return true
    })
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress')
  }

  handleBackButton() {
    this.props.navigation.goBack()
  }

  handleSendReport() {
		Alert.alert(
			'Send report',
			'Are you sure to send report?',
			[
				{text: 'Cancel', onPress: () => {}, style: 'cancel'},
				{text: 'Send', onPress: () => this.handleSendReportOk()},
			],
			{ cancelable: false }
		)
	}

	async handleSendReportOk() {
		const { subject, contentreport } = await this.state		
		await Mailer.mail({
      subject: this.state.subject,
      recipients: ['helptrisakticonnect@gmail.com'],
      ccRecipients: [],
      bccRecipients: [],
      body: this.state.contentreport,
      isHTML: true
    }, (error, event) => {})
		await this.setState({subject: '', contentreport: ''})
	}

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.handleBackButton()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Report</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            {(this.state.subjectStatus) ? (
              <Item stackedLabel style={styles.itemSubject}>
                <Label>Subject</Label>
                <Input value={this.state.subject} onChangeText={(subject) => this.setState({subject})} />
              </Item>
            ) : (
              <View style={styles.viewSubject}>
                <Text note style={styles.textSubject}>Subject</Text>
                <Picker
                  mode="dropdown"
                  selectedValue={this.state.subject}
                  onValueChange={(subject) => (subject === 'other') ? this.setState({subject: '', subjectStatus: true}) : this.setState({subject})}>
                  <Item label='I have a problem with my id (NIM)' value='I have a problem with my id (NIM)' />
                  <Item label="My NIM seems right but I can't register my account" value="My NIM seems right but I can't register my account" />
                  <Item label='I found a bug inside this application' value='I found a bug inside this application' />
                  <Item label='Other' value='other' />
                </Picker>
              </View>
            )}
            <Item stackedLabel style={styles.viewItemContent}>
              <Label>Content report</Label>
              <Input
                value={this.state.contentreport}
                onChangeText={(contentreport) => this.setState({contentreport})}
                multiline numberOfLines={4} />
            </Item>
          </Form>
          <View style={styles.viewButtonSendReport}>
            <Button block onPress={() => this.handleSendReport()}>
              {(this.props.loadingCondition) ? ( <Spinner color='white' /> ) : ( <Text>Send Report</Text> )}
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loadingCondition: state.loading.condition
  }
}

const styles = StyleSheet.create({
  container: {
		backgroundColor: '#FFFFFF'
  },
  textSubject: {
    color: '#0e0e0e'
  },
  viewSubject: {
    margin: 15
  },
  itemSubject: {
    marginTop: 10
  },
  viewItemContent: {
    marginTop: 10,
    marginBottom: 10
  },
  viewButtonSendReport: {
    margin: 10,
    marginLeft: width / 4,
    marginRight: width / 4
  }
})

export default connect(mapStateToProps)(ThemeContainer(Report))