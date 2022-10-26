import { TouchableOpacity , Text} from 'react-native';
import { styles } from '../Button/style';

type Props={
  text:string;
}
export function Button({text}:Props){

  return(
    <TouchableOpacity style={styles.button} >
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
  );
}