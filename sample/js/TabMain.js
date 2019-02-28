import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView 
} from 'react-native';
import ScrollableTabView from './ScrollableTabView';
import TabBar from "./TabBar";
import MainPage from './MainPage'

import StatisticsPage from './StatisticsPage'
import ZiJinLiuRuPage from './ZiJinLiuRuPage'
import ZiJinLiuRuCiXinGuPage from './ZiJinLiuRuCiXinGuPage'
import GordonPage from './GordonPage'
import FavoritesPage from './FavoritesPage'
import ReportPage from './ReportPage'
import PortalHomePage from './PortalHomePage'

export default class TabMain extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
        <View style={[styles.container, {paddingTop: 0}]}>
          <ScrollableTabView
              tabBarUnderlineColor="#53ac49"
              tabBarActiveTextColor="#53ac49"
              renderTabBar={() => <TabBar/>}>
            <WebView tabLabel={{label: "主页"}} label="主页" source={{uri: "http://www.openstock.cn:18080/eweb/main.htm"}} navigator={this.props.navigator}/>
            <WebView tabLabel={{label: "自选"}} label="自选" source={{uri: "http://www.openstock.cn:18080/eweb/react_native_zixuangu.htm"}} navigator={this.props.navigator}/>
			<WebView tabLabel={{label: "预测"}} label="预测" source={{uri: "http://www.openstock.cn:18080/eweb/react_native_forecast.htm"}} navigator={this.props.navigator}/>
            <StatisticsPage tabLabel={{label: "统计"}} label="统计" navigator={this.props.navigator}/>
            <ZiJinLiuRuPage tabLabel={{label: "资金"}} label="资金" navigator={this.props.navigator}/>
			<GordonPage tabLabel={{label: "金叉"}} label="金叉" navigator={this.props.navigator}/>
			<ReportPage tabLabel={{label: "报告"}} label="报告" navigator={this.props.navigator}/>
			<FavoritesPage tabLabel={{label: "精选"}} label="精选" navigator={this.props.navigator}/>
			<ZiJinLiuRuCiXinGuPage tabLabel={{label: "次新"}} label="次新" navigator={this.props.navigator}/>
            <PortalHomePage tabLabel={{label: "维护"}} label="维护" navigator={this.props.navigator}/>
          </ScrollableTabView>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});