import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import cart from './mokado/cart';

export default class Cart extends Component {
  state = {
    cart: cart.cart,
    total: 0,
  };

  componentDidMount() {
    this.sumPrice();
  }
  sumPrice = () => {
    var respose = 0;
    for (var i in this.state.cart) {
      respose += this.state.cart[i].preço;
    }
    this.setState({total: respose});
  };
  renderCart = item => (
    <View style={styles.cartLine}>
      <Text style={styles.cartName}>{item.nome}</Text>
      <Text style={styles.cartPrice}>{item.preço}</Text>
      <TouchableOpacity
        style={styles.itemTrash}
        onPress={() => {
          Alert.alert(`${item.nome} Excluido`);
        }}>
        <Image style={styles.imgTrash} source={require('./images/trash.png')} />
      </TouchableOpacity>
    </View>
  );
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.titleBar}>
          <Text style={styles.title}>Cart</Text>
        </View>

        <View>
          <FlatList
            data={this.state.cart}
            renderItem={({item: rowData}) => {
              return <View>{this.renderCart(rowData)}</View>;
            }}
            keyExtractor={(item, index) => index}
          />
        </View>

        <View style={styles.endBar}>
          <Text style={styles.price}>{`Total: R$ ${this.state.total}`}</Text>
          <TouchableOpacity
            style={styles.payBox}
            onPress={() => {
              Alert.alert('Compra realizada com sucesso !!!');
            }}>
            <Text style={styles.pay}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'silver',
  },
  titleBar: {
    height: 60,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  cartLine: {
    flexDirection: 'row',
    margin: 15,
    top: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
  },
  cartName: {
    fontSize: 19,
    textAlign: 'left',
  },
  cartPrice: {
    position: 'absolute',
    right: 50,
    fontSize: 19,
    bottom: 2,
  },
  itemTrash: {
    position: 'absolute',
    right: 10,
  },
  imgTrash: {
    width: 20,
    height: 20,
  },
  endBar: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 60,
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
  price: {
    position: 'absolute',
    fontSize: 30,
    textAlign: 'left',
    marginLeft: 20,
    fontWeight: 'bold',
  },
  pay: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'right',
    margin: 5,
  },
  payBox: {
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 8,
    alignSelf: 'flex-end',
    right: 10,
  },
});
