import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

export function Input({...rest}: TextInputProps){
    return(
        <TextInput style={styles.container} />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 16,
        height: 48,
        width: "100%",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#C3C5CB",
    }
})