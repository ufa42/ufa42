
var React = require('react-native');



var {
  StyleSheet,
  Text,
    View,
    Image,
    ListView
} = React;

var styles = StyleSheet.create({
    
    photo: {
        width: 54,
        height: 54,
        borderRadius:3,
    },
      container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
          backgroundColor: '#FDFDFD',
          margin:5,
  },
    
    title: {
        marginBottom: 8,
        textAlign: 'center',
        flexWrap:"wrap"
    },
    subtitle: {
        textAlign: 'center',
        color:"#CCCCCC",
    },
    
    right: {
        flex: 1,
    },
});

var TalkWidget = React.createClass({
    render: function() {
        var c = this.props.talk;

        return (


                <View style={styles.container}>

                <Image source={{uri:c.speaker.photo}} style={styles.photo}/>
                <View style={styles.right}>
                <Text style={styles.title}>{c.title}</Text>
                
                <Text style={styles.subtitle}>{c.speaker.name}</Text>
                </View>
                </View>

        );
    }
});

module.exports = TalkWidget;
