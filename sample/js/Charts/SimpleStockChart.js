import React, { Component } from 'react';

export default class SimpleStockChart extends Component {
    changeConfig(series){
        return {
            rangeSelector : {
                selected : 1
            },
            title : {
                text : 'AAPL Stock Price'
            },
            series : series
        };
    }

    render() {
        var highstockChart = <div></div>;
        if(typeof window !== "undefined"){
            var Chart = require('./BaseChart');
            highstockChart = (<Chart theme="grid" type="Highstock" config={this.changeConfig(this.props.series)} ref="highstockChart" />);
        }
        return (
            <div>
            {highstockChart}
            </div>
        );
    }
}

SimpleStockChart.PropTypes = {
    series : React.PropTypes.object.isRequired
}
