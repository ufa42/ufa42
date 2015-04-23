/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var db = require("./db");
var Schedule = require("./Schedule");
var {
  AppRegistry,
  StyleSheet,
  Text,
    View,
    ScrollView,
} = React;

var ufa42 = React.createClass({
    render: function() {

        var conf = db.conferences[2];
        
      return (
              <View style={styles.container}>
              <Schedule conf={conf} />
        </View>
    );
  }
});

var styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    backgroundColor: '#FFFFFF',
  },
});

AppRegistry.registerComponent('ufa42', () => ufa42);
