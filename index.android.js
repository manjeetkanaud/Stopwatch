/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, ListView} from 'react-native';

var Timer      = require('./src/components/timer');
var ButtonBar  = require('./src/components/buttonbar');
var Lap        = require('./src/components/lap');
var style      = require('./src/styles/common');

var stopwatch = React.createClass({
    getInitialState: function() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            timeElapsed : null,
            running     : false,
            startTime   : null,
            lap         : [],
            dataSource  : ds.cloneWithRows([])
        }
    },
    updateState: function(state) {
        this.setState(state);
    },
    getCurrentState: function() {
        return this.state;
    },
    render: function() {
        return (
          <View style={style.container}>
            <View style = {style.header}>
                <Timer 
                    style           = {style} 
                    getCurrentState = {this.getCurrentState}>  
                </Timer>
                <ButtonBar 
                    style           = {style}  
                    updateState     = {this.updateState}
                    getCurrentState = {this.getCurrentState}> 
                </ButtonBar>
            </View>

            <Lap 
                style           = {style}
                updateState     = {this.updateState}
                getCurrentState = {this.getCurrentState}> 
            </Lap>
          
          </View>
        );
    }
})


AppRegistry.registerComponent('stopwatch', () => stopwatch);
