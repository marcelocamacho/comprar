import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#d0d2d8",
        paddingTop: 62,
    },
    form:{
        width: "100%",
        padding: 24,
        gap: 7,
        marginTop: 42
    },
    text: {
        fontSize: 32,
        fontWeight: "bold"
    },
    logo: {
        width: 134,
        height: 34
    },
    content:{
        flex: 1,
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 10,
        marginTop: 24,
        padding: 14
    },
})