import { TouchableOpacity, Text } from "react-native";
import { styles } from './styles'
import { Avatar } from "../avatar";

export function Contact(){
    return <TouchableOpacity>
        <Avatar name="Cidiney" image={require("@/assets/smiley.png")}/>
        <Text style={styles.name}>Cidiney</Text>
    </TouchableOpacity>
}