
var React = require('react-native');
var TalkWidget = require("./TalkWidget");


var {
  StyleSheet,
  Text,
    View,
    Image,
    ListView,
    ScrollView,
    MapView,
} = React;



var Schedule = React.createClass({
    renderRow: function(talk){
        return (<TalkWidget talk={talk}/>);
    },
    render: function() {
        var conf = this.props.conf;
        var ds = new ListView.DataSource({rowHasChanged: (a,b) => a != b});
        ds = ds.cloneWithRows(conf.talks);

        var map = [];
        map.push({latitude:conf.place.latitude,longitude:conf.place.longitude,title:"Конференция"});
        if (conf.beers){
            map.push({latitude:conf.beers.latitude, longitude:conf.beers.longitude, title:"Beers"});
        }
        var beers = conf.beers;
        var place = conf.place;
        var region = {
            latitude:(place.latitude * 2 + beers.latitude)/3,
            longitude:(place.longitude * 2 + beers.longitude)/3,
            latitudeDelta:Math.abs(place.latitude - beers.latitude) * 2,
            longitudeDelta:Math.abs(place.longitude - beers.longitude) * 2,
        };
        
        return (
                <View style={{flex:0.5, flexDirection:"column"}}>
                <Text style={{flex:0.5, fontSize:20,textAlign:"center",marginTop:20}}>{conf.date}</Text>
                <MapView showsUserLocation={false} annotations={map} region={region} style={{flex:3, backgroundColor:"#00FF00", flexDirection:"column"}}/>
                <ListView dataSource={ds} renderRow={this.renderRow} style={{flex:4, height: 300}}/>
            </View>
      );
  }
});


module.exports = Schedule;
      
