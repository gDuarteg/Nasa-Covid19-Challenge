import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { useSelector, useDispatch } from "react-redux";

export default function QRScanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const order = useSelector(state => state.order);
  const dispatch = useDispatch();

  console.log("****************** RODEI QR SCANNER ******************");
  console.log("---------------- ID MAQUINA --------------");
  console.log(order.machineId);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(
      `Bar code with type ${type} and data ${data} has been scanned!`
    );
    dispatch({ type: "SAVE_MACHINE_ID", payload: data });
    navigation.navigate("Payment");
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.page}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.box}></View>
      {/* {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "black"
  },
  body: {
    position: "absolute"
  },
  box: {
    alignSelf: "center",
    borderWidth: 1.5,
    borderColor: "red",
    height: 150,
    width: 150
  }
});
