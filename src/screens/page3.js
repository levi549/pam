import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity } from 'react-native';
import { useEffect,useState } from 'react'

export default function page3() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    function testarSenha(){
        if(senha !== confirmaSenha){
            alert('As senhas não coincidem');
        }
        else{
            alert('Cadastro realizado com sucesso');
        }
    }
    return(

        <View>
            <Text>Cadastre-se</Text>
            <Text>Informe seu email e crie uma senha</Text>
            <View>
                <Text>E-mail</Text>
                <TextInput 
                placeholder="E-mail" 
                value={email}
                onChangeText={setEmail}
                />
                <Text>Senha</Text>
                <TextInput 
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                />
                <Text>Confirme sua senha</Text>
                <TextInput
                placeholder="Confirme sua senha"
                value={confirmaSenha}
                onChangeText={setConfirmaSenha}
                secureTextEntry
                />
            </View>
            <TouchableOpacity onPress={testarSenha}>
                <Text>cadastrar</Text>
            </TouchableOpacity>
             <Text>-------------Ou continue com------------</Text>
             <View>
                <Image source={require('../../assets/Google.png')} style={styles.image}/>
                <Image source={require('../../assets/Facebook.png')} style={styles.image}/>
            </View>
        </View>   
         )
}

const styles = StyleSheet.create({







}

)