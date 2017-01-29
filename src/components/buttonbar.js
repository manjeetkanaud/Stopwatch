import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

var ButtonBar = React.createClass({
    render: function() {
        return (
          <View style= {this.props.style.buttonbar}>
           
            <TouchableHighlight  
                underlayColor = 'grey' 
                onPress       = {() => this.handelStartButtonPress(this.props.updateState, this.props.getCurrentState)}
                style         = {[this.props.style.button, this.getStartButtonStyle(this.props.getCurrentState)]}> 
              <Text> 
                {this.props.getCurrentState().running ? "Stop" : "Start"}
              </Text>
            </TouchableHighlight>
            
            <TouchableHighlight  
                underlayColor = "grey" 
                onPress       = {() => this.handleLapButtonPress(this.props.updateState, this.props.getCurrentState)}
                style         = {[this.props.style.button, this.props.style.lapButton]}>  
              <Text>
                Lap
              </Text>
            </TouchableHighlight> 
          
          </View>
        );
    },
    getStartButtonStyle(getCurrentState) {
        return getCurrentState().running ? this.props.style.stopButton : this.props.style.startButton;
    },
    handleLapButtonPress: function(updateState, getCurrentState) {
        var lapTime = getCurrentState().timeElapsed;
        updateState({
            startTime : new Date(),
            lap       : getCurrentState().lap.concat([lapTime]),
            dataSource : getCurrentState().dataSource.cloneWithRows(getCurrentState().lap)

        });
        return;
    },
    handelStartButtonPress: function(updateState, getCurrentState) {
        if (getCurrentState().running) {
            updateState({
                running:false
            });
            BackgroundTimer.clearInterval(this.interval);
            return;
        }
        updateState({
            startTime: new Date()
        });
        this.interval =  BackgroundTimer.setInterval(() => { 
            updateState({
                timeElapsed: (new Date() - getCurrentState().startTime),
                running:true
            })
        }, 30);
    }

})

module.exports = ButtonBar;

