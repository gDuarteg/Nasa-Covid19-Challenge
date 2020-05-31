import { StyleSheet } from "react-native";
import { colors, fonts, metrics, general } from "../../../styles";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
      },
     
      SubmitButtonStyle: {
  
        fontSize:25,
        marginTop:20,
        paddingTop:15,
        paddingBottom:15,
        paddingHorizontal:30,
        marginLeft:30,
        marginRight:30,
        marginBottom:30,
        backgroundColor:'#00BCD4',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
      },
     
      TextStyle:{
          color:'#fff',
          textAlign:'center',
      },

      container: {
        padding: 8,
        backgroundColor: "#ffffff",
      },

      rowContainer: {
        paddingTop: 10,
        paddingBottom: 5,  
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
      }

});

export default styles;