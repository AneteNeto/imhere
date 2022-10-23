import { View, Text, TextInput } from 'react-native';

import { styles } from './style';
export function Home(){
  return(
    <View style={styles.container}>
        <Text style={styles.eventName}>Nome do Evento</Text>
        <Text style={styles.eventDate}> Sexta,24 de Setembro de 2022</Text>
        <TextInput
        style={styles.input}
        placeholder='Nome do participante'
        placeholderTextColor={'#6B6B6B'}
        />
    </View>
  )
}