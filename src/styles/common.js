import { StyleSheet } from 'react-native';

var common = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'stretch',
    backgroundColor:'#37486b'
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
    fontSize:80,
    color:'white'
  },
  button: {
    borderWidth:2,
    height:60,
    width:100,
    borderRadius:28,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor:'#ffffff',
  },
  stopButton: {
    borderColor:'#ffffff'
  },
  lapButton: {
    borderColor:'#ffffff'
  },
  lap: {
    justifyContent: 'space-around',
    alignItems:'center',
    flexDirection: 'row',
    height:50,
    padding:10,
    borderRadius:28,
    margin:15
  },
  lapText: {
    fontSize:18,
    color:'#ffffff'
  },
  fontWhite:{
    color:'#ffffff',
    fontSize:15,
  }

}); 

module.exports = common;
