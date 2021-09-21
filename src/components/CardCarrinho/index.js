import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';

import {LAYOUT} from '../../constants/app';

const CardCart = props => {
  const {item, add} = props;

  useEffect(() => {
    // Ao montar o componente
    return () => {
      // Ao desmontar o componente
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={styles.containerQuantidade}>
          <Text>{item.qntd}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.text}>
            {item.name}
            {item.type === 'kg' ? ' (Kg)' : ' (Bandeja)'}
          </Text>
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.text}>{item.price}</Text>
        </View>
        {/* <TouchableOpacity onPress={() => add(0, item)}>
          <FontAwesomeIcon icon={faTimesCircle} size={20} color={'red'} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatlist: {},
  container: {
    borderBottomWidth: 1,
    borderColor: LAYOUT.COLORS.gray,
    borderRadius: 5,
    height: 40,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  containerQuantidade: {
    flex: 1,
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 5,
    alignItems: 'center',
  },
  containerText: {
    flex: 10,
  },
  containerPrice: {
    flex: 3,
  },
  containerType: {},
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: LAYOUT.COLORS.gray,
  },
});

export default CardCart;
