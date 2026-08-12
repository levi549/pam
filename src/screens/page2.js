import { StatusBar } from 'expo-status-bar';
import Checkbox from 'expo-checkbox'
import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity } from 'react-native';
import Page2_button from '../components/page2_button';
import {useState,useEffect} from 'react';


export default function page2({navigation}) {

const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
const [check, setCheck] = useState(false);
useEffect(() => {
    if (check) {
      console.log('Senha salva');
    }
}, [check]);

return(
    <View style={styles.container}>
        <Text style={styles.texto_acesse}>Acesse</Text>
       
        <Text>com E-mail e senha</Text>
            <View style={styles.input}>
            <Text style={styles.text_label}>E-mail</Text>
            <TextInput 
                placeholder="E-mail" 
                style={styles.inputbox}
                value={email}
                onChangeText={setEmail}
            />
            </View>
            <View style={styles.input}>
            <Text style={styles.text_label}>Senha</Text>
            <TextInput 
                placeholder="Senha" 
                secureTextEntry={true}
                style={styles.inputbox}
                value={senha}
                onChangeText={setSenha}
            />
            
            </View>
            <View style={styles.esqueci_senha}>
                <Checkbox style={styles.checkbox} value={check} onValueChange={setCheck} />
                <Text style={{fontSize: 12, marginRight: 55}}>Lembrar senha</Text>
                <Text style={{fontSize: 12}}>Esqueci minha senha</Text>
            </View>
            <View style={{marginTop: 20, }}>
                <Page2_button email={email} senha={senha} navigation={navigation} />
            </View>
            <View style={styles.text2_container}>
                <Text>-------------Ou continue com------------</Text>
            </View>
            
            <View style={styles.images}>
                <Image source={require('../../assets/Google.png')} style={styles.image}/>
                <Image source={require('../../assets/Facebook.png')} style={styles.image}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginLeft:10,
    marginTop: 10,

 },

 texto_acesse:{
    fontSize: 30,
    marginTop: 10,

    
 },
 input:{
    marginTop: 10,
    marginBottom: 10,
    width: 280,
    height: 60,
    



 },
 inputbox:{
    
    color: 'black',
    width: 280,
    height: 50,
    borderRadius: 5,
    marginTop:5,
    placeholderTextColor: '#999',
    backgroundColor: '#E8E8E8'

 },
 text_label:{
    fontSize: 10,
    color: 'black',
    


 },
 images:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,

 },
 text2_container:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,

 },
 esqueci_senha:{
    flexDirection: 'row',

 },
 checkbox:{
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#16C776',
    borderRadius: 5,
    marginRight: 5,

 }
})