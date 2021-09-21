import {StyleSheet, Platform} from 'react-native';

import {LAYOUT} from '../../constants/app';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  containerProduct: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 30,
    paddingTop: 5,
  },
  containerCarrinho: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70,
    borderRadius: 70,
    bottom: 30,
    right: 30,
    backgroundColor: LAYOUT.COLORS.primary,
  },
  // count: {
  //   position: 'absolute',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingHorizontal: 3,
  //   borderRadius: 70,
  //   bottom: 70,
  //   right: 45,
  //   backgroundColor: LAYOUT.COLORS.secondary,
  //   zIndex: 2,
  // },
  // countText: {
  //   color: '#fff',
  //   fontSize: 16,
  //   fontWeight: '700',
  // },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  scroll: {
    flex: 1,
    width: '100%',
  },
  //MODAL CARRINHO
  modalView: {
    height: '85%',
    width: 350,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  containerModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  containerBody: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  titleModal: {
    marginBottom: 10,
    borderBottomWidth: 0.3,
    width: '100%',
    paddingBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  exit: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 0.3,
    borderRadius: 5,
    backgroundColor: 'gray',
  },
  textExit: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonBuy: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    backgroundColor: LAYOUT.COLORS.primary,
    elevation: 2,
  },
  textBuy: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  //MODAL PEDIDO FINALIZADO
  modalFinishView: {
    height: '80%',
    width: '80%',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
    justifyContent: 'center'
  },
  textFinish: {
    fontSize: 40,
    fontWeight: '800',
    color: LAYOUT.COLORS.black,
    paddingBottom: 40,
    width: '100%',
    textAlign: 'center',
  },
  buttonPdf: {
    flexDirection: 'row',
    borderWidth: 0.5,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 10,
    padding: 10,
    marginTop: 50,
  },
  textPdf: {
    fontWeight: '600',
    paddingRight: 15,
  },
});

export {styles};
