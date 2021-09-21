import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import {LAYOUT} from '../../constants/app';
import {styles} from './styles';
class AdvertsView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={LAYOUT.COLORS.primary}
          translucent={false}
        />
        <ScrollView style={{flex: 1}}>
          <View style={styles.containerAdverts}>
            <Text>adverts</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AdvertsView;
