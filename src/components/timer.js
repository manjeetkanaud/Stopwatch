import React, { Component } from 'react';
import { Text, View } from 'react-native';
var formatTime = require('minutes-seconds-milliseconds');

var Timer = React.createClass({
    render: function() {
        return (
            <View style= {this.props.style.timer}>
                <Text style= {this.props.style.timerText}>
                    {formatTime(this.props.getCurrentState().timeElapsed)}
                </Text>
            </View >
        );
    }

})

module.exports = Timer;

