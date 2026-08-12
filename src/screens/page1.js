import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import Acesso_button from '../components/acesso_button';
export default function page1({navigation}) {

return (
    <View style={styles.container}>
      <Image source={require('../../assets/casual_dog.png')} style={styles.dog} />
      <Text style={styles.texto1}>Ótimo dia!</Text>
      <Text style={styles.texto2}>Como você deseja acessar?</Text>
      <Acesso_button navigation={navigation} />
    </View>
  );


}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    
    },
    dog:{
      width: 300,
      height: 200,
      marginTop: 50,
      resizeMode: 'contain',
    },
    texto1:{
      fontSize: 35,
      marginTop: 20,
    },
    texto2:{
      fontSize: 10,
      
    }
}
)