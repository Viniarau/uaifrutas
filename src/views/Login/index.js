import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';

import {LAYOUT} from '../../constants/app';
import {styles} from './styles';

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        email: '',
        password: '',
      },
      keep_connected: true,
      showAgain: true,
    };
  }

  _onChangeFormField = (name, value) => {
    let formEdit = {...this.state.form};
    formEdit[name] = value;
    this.setState({form: formEdit});
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={LAYOUT.COLORS.primary}
          translucent={true}
        />
        <ImageBackground
          source={require('../../assets/img/fundo.jpeg')}
          style={styles.backgroundImage}
        />
        <View style={styles.containerLogo}>
          <Text style={styles.textLogo1}>UAI</Text>
          <Text style={styles.textLogo2}>FRUTAS</Text>
        </View>
        <View style={styles.containerLogin}>
          <View style={styles.containerInput}>
            <View style={styles.containerIcon}>
              <FontAwesomeIcon
                icon={faUser}
                size={25}
                color={LAYOUT.COLORS.primary}
              />
            </View>
            <TextInput
              style={styles.textInput}
              onChangeText={text => this._onChangeFormField('email', text)}
              value={this.state.form.email}
            />
          </View>
          <View style={styles.containerInput}>
            <View style={styles.containerIcon}>
              <FontAwesomeIcon
                icon={faLock}
                size={25}
                color={LAYOUT.COLORS.primary}
              />
            </View>
            <TextInput
              secureTextEntry={true}
              maxLength={30}
              style={styles.textInput}
              onChangeText={text => this._onChangeFormField('password', text)}
              value={this.state.form.password}
            />
          </View>
          <TouchableOpacity
            style={styles.containerButton}
            onPress={() =>
              this.props.navigation.reset({
                index: 0,
                routes: [{name: 'home'}],
              })
            }>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginView;
