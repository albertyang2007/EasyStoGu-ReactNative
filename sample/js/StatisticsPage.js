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

const baseUrl = 'http://www.openstock.cn:18080/eweb/react_native_statistics.htm?indicator=';

const SAMPLES = [
  {
    component: WebViewSample,
    name: '神奇9转指标统计',
    params: {
	  queryUrl: baseUrl + 'magic9day'
    }
  },
  {
    component: WebViewSample,
    name: '威廉指标统计',
    params: {
      queryUrl: baseUrl + 'wr'
    }
  },  
  {
	component: WebViewSample,
	name: 'QSDD指标统计',
	params: {
	  queryUrl: baseUrl + 'qsdd'
	}
  },   
  {
    component: WebViewSample,
    name: 'MACD指标统计',
    params: {
      queryUrl: baseUrl + 'macd'
    }
  },  
  {
    component: WebViewSample,
    name: '鲁兆大趋势统计',
    params: {
	  queryUrl: baseUrl + 'luzaoTrend'
    }
  }, 
  {
    component: WebViewSample,
    name: '鲁兆金叉统计',
    params: {
      queryUrl: baseUrl + 'luzaoGordon'
    }
  },
  {
    component: WebViewSample,
    name: '神仙大趋势统计',
    params: {
      queryUrl: baseUrl + 'shenxian'
    }
  },
  {
    component: WebViewSample,
    name: '双子顶数字统计',
    params: {
      queryUrl: baseUrl + 'sameDigitsInHighPrice'
    }
  },
  {
    component: WebViewSample,
    name: '一元股统计',
    params: {
      queryUrl: baseUrl + 'OneYuan'
    }
  },
  {
    component: WebViewSample,
    name: '一元股统计',
    params: {
      queryUrl: baseUrl + 'FiveYuan'
    }
  },
  {
    component: WebViewSample,
    name: '十元股统计',
    params: {
      queryUrl: baseUrl + 'TenYuan'
    }
  }
]

export default class StatisticsPage extends Component {
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
