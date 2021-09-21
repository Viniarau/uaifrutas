import React, {Component} from 'react';
import {
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  View,
  Text,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);

    //Desativar o dimensionamento das fontes no aplicativo.
    // Text.defaultProps = Text.defaultProps || {};
    // Text.defaultProps.allowFontScaling = false;
  }

  componentDidMount() {
    this._initialApp();
  }

  _initialApp = async () => {
    this.props.navigation.reset({
      index: 0,
      routes: [{name: 'login'}],
    });

    SplashScreen.hide();
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={'#fff'}
          translucent={false}
        />
        <ActivityIndicator size="large" color={'red'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default AuthLoadingScreen;
