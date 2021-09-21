import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Text,
} from 'react-native';

import {LAYOUT} from '../../constants/app';
import Count from './Count';

const CardProduct = props => {
  const {item, add, pedidoFinalizado} = props;

  useEffect(() => {
    // Ao montar o componente
    return () => {
      // Ao desmontar o componente
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={styles.containerFoto}>
          <Image style={styles.foto} source={item.image} />
          <Count item={item} add={add} pedidoFinalizado={pedidoFinalizado} />
        </View>
        <View style={styles.containerBody}>
          <View style={styles.containerText}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.price}>{item.price}</Text>
          </View>
          <View style={styles.containerType}>
            <Text style={styles.type}>
              {item.type === 'kg' ? ' Kg' : ' Bandeja'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flatlist: {},
  container: {
    borderWidth: 2,
    borderColor: LAYOUT.COLORS.secondary,
    borderRadius: 5,
    height: 150,
    width: 300,
    alignItems: 'center',
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10,
    marginVertical: 15,
    marginHorizontal: 15,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
  },
  containerFoto: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCount: {
    flexDirection: 'row',
  },
  containerAdd: {
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 15,
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
    backgroundColor: 'rgb(220,220,220)',
  },
  containerNumber: {
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 8,
  },
  containerRemove: {
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 15,
    borderTopStartRadius: 5,
    borderBottomStartRadius: 5,
    backgroundColor: 'rgb(220,220,220)',
  },
  containerBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    width: '70%',
    height: '70%',
    borderRadius: 70,
    marginLeft: 5,
  },
  containerText: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 10,
  },
  containerPrice: {
    alignSelf: 'flex-end',
    paddingRight: 10,
  },
  containerType: {
    alignSelf: 'flex-end',
    marginTop: -10,
    paddingRight: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: '800',
    color: LAYOUT.COLORS.gray,
  },
  price: {
    fontSize: 40,
    fontWeight: '800',
    color: LAYOUT.COLORS.secondary,
  },
  type: {
    fontSize: 14,
    fontWeight: '800',
    color: LAYOUT.COLORS.gray,
  },
});

export default CardProduct;
