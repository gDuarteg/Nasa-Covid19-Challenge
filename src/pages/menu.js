/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */

import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';

import menu from './mokado/menu';

export default class Menu extends Component {
  state = {
    categorias: ['novidades', 'carne', 'peixe', 'vegano'],
    selecionou: 'novidades',
    menu: menu,
    menuCat: [],
  };

  componentDidMount() {
    this.createMenuCat();
  }

  createMenuCat = async () => {
    var NewMenuCat = [];
    for (var i in this.state.menu.menu) {
      if (this.state.menu.menu[i].cat === this.state.selecionou) {
        NewMenuCat.push(this.state.menu.menu[i]);
      }
    }
    this.setState({menuCat: NewMenuCat});
  };

  executaMenu = props => {
    this.setState(
      {
        selecionou: props,
      },
      () => {
        this.createMenuCat();
      },
    );
  };

  menuItem = item => (
    <TouchableOpacity
      style={styles.menuProductItem}
      onPress={() => {
        Alert.alert(`Selecionou ${item.nome}`);
        //this.props.navigation.navigate('Product', {product: item});
      }}>
      <Text style={styles.menuProductName}>{item.nome}</Text>
      <Text style={styles.menuProductPrice}>{`R$ ${item.preço}`}</Text>
      <Text style={styles.menuProductDescrib}>{item.desc}</Text>
    </TouchableOpacity>
  );

  catItem = props => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => {
        this.executaMenu(props);
      }}>
      <Text style={styles.categoryText}>{props}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.navBar}>
          <Text style={styles.title}>Menu Bytes</Text>
          <TouchableOpacity 
            style={styles.cartButton}
            onPress={() => {
              Alert.alert('ir para Carrinho de compras');
              //this.props.navigation.navigate('Product', {product: item});
            }}>
            <Image
              style={styles.imgCart}
              source={require('./images/cart.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.menu}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.menuCat}
            renderItem={({item: rowData}) => {
              return <View>{this.menuItem(rowData)}</View>;
            }}
            keyExtractor={(item, index) => index}
          />
        </View>

        <View style={styles.categoryBar}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={this.state.categorias}
            renderItem={({item: rowData}) => {
              return <View>{this.catItem(rowData)}</View>;
            }}
            keyExtractor={(item, index) => index}
          />
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
  navBar: {
    backgroundColor: 'steelblue',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imgCart: {
    height: 40,
    width: 40,
  },
  cartButton: {
    position: 'absolute',
    right: 20,
  },


  
  menu: {
    position: 'absolute',
    alignItems: 'center',
    left: 10,
    right: 10,
    top: 80,
    bottom: 65,
  },
  menuProductItem: {
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderWidth: 0.4,
    height: 150,
    width: 370,
  },
  menuProductName: {
    position: 'absolute',
    fontSize: 25,
    fontWeight: 'bold',
    left: 25,
    top: 15,
  },
  menuProductPrice: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
    right: 30,
  },
  menuProductDescrib: {
    position: 'absolute',
    fontSize: 15,
    color: 'gray',
    left: 30,
    top: 50,
    width: 180,
    height: 75,
  },



  categoryBar: {
    position: 'absolute',
    borderColor: 'black',
    backgroundColor: 'silver',
    borderTopWidth: 1,
    height: 65,
    left: 0,
    right: 0,
    bottom: 0,
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  categoryItem: {
    backgroundColor: 'gray',
    textAlign: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    width: 160,
    marginHorizontal: 10,
    marginTop: 5,
  },
});
