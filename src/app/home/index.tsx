import { Image, Text, TouchableOpacity, View, ScrollView, FlatList } from "react-native";
import { styles } from "./styles";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Filter } from "../components/Filter";
import { FilterStatus } from "../types/FilterStatus";
import { Item } from "../components/Item";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]
const ITEMS =  [
  {id: "1", status: FilterStatus.DONE, description: "1 pacote de café"},
  {id: "2", status: FilterStatus.PENDING, description: "1 pacote de macarrão"},
  {id: "3", status: FilterStatus.DONE, description: "1 pacote de açucar"},
  {id: "4", status: FilterStatus.DONE, description: "1 pote de manteiga"},
  {id: "5", status: FilterStatus.DONE, description: "1 cx de leite"},
  {id: "6", status: FilterStatus.PENDING, description: "1 cacho de banana"},


]
export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />
      <View style={styles.form}>

        <Input placeholder="O que você precisa comprar?" />
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
          keyExtractor={(item)=> item.id}
          renderItem={({item})=>(
              <Item
                data={item}
                onRemove={() => console.log("remover")}
                onStatus={() => console.log("status")}
              /> )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={()=> <Text style={styles.empty}>Nenhum item aqui.</Text>} 
        />
      </View>
    </View>
  )
}

