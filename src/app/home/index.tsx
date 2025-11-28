import { Image, Text, TouchableOpacity, View, ScrollView, FlatList } from "react-native";
import { styles } from "./styles";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Filter } from "../components/Filter";
import { FilterStatus } from "../types/FilterStatus";
import { Item } from "../components/Item";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]
const ITEMS =  Array.from({ length: 100 }).map((_, index) => String(index) )
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


        <FlatList
          data={ITEMS}
          keyExtractor={(item)=> item}
          renderItem={({item})=>(
              <Item
                data={{ status: FilterStatus.DONE, description: item }}
                onRemove={() => console.log("remover")}
                onStatus={() => console.log("status")}
              /> )
          }
        />
      </View>
    </View>
  )
}

