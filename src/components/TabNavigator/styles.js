import {StyleSheet, Platform} from 'react-native';

import {LAYOUT} from '../../constants/app';

const styles = StyleSheet.create({
  store: {
    flex: 0,
    width: 80,
    height: 80,
    marginTop: -45,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: LAYOUT.COLORS.secondary,
    backgroundColor: LAYOUT.COLORS.secondary,
  },
  storeIcon: {
    color: '#fff',
    marginTop: 22,
    marginLeft: 22,
  },
  storeIconClicked: {
    color: '#fff',
    marginTop: 17,
    marginLeft: 17,
  }
});

export {styles};
