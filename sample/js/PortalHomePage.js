import React, { Component } from 'react'
import {
  Text,
  View,
  WebView,
  TouchableHighlight
} from 'react-native'

import EasyListView from 'react-native-easy-listview-gridview'
import ListViewSample from './ListViewSample'
import WebViewSample from './WebViewSample'
import Styles from './Styles'

const baseUrl = 'http://www.openstock.cn:18080/portal/home/';

const SAMPLES = [
  {
    component: WebViewSample,
    name: '指标数据完整性检查(DataBaseSanityCheck)',
    params: {
	  queryUrl: baseUrl + 'DataBaseSanityCheck'
    }
  },
  {
    component: WebViewSample,
    name: '每日下载更新(DailyUpdateAllStockRunner)',
    params: {
	  queryUrl: baseUrl + 'DailyUpdateAllStockRunner'
    }
  },
  {
    component: WebViewSample,
    name: '最新日志(Server log)',
    params: {
	  queryUrl: baseUrl + 'Serverlog'
    }
  }
]

export default class PortalHomePage extends Component {
  constructor(props) {
    super(props)

    this.renderItem = this._renderItem.bind(this)
  }

  render() {
    return (
      <EasyListView
        ref={component => this.listview = component}
        rowHeight={50}
        renderItem={this.renderItem}
        isDataFixed={true}
        fixedData={SAMPLES}
      />
    )
  }

  _renderItem(rowData, sectionID, rowID, highlightRow) {
    return (
      <View
        style={Styles.rowContainer}>
        <TouchableHighlight
          style={{flex: 1}}
          onPress={() => this._gotoSample(rowData)}>
          <View
            style={Styles.rowContent}>
            <Text
              style={Styles.rowTitle}>
              {rowData.name}
            </Text>
          </View>
        </TouchableHighlight>
        <View style={Styles.separate}/>
      </View>
    )
  }

  _gotoSample(rowData) {
    const { navigator } = this.props
    if (navigator) {	
      navigator.push({
        name: rowData.name,
        component: rowData.component,
        params: rowData.params
      })
    }
  }
}
