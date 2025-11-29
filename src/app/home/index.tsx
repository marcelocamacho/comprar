import { Image, Text, TouchableOpacity, View, ScrollView, FlatList, Alert, Keyboard } from "react-native";
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
    Keyboard.dismiss()
    const newItem = {
      id: Math.random().toString().substring(2),
      description,
      status: FilterStatus.PENDING
    }

    await itemsStorage.add(newItem)
    await itemsByStatus()
    Alert.alert("Adicionar", `Adicionado ${description}.`)
    setDescription('')
    setFilter(FilterStatus.PENDING)
  }

  async function handleRemove(id: string){
    try{
      await itemsStorage.remove(id)
      await itemsByStatus()
    } catch (error){
      Alert.alert("Erro ao remover item")
    }
  }

  async function handleStatus(id: string){}

  function handleClear(){
    Alert.alert("Limpar", "Tem certeza de remover todos?", [
      {text: "Não", style: "cancel"},
      {text: "Sim", onPress: onClear}
    ])
  }

  async function onClear(){
    try {
      await itemsStorage.clear()
      itemsByStatus()
    } catch (error) {
      console.log(error)
      Alert.alert("Limpar", "Não foi possível remover todos os items.")
    }
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

        <Input 
          placeholder="O que você precisa comprar?"
          onChangeText={setDescription}
          value={description} />
        <Button title={"Adicionar"} activeOpacity={0.8} onPress={handleAdd} />

      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map((status) => (
              <Filter key={status} status={status} isActive={status === filter} onPress={() => setFilter(status)} />
            ))
          }
          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>


        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onRemove={() => handleRemove(item.id)}
              onStatus={() => handleStatus(item.id)}
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

