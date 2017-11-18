import React, { Component, PropTypes } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  WebView
} from 'react-native'

export default class WebViewSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webViewData: ''
    };
    this.data = '';
	this.queryUrl = this.props.queryUrl;
    this.sendMessage = this.sendMessage.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  static propTypes = {
	queryUrl: PropTypes.string
  }

  static defaultProps = {
	queryUrl: ''
  }

  componentWillMount () {
	//Do not postMessage at the time
    //this.webview.postMessage(this.data);
  }
  
  componentDidMount() {
	//must set timeout, do not know why
    //setTimeout(() => {	
    //  this.webview.postMessage(this.data);
    //}, 1000);
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
        <WebView
          style={styles.webview}
          source={{uri: this.queryUrl}}
          ref={webview => this.webview = webview}
          onMessage={this.handleMessage}
        />  
    );
  }
}


const styles = StyleSheet.create({
  webview: {
    flex: 1
  }
});
