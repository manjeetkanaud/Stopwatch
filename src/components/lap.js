import React, { Component } from 'react';
import { Text, View , ListView } from 'react-native';
var formatTime = require('minutes-seconds-milliseconds');

var Lap = React.createClass({
    render: function() {
        return (
          <View style= {this.props.style.footer}>
            {this.getLaps(this.props.getCurrentState, this.props.style)}
          </View>
        );
    },
    getLaps: function(getCurrentState, style) {
        return <View>
          <ListView
            dataSource = {getCurrentState().dataSource}
            enableEmptySections = {true}
            renderRow  = {
              (rowData, sec, index) => <View style = {style.lap}>
                <Text style = {style.lapText}>
                  Lap {parseInt(index)+1}
                </Text>
                <Text style = {style.lapText}> {formatTime(rowData)}</Text>
              </View>
            }
          />
        </View>
    }
})

module.exports = Lap;

