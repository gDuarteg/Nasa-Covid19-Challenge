import React from "react";
import {
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity
} from "react-native";
import { FlatGrid } from 'react-native-super-grid';

import styles from "./styles";
import { useSelector } from "react-redux";

export default function Home({ navigation }) {
  console.log("****************** RODEI PAGINA HOME ******************");
  // const user = useSelector(state => state.user);

  const items = [
    { name: 'TURQUOISE', price: 'R$14,00' }, 
    { name: 'TURQUOISE', price: 'R$14,00' },
    { name: 'TURQUOISE', price: 'R$14,00' },
    { name: 'TURQUOISE', price: 'R$14,00' },
    { name: 'TURQUOISE', price: 'R$14,00' },
    { name: 'TURQUOISE', price: 'R$14,00' }
  ];

  return (
    <View style={styles.page}>
      <View style={styles.body}>
        <View>
          <View>
            <Text style={styles.productText}>Produtos</Text>
          </View>
          <FlatGrid
            itemDimension={130}
            items={items}
            style={styles.gridView}
            // staticDimension={300}
            // fixed
            // spacing={20}
            renderItem={({ item, index }) => (
              <View style={[styles.itemContainer, { backgroundColor: '#bdc3c7' }]}>
                <TouchableOpacity onPress= {()=>navigation.navigate('Product',{ item: item })}>
                  <Image
                  style={{width: 150, height: 130}}
                  source={require("../../../assets/potato.png")}
                  />
                  <View style={styles.productView}>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                  </View>
                </TouchableOpacity>

              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
