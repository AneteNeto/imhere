import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Button } from '../../components/Button';
import { Participant } from '../../components/Participant';

import { styles } from './style';
export function Home(){
  return(
    <View style={styles.container}>
        <Text style={styles.eventName}>Nome do Evento</Text>
        <Text style={styles.eventDate}> Sexta,24 de Setembro de 2022</Text>
        <View style={styles.t}>
            <TextInput
            style={styles.input}
            placeholder='Nome do participante'
            placeholderTextColor={'#6B6B6B'}
            />
            <Button text='+'/>
        </View>
        <Participant name='BLABLABLA'/>
        <Participant name='BLABLABLA'/>
        <Participant name='BLABLABLA'/>
        <Participant name='BLABLABLA'/>

    </View>
  )
}