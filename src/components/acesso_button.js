import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';



export default function Acesso_button({navigation}) {


return (
    <View style={styles.container}>
        <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('page2')}>
          
            <Image source={require('../../assets/Google.png')} style={styles.image} />
            <Text style={styles.texto}>Como deseja acessar?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('page3')}>
            <Text style={styles.texto2}>Outras opções</Text>
        </TouchableOpacity>

    </View>
)







}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    },
button: {
    width: 280,
    height: 50,
    backgroundColor: '#16C776',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  image: {
    width: 35,
    height: 35,
    marginLeft: 8,
    marginRight: 45,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  texto: {
    color: 'white',
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2:{
    width:280,
    height: 50,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#16C776',
    borderWidth: 3,
    marginTop: 10,
    
    
  },
  texto2:{
    
    color: 'black',
    fontSize: 14,
    marginTop: 10,
  }
 }
)