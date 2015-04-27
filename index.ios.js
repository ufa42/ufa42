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
    TabBarIOS,
    
} = React;

var ufa42 = React.createClass({

    renderSchedule: function() {
        
        var conf = db.conferences[3];
        return (
                <View style={{flex:1}}>
                <Schedule conf={conf} style={{}}/>
                </View>
        );
    },
    renderSummary: function(){

        return (<View style={{padding:10}}>
                <Text style={{fontSize:20,textAlign:"center", marginBottom:20}}>О чем эта конференция?</Text>
                <Text style={{fontSize:16}}>
Мы говорим о производственной части проектов: делимся личным опытом решения задач,
                    рассказываем про интересные особенности языков и технологий, про эпичные фейлы и
                    красивые решения - в общем, конференция обо всем том, что мы особенно любим в своей работе
                </Text>
                <Text style= {{fontSize:20,textAlign:"center", marginBottom:20, marginTop:40}} >Секции</Text>

                <Text style={{fontSize:16}}>
  В этот раз мы решили отойти от обычного формата с получасовыми докладами: вместо 2-3 длинных выступлений на 30 минут будет несколько докладов на 15-20 минут каждый. Пятиминутки - lightning talks - остаются отдельной секцией. Здесь задача докладчика - высказаться кратко и ёмко на интересную тему; вопросы из зала не предусмотрены: все обсуждения - после конференции. Самые интересные обсуждения начинаются во второй части! Можно будет организованно попить пива/чаю/сока в близлежащем кафе и поговорить о том, что осталось за рамками докладов.

                </Text>

                </View>);
    },

      getInitialState: function() {
    return {
      selectedTab: 'schedule',
    };
  },

    render: function() {

        
        return (
                
                <TabBarIOS>
        <TabBarIOS.Item
            title="Schedule"
            style={styles.container}
            selected={this.state.selectedTab === 'schedule'}
            systemIcon="featured"
            badge="9"
            
          onPress={() => {
            this.setState({
              selectedTab: 'schedule',
            });
          }}>
          {this.renderSchedule()}
            </TabBarIOS.Item>
                
        <TabBarIOS.Item
          title="Map"
            selected={this.state.selectedTab === 'map'}
            systemIcon="more"
            style={styles.container}
          onPress={() => {
            this.setState({
              selectedTab: 'map',
            });
          }}>
          {this.renderSummary()}
            </TabBarIOS.Item>

            </TabBarIOS>

            
        );
    }
});

var styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: '#FFFFFF',
        flex:1,
        flexDirection:"column",
        
    },
});

AppRegistry.registerComponent('ufa42', () => ufa42);
