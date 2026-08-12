import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { useEffect } from 'react';
export default function splash_screen({navigation}) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('page1'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logotipo.png')} style={styles.logo} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09db68',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
     width: 200,
    height: 100,
    resizeMode: 'contain',
  }
});
