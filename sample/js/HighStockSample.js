import React, { Component } from 'react';
import SimpleStockChart          from './Charts/SimpleStockChart';
import {
  View,	
  WebView 
} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            simpleStockChartSeries : [
                {
                    name : 'AAPL',
                    data : [
                        [1218153600000,24.22],
                        [1218412800000,24.79],
                        [1218499200000,25.25],
                        [1218585600000,25.61],
                        [1218672000000,25.62],
                        [1218758400000,25.11],
                        [1219017600000,25.06],
                        [1219104000000,24.79]
                    ],
                    tooltip: {
                        valueDecimals: 2
                    }
                }
            ]
        }
    }

    render() {
        return (
            <View>
                <SimpleStockChart series={this.state.simpleStockChartSeries}/>
            </View>
        );
    }
}



