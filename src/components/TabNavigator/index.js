import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {LAYOUT} from '../../constants/app';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faStore,
  faShoppingCart,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';
import {styles} from './styles';

export default class TabNavigator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clickedAdverts: false,
      clickedCart: false,
      clickedStore: true,
    };
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: LAYOUT.COLORS.primary,
          height: 50,
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          // paddingHorizontal: 5
        }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            this.setState({
              clickedAdverts: true,
              clickedCart: false,
              clickedStore: false,
            });
            this.props.navigation.navigate('adverts');
          }}
          style={{flex: 1, alignItems: 'center'}}>
          <FontAwesomeIcon
            icon={faBullhorn}
            size={this.state.clickedAdverts ? 40 : 25}
            color={'#fff'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.store}
          onPress={() => {
            this.setState({
              clickedAdverts: false,
              clickedCart: false,
              clickedStore: true,
            });
            this.props.navigation.navigate('home');
          }}>
          <FontAwesomeIcon
            style={
              this.state.clickedStore
                ? styles.storeIconClicked
                : styles.storeIcon
            }
            icon={faStore}
            size={this.state.clickedStore ? 45 : 35}
            color={'#fff'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            this.setState({
              clickedAdverts: false,
              clickedCart: true,
              clickedStore: false,
            });
            this.props.navigation.navigate('cart');
          }}
          style={{flex: 1, alignItems: 'center'}}>
          <FontAwesomeIcon
            icon={faShoppingCart}
            size={this.state.clickedCart ? 40 : 25}
            color={'#fff'}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
