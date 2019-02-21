import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView,
  Alert
} from 'react-native';

const injectScript = `
  (function () {
	Alert.alert("injectScript 0")  
    if (WebView) {

      WebView.onMessage = function (message) {
        Alert.alert("injectScript")
      };
    }
  }());
`;

var WebViewBridgeSample = React.createClass({
	
  componentDidMount() {
    // Send this chart data over to web view after 5 seconds.
    setTimeout(() => {	
	  Alert.alert("componentDidMount")
      this.refs.webviewbridge.postMessage("hello from webview");
    }, 1000);
  },
  
  onMessage: function (message) {
    const { webviewbridge } = this.refs;
    Alert.alert("onMessage")
  },
  
  postMessage : function (message) {
    const { webviewbridge } = this.refs;
    Alert.alert("postMessage ")
	if (this.refs.webviewbridge) { 
	   this.refs.webviewbridge.postMessage('"Hello" from React Native!'); 
	}
  },
  
  render() {
    return (
      <WebView
        ref="webviewbridge"
        onMessage={this.onMessage}
        javaScriptEnabled={true}
        injectedJavaScript={injectScript}
        source={{uri: "http://www.openstock.cn:18080/eweb/statistics.htm"}}/>
    );
  }
});

module.exports = WebViewBridgeSample;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

