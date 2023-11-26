import {StyleSheet, Text, View} from "react-native";

export const Goal = ({value}) => {
    return (
        <View style={styles.goal}>
            <Text style={styles.goalText}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    goal: {
        marginBottom: 10,
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 5,
        borderRadius: 10
    },
    goalText: {
        color: 'red'
    }
});