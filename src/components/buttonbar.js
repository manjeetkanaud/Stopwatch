import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

var ButtonBar = React.createClass({
    render: function() {
        return (
          <View style= {this.props.style.buttonbar}>
           
            <TouchableHighlight  
                underlayColor = '#ffffff' 
                onPress       = {() => this.handelStartButtonPress(this.props.updateState, this.props.getCurrentState)}
                style         = {[this.props.style.button, this.getStartButtonStyle(this.props.getCurrentState)]}> 
              <Text style = {this.props.style.fontWhite}> 
                {this.props.getCurrentState().running ? "Stop" : "Start"}
              </Text>
            </TouchableHighlight>
            
            <TouchableHighlight  
                underlayColor = '#ffffff'
                onPress       = {() => this.handleLapButtonPress(this.props.updateState, this.props.getCurrentState)}
                style         = {[this.props.style.button, this.props.style.lapButton]}>  
              <Text style = {this.props.style.fontWhite}>
                Lap
              </Text>
            </TouchableHighlight>
            <TouchableHighlight  
                underlayColor = '#ffffff'
                onPress       = {() => this.handleResetButtonPress(this.props.updateState, this.props.getCurrentState)}
                style         = {[this.props.style.button, this.props.style.lapButton]}>  
              <Text style = {this.props.style.fontWhite}>
                Reset
              </Text>
            </TouchableHighlight> 
          
          </View>
        );
    },
    getStartButtonStyle(getCurrentState) {
        return getCurrentState().running ? this.props.style.stopButton : this.props.style.startButton;
    },
    handleResetButtonPress: function(updateState, getCurrentState) {
        updateState({
            timeElapsed : 0,
            running     : false,
            startTime   : null,
            lap         : [],
            dataSource  : getCurrentState().dataSource.cloneWithRows([])
        });
        BackgroundTimer.clearInterval(this.interval);
        return;
    },
    handleLapButtonPress: async function(updateState, getCurrentState) {
        var intiLaps = getCurrentState().lap;
        if (!getCurrentState().running && intiLaps[intiLaps.length-1] == getCurrentState().timeElapsed ) {
            return;
        }
        var laps = intiLaps.concat([getCurrentState().timeElapsed]);
        updateState({
            startTime : new Date(),
            lap       : laps,
            dataSource : getCurrentState().dataSource.cloneWithRows(laps)

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

