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

const baseUrl = 'http://www.openstock.cn:18080/eweb/react_native_zijinliuru.htm?selectView=';

const SAMPLES = [
  {
    component: WebViewSample,
    name: '鲁兆建仓-资金前300',
    params: {
      queryUrl: baseUrl + 'luzao_phaseII_zijinliu_top300&cixin=True'
    }
  },
  {
    component: WebViewSample,
    name: '鲁兆建仓-连续3天资金排名前300',
    params: {
      queryUrl: baseUrl +'luzao_phaseII_zijinliu_3_days_top300&cixin=True'
    }
  },
  {
    component: WebViewSample,
    name: '鲁兆建仓-5天有3天资金排名前300',
    params: {
	  queryUrl: baseUrl +'luzao_phaseII_zijinliu_3_of_5_days_top300&cixin=True'
    }
  },
  {
    component: WebViewSample,
    name: '鲁兆建仓-DDX大于0.5',
    params: {
      queryUrl: baseUrl +'luzao_phaseII_ddx_bigger_05&cixin=True'
    }
  },
  {
    component: WebViewSample,
    name: '鲁兆建仓-5天有2天DDX大于0.5',
    params: {
	  queryUrl: baseUrl +'luzao_phaseII_ddx_2_of_5_days_bigger_05&cixin=True'
    }
  },
  {
    component: WebViewSample,
    name: '鲁兆持股-资金前300',
    params: {
      queryUrl: baseUrl +'luzao_phaseIII_zijinliu_top300&cixin=True'
    }
  },
  {
    component: WebViewSample,
    name: '鲁兆持股-连续3天资金排名前300',
    params: {
      queryUrl: baseUrl +'luzao_phaseIII_zijinliu_3_days_top300&cixin=True'
    }
  },
  {
    component: WebViewSample,
    name: '鲁兆持股-5天有3天资金排名前300',
    params: {
      queryUrl: baseUrl +'luzao_phaseIII_zijinliu_3_of_5_days_top300&cixin=True'
    }
  },
  {
    component: WebViewSample,
    name: '鲁兆持股-DDX大于0.5',
    params: {
      queryUrl: baseUrl +'luzao_phaseIII_ddx_bigger_05&cixin=True'
    }
  },
  {
    component: WebViewSample,
    name: '鲁兆持股-5天有2天DDX大于0.5',
    params: {
	  queryUrl: baseUrl +'luzao_phaseIII_ddx_2_of_5_days_bigger_05&cixin=True'
    }
  },
]

export default class ZiJinLiuRuCiXinGuPage extends Component {
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
