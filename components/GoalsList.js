import {FlatList, StyleSheet, View} from "react-native";

import {Goal} from "./Goal";

export const GoalsList = (props) => {
    return (
        <View style={styles.goalsListWrapper}>
            <FlatList data={props.goalsList}
                      renderItem={goal => <Goal value={goal.item}/>}
                      alwaysBounceVertical={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    goalsListWrapper: {
        borderColor: 'red',
        borderWidth: 1,
        padding: 20,
        height: 220,
        width: 200
    }
});