import React, {useState, useEffect} from 'react';
import styles from "./styles";
import NumericInput from 'react-native-numeric-input'

import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
  } from 'react-native';



  
export default function Product({ navigation, route }) {
    const { item } = route.params;
    var quantity = 0;
    const [num, setNum] = useState(0);
    useEffect(() => {
        // faz algo
      }, [num]);
    return (
        <ScrollView>
        <View>
            
                <View>
                    <Image style={{width: 400, height: 350}}
                        source={require('../../../assets/potato.png')}
                        />
                    <Text style={{fontSize: 28, margin: 10}}>{item.name}</Text>
                    <Text style={{fontSize: 15, margin: 10, textAlign: 'justify'}}>
                    Percebemos, cada vez mais, que o consenso sobre a necessidade de qualificação nos obriga à análise do processo de comunicação como um todo. Não obstante, a complexidade dos estudos efetuados cumpre um papel essencial na formulação das diversas correntes de pensamento. É claro que o comprometimento entre as equipes faz parte de um processo de gerenciamento do investimento em reciclagem técnica. No entanto, não podemos esquecer que o início da atividade geral de formação de atitudes prepara-nos para enfrentar situações atípicas decorrentes dos paradigmas corporativos.
                    </Text>

                    <View style={styles.rowContainer}>
                        <Text style={{fontSize: 30, paddingRight: 50, paddingTop: 3}}>
                            {item.price}
                        </Text>
                        <NumericInput 
                            value = {0}
                            onChange={value => setNum(value*parseInt(item.price.slice(2), 10))}/>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={{fontSize: 30, paddingRight: 50, paddingTop: 3}}>
                            Total: R${num}
                        </Text>
                    </View>
                    
                    <TouchableOpacity style={styles.SubmitButtonStyle} onPress= {()=>navigation.navigate('Success')} >
                        <Text style={styles.TextStyle}>
                            Comprar!
                        </Text>
                    </TouchableOpacity>

                </View>
            
        </View>
        </ScrollView>
    
    );
}