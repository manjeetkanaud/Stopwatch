import { StyleSheet } from 'react-native';

var common = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'stretch'
  },
  header:{
    flex:1
  },
  footer:{
    flex:1
  },
  timer:{
    flex:5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonbar:{
    flex:4,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timerText: {
    fontSize:60
  },
  button: {
    borderWidth:2,
    height:100,
    width:100,
    borderRadius:50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor:'#00CC00'
  },
  stopButton: {
    borderColor:'#CC0000'
  },
  lapButton: {
    borderColor:'#048272'
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderColor:'#CC0000'
  },
  lapText: {
    fontSize:25
  }

}); 

module.exports = common;
