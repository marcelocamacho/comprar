import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />
      <View style={styles.form}>

        <Input placeholder="Nome de usuário" />
        <Button title={"Entrar"} activeOpacity={0.8} onPress={() => console.log("Entrar")} />

      </View>

      <View style={styles.content}>
        
      </View>
    </View>
  )
}

