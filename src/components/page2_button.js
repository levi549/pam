import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

export default function page2_button({ email, senha }) {
function aceessar(email,senha){
    if (email === '' && senha === '') {
        alert("Login feito com sucesso")
}
function cadastrar(){

}
return(
    <View style={styles.container}>
        <View style={styles.botoes}>
            <TouchableOpacity style={styles.botao1} onPress={() => aceessar(email, senha)}>
                <Text style={styles.buttontext1}>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao2} onPress={cadastrar}>
                <Text style={styles.buttontext2}>Cadastrar</Text>
            </TouchableOpacity>

        </View>
    </View>


)

}


}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#f0f7ee',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    },
botoes:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center'
},
botao1:{
    width: '48%',
    height: 32,
    backgroundColor: '#16C776',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
},
botao2:{
width: '48%',
    height: 32,
    borderWidth: 1,
    borderColor: '#16C776',
    borderRadius: 4,
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