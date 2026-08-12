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

        <View style={styles.container}>
            <Text style={{ fontSize: 30,  }}>Cadastre-se</Text>
            <Text style={{ fontSize: 10 }}>Informe seu email e crie uma senha</Text>
            <View>
                <View style={styles.input}>
                <Text style={styles.text_label}>E-mail</Text>
                <TextInput 
                placeholder="E-mail" 
                value={email}
                onChangeText={setEmail}
                style={styles.inputbox}
                />
                </View>
                <View>
                     <Text style={styles.text_label}>Senha</Text>
                <TextInput 
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                style={styles.inputbox}
                />
                </View>
               <View>
                <Text style={styles.text_label}>Confirme sua senha</Text>
                <TextInput
                placeholder="Confirme sua senha"
                value={confirmaSenha}
                onChangeText={setConfirmaSenha}
                secureTextEntry
                style={styles.inputbox}
                />
            </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={testarSenha} style={styles.button}>
                <Text>cadastrar</Text>
            </TouchableOpacity>
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
    backgroundColor: '#ffffff',
 

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
    backgroundColor: '#E8E8E8',

    


 



},
button:{
    width: 280,
    height: 50,
    backgroundColor: '#16C776',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 60,

}
}
)