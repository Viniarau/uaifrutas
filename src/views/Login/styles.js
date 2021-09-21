import {StyleSheet, Platform} from 'react-native';

import {LAYOUT} from '../../constants/app';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    opacity: 0.15,
    position: 'absolute',
    top: 0,
  },
  containerLogo: {
    alignSelf: 'center',
    marginBottom: 80,
    marginRight: 48,
  },
  textLogo1: {
    fontSize: 80,
    fontWeight: '600',
    color: LAYOUT.COLORS.primary,
    alignSelf: 'center',
  },
  textLogo2: {
    fontSize: 48,
    fontWeight: '800',
    color: LAYOUT.COLORS.secondary,
    marginTop: -40,
    marginLeft: 55,
    alignSelf: 'center',
  },
  containerLogin: {
    alignSelf: 'center',
    width: '80%',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 20,
  },
  // text: {
  //   marginBottom: '2%',
  //   alignSelf: 'flex-start',
  //   fontSize: 14,
  //   fontWeight: '700',
  //   color: LAYOUT.COLORS.gray,
  // },
  containerInput: {
    flexDirection: 'row',
    borderColor: LAYOUT.COLORS.gray,
    borderWidth: 2,
    borderRadius: 2,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
  },
  containerIcon: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    height: 45,
    backgroundColor: '#fff',
    borderWidth: 0,
    width: '100%',
  },
  containerButton: {
    marginTop: '5%',
    height: 45,
    backgroundColor: LAYOUT.COLORS.primary,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  textButton: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  // containerOptions: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-evenly',
  //   marginTop: 5,
  //   marginHorizontal: 25,
  // },
  // textDecoration: {
  //   textDecorationLine: 'underline',
  //   fontWeight: 'bold',
  //   fontSize: 14,
  //   color: LAYOUT.COLORS.GRAY,
  // },
});

export {styles};
