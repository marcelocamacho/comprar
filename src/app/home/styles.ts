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
        padding: 14,
        paddingTop: 16

    },
    header:{
        width: "100%",
        flexDirection: "row",
        gap: 12,
        borderBottomColor: "#E4E6EC",
        borderBottomWidth: 1,
        paddingBottom: 12
    },
    clearButton:{
        marginLeft: "auto"
    },
    clearText:{
        fontSize: 12,
        color: "#828282",
        fontWeight: 600,
    },
    separator: {
        width: "100%",
        height: 1,
        backgroundColor: "#EEF0F5",
        marginVertical: 16
    },
    listContent:{
        paddingTop: 24,
        paddingBottom: 62
    },
    empty:{
        fontSize: 14,
        color: "#808080",
        textAlign: "center"
    }
})