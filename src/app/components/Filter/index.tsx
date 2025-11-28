import { FilterStatus } from "@/app/types/FilterStatus"
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, Text } from "react-native"

type Props = TouchableOpacityProps & {
    status: FilterStatus
    isActive: boolean
}

export function Filter({ status, isActive, ...rest }: Props) {
    return (
        <TouchableOpacity style={[
            styles.container,
            { opacity: isActive ? 1 : 0.5 }]}
            activeOpacity={0.8}
            {...rest} >

            <Text style={styles.title}>
                {status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {},
    title: {
        fontSize: 12,
        fontWeight: 600
    }
})