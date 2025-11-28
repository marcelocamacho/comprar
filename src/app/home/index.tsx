import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { styles } from "./styles";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Filter } from "../components/Filter";
import { FilterStatus } from "../types/FilterStatus";
import { Item } from "../components/Item";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />
      <View style={styles.form}>

        <Input placeholder="Nome de usuário" />
        <Button title={"Entrar"} activeOpacity={0.8} onPress={() => console.log("Entrar")} />

      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map((status) => (
              <Filter key={status} status={status} isActive={false} />
            ))
          }
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>


        <ScrollView>
          {
            Array.from({ length: 100 }).map((value, index) => (
              <Item
                key={index}
                data={{ status: FilterStatus.DONE, description: "Café" }}
                onRemove={() => console.log("remover")}
                onStatus={() => console.log("status")}
              />
            )
            )
          }
        </ScrollView>



      </View>
    </View>
  )
}

