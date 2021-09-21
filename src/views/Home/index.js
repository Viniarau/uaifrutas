import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Modal,
  TouchableOpacity,
  Pressable,
} from "react-native";
import CardProduct from "../../components/CardProduct";
import CardCart from "../../components/CardCarrinho";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faShoppingCart,
  faCheckCircle,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

import { LAYOUT } from "../../constants/app";
import { styles } from "./styles";

class HomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: [
        {
          id: 1,
          name: "Morango",
          price: "4,98",
          type: "bandeja",
          image: require("../../assets/img/morango.jpg"),
        },
        {
          id: 2,
          name: "Abacate",
          price: "9,90",
          type: "kg",
          image: require("../../assets/img/abacate.jpg"),
        },
        {
          id: 3,
          name: "Banana",
          price: "2,98",
          type: "kg",
          image: require("../../assets/img/banana-caturra.jpg"),
        },
        {
          id: 4,
          name: "Laranja",
          price: "3,98",
          type: "kg",
          image: require("../../assets/img/laranja.jpg"),
        },
        {
          id: 5,
          name: "Limão",
          price: "5,98",
          type: "kg",
          image: require("../../assets/img/limao.jpg"),
        },
        {
          id: 6,
          name: "Maçã",
          price: "7,98",
          type: "kg",
          image: require("../../assets/img/maca.jpg"),
        },
        {
          id: 7,
          name: "Mamão",
          price: "2,98",
          type: "kg",
          image: require("../../assets/img/mamao-papaia.jpg"),
        },
        {
          id: 8,
          name: "Tangerina",
          price: "3,98",
          type: "kg",
          image: require("../../assets/img/tangerina.jpg"),
        },
        {
          id: 9,
          name: "Lichia",
          price: "12,98",
          type: "kg",
          image: require("../../assets/img/lichia.jpg"),
        },
      ],
      carrinho: [],
      modalVisible: false,
      modalFinishVisible: false,
      total: 0.0,
      achou: false,
      pedidoFinalizado: false,
    };
  }

  _onChangeFormField = (name, value) => {
    let formEdit = { ...this.state.carrinho };
    formEdit[name] = value;
    this.setState({ carrinho: formEdit });
  };

  add = (number, item) => {
    this.setState({ pedidoFinalizado: false });
    const obj = {
      id: item.id,
      name: item.name,
      qntd: number,
      type: item.type,
      price: item.price,
      image: item.image,
    };
    for (var i = 0; i < this.state.carrinho.length; i++) {
      if (this.state.carrinho.length !== 0) {
        //somatório total
        // const valor = parseFloat(
        //   this.state.carrinho[i].price.replace(/,/, '.'),
        // );
        // this.setState({total: valor + this.state.total});
        // console.log(valor, this.state.total, this.state.carrinho[i].price);
        if (this.state.carrinho[i].id === obj.id) {
          if (obj.qntd === 0) {
            this.state.carrinho.splice(i, 1);
          } else {
            this.state.carrinho[i].qntd = obj.qntd;
            this.setState({ achou: true });
          }
          break;
        } else if (i === this.state.carrinho.length - 1) {
          this.state.carrinho.push(obj);
        }
      } else {
        this.state.carrinho.push(obj);
      }
    }
    if (this.state.carrinho.length === 0) {
      this.state.carrinho.push(obj);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
          backgroundColor={LAYOUT.COLORS.primary}
          translucent={false}
        />
        <ScrollView style={styles.scroll}>
          <View style={styles.containerProduct}>
            {this.state.store && this.state.store.length ? (
              this.state.store.map((item, i = 0) => {
                i++;
                return (
                  <CardProduct
                    key={i}
                    item={item}
                    number={this.state.number}
                    add={this.add}
                    pedidoFinalizado={this.state.pedidoFinalizado}
                    props={this.props}
                  />
                );
              })
            ) : (
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text>Sem dados</Text>
              </View>
            )}
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => this.setState({ modalVisible: true })}
          style={styles.containerCarrinho}
          activeOpacity={1}
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            size={this.state.clickedCart ? 40 : 25}
            color={"#fff"}
          />
        </TouchableOpacity>
        <Modal
          animationType='slide'
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({ modalVisible: !this.state.modalVisible });
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.containerModal}>
                <View style={styles.containerBody}>
                  <View style={styles.titleModal}>
                    <Text>{""}</Text>
                    <Text>CARRINHO DE COMPRAS</Text>
                    <Pressable
                      style={styles.exit}
                      onPress={() => this.setState({ modalVisible: false })}
                    >
                      <Text style={styles.textExit}>x</Text>
                    </Pressable>
                  </View>
                  <ScrollView style={styles.scroll}>
                    {this.state.carrinho && this.state.carrinho.length ? (
                      this.state.carrinho.map((item, i = 0) => {
                        i++;
                        return (
                          <CardCart
                            add={this.add}
                            key={i}
                            item={item}
                            props={this.props}
                          />
                        );
                      })
                    ) : (
                      <View style={{ flex: 1, alignItems: "center" }}>
                        <Text>Sem dados</Text>
                      </View>
                    )}
                  </ScrollView>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      modalVisible: !this.state.modalVisible,
                      modalFinishVisible: !this.state.modalFinishVisible,
                    })
                  }
                  style={styles.buttonBuy}
                >
                  <Text style={styles.textBuy}>Finalizar Pedido</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          animationType='slide'
          transparent={true}
          visible={this.state.modalFinishVisible}
          onRequestClose={() => {
            this.setState({
              modalFinishVisible: !this.state.modalFinishVisible,
            });
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalFinishView}>
              <Text style={styles.textFinish}>PEDIDO EFETUADO</Text>
              <FontAwesomeIcon
                icon={faCheckCircle}
                size={200}
                color={"green"}
              />
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    modalFinishVisible: false,
                    pedidoFinalizado: true,
                  });
                }}
                style={styles.buttonPdf}
              >
                <Text style={styles.textPdf}>GERAR COMPROVANTE</Text>
                <FontAwesomeIcon icon={faFilePdf} size={20} color={"red"} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default HomeView;
