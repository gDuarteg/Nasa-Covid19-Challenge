import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

import { useSelector } from "react-redux";

export default function InProgress({ navigation }) {
  // const user = useSelector(state => state.user);
  // const [orders, setItems] = useState([
  //   "ITEM 1",
  //   "ITEM 2",
  //   "ITEM 3",
  //   "ITEM 4"
  // ]);
  // useEffect(() => {
  //   // getOrders();
  // }, []);

  // async function getOrders() {
  //   try {
  //     const response = await api.post(`/orders`);
  //     setItems(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // function renderItem(iteorderm) {
  //   return (
  //     <View
  //       style={styles.itemButton}
  //     // onPress={() => {
  //     //   navigation.navigate("profile-item-config", { info2: info2 });
  //     // }}
  //     >
  //       {/* <Text style={styles.itemText}>{order.name}</Text>
  //       <Text style={styles.itemText}>{order.price}</Text>
  //       <Text style={styles.itemText}>{order.data}</Text> */}
  //       <Text style={styles.itemText}>SALADA</Text>
  //       <Text style={styles.itemText}>50</Text>
  //       <Text style={styles.itemText}>20/05/2020</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.page}>
      {/* <Text>FINALIZDOS</Text>
      <View>
        <Text style={styles.itemText}>Nome</Text>
        <Text style={styles.itemText}>Preço</Text>
        <Text style={styles.itemText}>Data</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={orders}
        renderItem={({ item: rowData, index }) => {
          return <View>{(rowData)}</View>;
        }}
        keyExtractor={(item, index) => index.toString()}
      /> */}
    </View>
  );
}
