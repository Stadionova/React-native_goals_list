import {StyleSheet, Text, View, Pressable} from "react-native";

export const Goal = ({value, deleteGoal, goal}) => {
    return (
        <Pressable onPress={() => deleteGoal(goal.index)}>
            <View style={styles.goal}>
                <Text style={styles.goalText}>{value}</Text>
            </View>
        </Pressable>
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