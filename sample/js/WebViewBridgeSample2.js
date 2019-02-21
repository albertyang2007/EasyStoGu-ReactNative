import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  WebView
} from 'react-native';

export default class WebViewBridgeSample2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webViewData: ''
    };
    this.data = '{"indicator": "shenxian", "version": "v1"}';
    this.sendMessage = this.sendMessage.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }
  
  componentWillMount () {
	//Do not postMessage at the time
    //this.webview.postMessage(this.data);
  }
  
  componentDidMount() {
	//must set timeout, do not know wh
    setTimeout(() => {	
      this.webview.postMessage(this.data);
    }, 4000);
  }
  
  sendMessage() {
	//send data to html page  
    this.webview.postMessage(this.data);
  }
  handleMessage(e) {
	//receive data from html page and set to webViewData  
    this.setState({ webViewData: e.nativeEvent.data });
  }
  render() {
    return (
	  <View style={styles.highstockwebview}>
        <TouchableHighlight
          style={styles.button}
          onPress={this.sendMessage}
        >
          <Text>发送数据到WebView</Text>
        </TouchableHighlight>
        <View>
          <Text>来自WebView的数据: <Text>{ this.state.webViewData }</Text></Text>
        </View>
        <WebView
          style={styles.highstockwebview}
          source={{uri: "http://192.168.208.1:8080/eweb/statistics.htm"}}
          ref={webview => this.webview = webview}
          onMessage={this.handleMessage}
        />
      </View>	  
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 40
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  webview: {
    width: 250,
    height: 250
  },
  highstockwebview: {
    flex: 1
  }
});