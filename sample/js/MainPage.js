import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import EasyListView from 'react-native-easy-listview-gridview'
import ListViewSample from './ListViewSample'
import Styles from './Styles'

const SAMPLES = [
  {
    component: ListViewSample,
    name: 'QSDD指标统计',
    params: {
      empty: false,
      error: false,
      noMore: false,
      column: 1
    }
  },
  {
    component: ListViewSample,
    name: '鲁兆大趋势统计',
    params: {
      empty: true,
      error: false,
      noMore: false,
      column: 1
    }
  },
  {
    component: ListViewSample,
    name: '鲁兆金叉统计',
    params: {
      empty: false,
      error: true,
      noMore: false,
      column: 1
    }
  },
  {
    component: ListViewSample,
    name: '神仙大趋势统计',
    params: {
      empty: false,
      error: false,
      noMore: true,
      column: 1
    }
  },
  {
    component: ListViewSample,
    name: 'MACD指标统计',
    params: {
      empty: false,
      error: false,
      noMore: false,
      column: 2
    }
  },
  {
    component: ListViewSample,
    name: '威廉指标统计',
    params: {
      empty: true,
      error: false,
      noMore: false,
      column: 2
    }
  }
]

export default class MainPage extends Component {
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
