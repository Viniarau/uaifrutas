import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Text,
} from 'react-native';

import {LAYOUT} from '../../../constants/app';

const Count = props => {
  const {item, add, pedidoFinalizado} = props;

  const [number, setNumber] = useState(0);

  useEffect(() => {
    // Ao montar o componente
    if (pedidoFinalizado) {
      setNumber(0);
      add(number, item);
    }
    return () => {
      // Ao desmontar o componente
    };
  }, [add, item, number, pedidoFinalizado]);

  const remove = () => {
    if (number > 0) {
      setNumber(number - 1);
      // console.log('number', number);
      add(number - 1, item);
    }
  };

  const addQntd = () => {
    setNumber(number + 1);
    add(number + 1, item);
  };

  return (
    <View style={styles.containerCount}>
      <TouchableOpacity onPress={() => remove()} style={styles.containerRemove}>
        <Text>-</Text>
      </TouchableOpacity>
      <View style={styles.containerNumber}>
        <Text>{number}</Text>
      </View>
      <TouchableOpacity onPress={() => addQntd()} style={styles.containerAdd}>
        <Text>+</Text>
      </TouchableOpacity>
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
    width: '45%',
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

export default Count;
