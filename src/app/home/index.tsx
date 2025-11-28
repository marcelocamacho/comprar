import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Hello, World!</Text>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />

      <Input placeholder="Nome de usuário" />
      <Button title={"Entrar"} activeOpacity={0.8} onPress={()=>console.log("Entrar")}/>
    </View>
  )
}

