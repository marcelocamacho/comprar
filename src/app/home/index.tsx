import { Image, Text, TouchableOpacity, View, ScrollView, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Filter } from "../../components/Filter";
import { FilterStatus } from "../../types/FilterStatus";
import { Item } from "../../components/Item";
import { useEffect, useState } from "react";
import { itemsStorage, ItemStorage } from "@/storage/itemsStorage";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]
const ITEMS = [
  { id: "1", status: FilterStatus.DONE, description: "1 pacote de café" },
  { id: "2", status: FilterStatus.PENDING, description: "1 pacote de macarrão" },
  { id: "3", status: FilterStatus.DONE, description: "1 pacote de açucar" },
  { id: "4", status: FilterStatus.DONE, description: "1 pote de manteiga" },
  { id: "5", status: FilterStatus.DONE, description: "1 cx de leite" },
  { id: "6", status: FilterStatus.PENDING, description: "1 cacho de banana" },


]
export default function Home() {

  const [filter, setFilter] = useState(FilterStatus.PENDING)
  const [description, setDescription] = useState("")
  const [items, setItems] = useState<ItemStorage[]>([])

  async function handleAdd() {
    if (!description.trim()) {
      Alert.alert("Adicionar", "Informe a descrição para adicionar.")
    }
    const newItem = {
      id: Math.random().toString().substring(2),
      description,
      status: FilterStatus.PENDING
    }

    await itemsStorage.add(newItem)
    await itemsByStatus()
  }

  async function itemsByStatus() {
    try {
      const response = await itemsStorage.getByStatus(filter)
      setItems(response)
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível filtrar os itens.")
    }
  }

  useEffect(() => {
    itemsByStatus()
   }, [filter])

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />
      <View style={styles.form}>

        <Input placeholder="O que você precisa comprar?" onChangeText={setDescription} />
        <Button title={"Adicionar"} activeOpacity={0.8} onPress={handleAdd} />

      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map((status) => (
              <Filter key={status} status={status} isActive={status === filter} onPress={() => setFilter(status)} />
            ))
          }
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>


        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onRemove={() => console.log(item.id)}
              onStatus={() => console.log(item.status)}
            />)}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui.</Text>}
        />
      </View>
    </View>
  )
}

