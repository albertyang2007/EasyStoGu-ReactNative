import React, { Component, PropTypes } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  WebView
} from 'react-native'

export default class FavoritesWebView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webViewData: ''
    };
    this.data = '';
	this.url = this.props.baseUrl + this.props.viewName + this.props.queryParms;
    this.sendMessage = this.sendMessage.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  static propTypes = {
	baseUrl: PropTypes.string,  
    viewName: PropTypes.string,
	queryParms: PropTypes.string
  }

  static defaultProps = {
	baseUrl: '',   
    viewName: '',
	queryParms: ''
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
          source={{uri: this.url}}
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
