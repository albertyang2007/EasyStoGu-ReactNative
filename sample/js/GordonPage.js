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

const baseUrl = 'http://www.openstock.cn:18080/eweb/react_native_gordon.htm?selectView=';

const SAMPLES = [
  {
    component: WebViewSample,
    name: 'W底 MACD二次金叉 跳空高开',
    params: {
	  queryUrl: baseUrl + 'MACD_TWICE_GORDON_W_Botton_TiaoKong_ZhanShang_Bull'
    }
  },
  {
    component: WebViewSample,
    name: 'W底 MACD二次金叉 MACD底背离',
    params: {
	  queryUrl: baseUrl + 'MACD_TWICE_GORDON_W_Botton_MACD_DI_BEILI'
    }
  },
  {
    component: WebViewSample,
    name: '鲁兆建仓-MACD周线金叉日线DIF金叉',
    params: {
	  queryUrl: baseUrl + 'LuZao_PhaseII_MACD_WEEK_GORDON_MACD_DAY_DIF_CROSS_0'
    }
  },
  {
    component: WebViewSample,
    name: '鲁兆持股-MACD周线金叉日线DIF金叉',
    params: {
	  queryUrl: baseUrl + 'LuZao_PhaseIII_MACD_WEEK_GORDON_MACD_DAY_DIF_CROSS_0'
    }
  },
  {
    component: WebViewSample,
    name: '鲁兆建仓-MACD周线金叉KDJ周线金叉',
    params: {
	  queryUrl: baseUrl + 'LuZao_PhaseII_MACD_WEEK_GORDON_KDJ_WEEK_GORDON'
    }
  },
  {
    component: WebViewSample,
    name: '鲁兆持股-MACD周线金叉KDJ周线金叉',
    params: {
	  queryUrl: baseUrl + 'LuZao_PhaseIII_MACD_WEEK_GORDON_KDJ_WEEK_GORDON'
    }
  }
]

export default class GordonPage extends Component {
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
