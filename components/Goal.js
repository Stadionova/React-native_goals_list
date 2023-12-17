import {StyleSheet, Text, View, Pressable} from "react-native";

export const Goal = ({value, deleteGoal, goal}) => {
    return (
        <View style={styles.goal}>
            <Pressable android_ripple={{color: 'yellow', borderRadius: 10}} onPress={() => deleteGoal(goal.index)}>
                <Text style={styles.goalText}>{value}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goal: {
        marginBottom: 10,
        borderBottomColor: 'black',
        borderWidth: 1,
        // padding: 5,
        borderRadius: 10
    },
    goalText: {
        color: 'red'
    }
});