import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: string
}

export function Button({title, ...rest}:Props){
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#2C46B1",
        height: 48,
        width: "100%",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "#FFFFFF",
        fontSize: 14
    }
})