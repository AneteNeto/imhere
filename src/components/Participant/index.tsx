import { View, Text } from 'react-native';
import { Button } from '../Button';
import { styles } from '../Participant/style';

type props={
  name:string
}
export function Participant({name}:props){
  return(
    <View style={styles.container}>
      <Text style={styles.nameParticipant}>{name}</Text>
      <Button text='-'/>
    </View>

  );
}