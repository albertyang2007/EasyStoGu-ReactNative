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

const baseUrl = 'http://www.openstock.cn:18080/portal/report/';

const SAMPLES = [
  {
    component: WebViewSample,
    name: '日期 0',
    params: {
	  queryUrl: baseUrl + '0'
    }
  },
  {
    component: WebViewSample,
    name: '日期 -1',
    params: {
	  queryUrl: baseUrl + '-1'
    }
  },
  {
    component: WebViewSample,
    name: '日期 -2',
    params: {
	  queryUrl: baseUrl + '-2'
    }
  },
  {
    component: WebViewSample,
    name: '日期 -3',
    params: {
	  queryUrl: baseUrl + '-3'
    }
  },
  {
    component: WebViewSample,
    name: '日期 -4',
    params: {
	  queryUrl: baseUrl + '-4'
    }
  },
  {
    component: WebViewSample,
    name: '日期 -5',
    params: {
	  queryUrl: baseUrl + '-5'
    }
  },
  {
    component: WebViewSample,
    name: '日期 -6',
    params: {
	  queryUrl: baseUrl + '-6'
    }
  },
  {
    component: WebViewSample,
    name: '日期 -7',
    params: {
	  queryUrl: baseUrl + '-7'
    }
  },
  {
    component: WebViewSample,
    name: '日期 -8',
    params: {
	  queryUrl: baseUrl + '-8'
    }
  },
  {
    component: WebViewSample,
    name: '日期 -9',
    params: {
	  queryUrl: baseUrl + '-9'
    }
  }
]

export default class ReportPage extends Component {
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
