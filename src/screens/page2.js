import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity } from 'react-native';
import page2_button from '../components/page2_button';
import {useState} from 'react';


export default function page2() {

const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
    return(
        <View style={styles.container}>
            <Text style={styles.texto_acesse}>Acesse</Text>
           
            <Text>com E-mail e senha</Text>
            <View style={styles.input}>
            <Text>E-mail</Text>
            <TextInput 
                placeholder="E-mail" 
                style={styles.inputbox}
                value={email}
                onChangeText={setEmail}
            />
            </View>
            <View style={styles.input}>
            <Text>Senha</Text>
            <TextInput 
                placeholder="Senha" 
                secureTextEntry={true}
                style={styles.inputbox}
                value={senha}
                onChangeText={setSenha}
            />
            </View>
            <View>
                <Text>Esqueci minha senha</Text>
            </View>
            <Text>-------------Ou continue com------------</Text>
            <page2_button email={email} senha={senha} />
            <View>
                <Image source={require('../../assets/Google.png')} style={styles.image}/>
                <Image source={require('../../assets/Facebook.png')} style={styles.image}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: '#f0f7ee',
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
    height: 50,


 },
 inputbox:{
    
    color: 'black',
    width: 280,
    height: 50,
    borderRadius: 5,
    marginTop:5
 }





})