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

class CartView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'space-between',
        }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={LAYOUT.COLORS.primary}
          translucent={false}
        />
        <ScrollView style={{flex: 1}}>
          <View>
            <Text>Informações</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default CartView;
