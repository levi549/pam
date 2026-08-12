import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

export default function Page2_button({ email, senha ,navigation}) {
function aceessar(email,senha){
    if (email === '1' && senha === '1') {
        console.log("Login feito com sucesso")
}else{
    console.log("Email ou senha incorretos")
}
}


return(
    <View style={styles.container}>
        <View style={styles.botoes}>
            <TouchableOpacity style={styles.botao1} onPress={() => aceessar(email, senha)}>
                <Text style={styles.buttontext1}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao2} onPress={()=> navigation.navigate('page3')}>
                <Text style={styles.buttontext2}>Cadastrar</Text>
            </TouchableOpacity>

        </View>
    </View>


)

}




const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    
    },
botoes:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
},
botao1:{
    width: 120,
    height: 50,
    backgroundColor: '#16C776',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
},
botao2:{
width: 120,
    height: 50,
    borderWidth: 1,
    borderColor: '#16C776',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',

},
buttontext1:{
    color: 'white',
    fontSize: 14,
},
buttontext2:{
    color: 'black',
    fontSize: 14,
}





})