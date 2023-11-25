// import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View, FlatList} from 'react-native';
import {useState} from "react";

export default function App() {
    const [inputText, setInputText] = useState('')
    const [goalsList, setGoalsList] = useState([])

    const fetchInputChanges = (inputText) => {
        setInputText(inputText)
    }

    // делать так плохая практика
    // когда новый стэйт основан на предыдущем
    const addGoal = () => {
        // setGoalsList([...goalsList, inputText])
        setGoalsList(currentGoal => [...currentGoal, inputText])
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.titleWrapper}>
                <View style={{marginLeft: 20, marginRight: 10}}>
                    <Text style={styles.text}>KING FOR A DAY</Text>
                </View>
                <View style={styles.title}>
                    <Text style={styles.text}>BE READY TO REACH YOUR GOAL</Text>
                </View>
            </View>
            <View style={styles.content}>
                <TextInput onChangeText={fetchInputChanges} placeholder={'write your real name or nickname'}/>
            </View>
            <View>
                <View style={styles.footer}>
                    <Button onPress={addGoal} title={'CLICK TO GET GOAL FOR A DAY'}/>
                </View>
                <View style={styles.footer}>
                    <Button title={'OK'}/>
                </View>
            </View>
            <View style={styles.goalsListWrapper}>
                <FlatList data={goalsList} renderItem={goal => {
                    return (
                        <View style={styles.goal}>
                            <Text style={styles.goalText}>{goal.item}</Text>
                        </View>
                    )
                }} alwaysBounceVertical={false}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    goalsListWrapper: {
        borderColor: 'red',
        borderWidth: 1,
        padding: 20,
        height: 220,
        width: 200
    },
    goal: {
        marginBottom: 10,
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 5,
        borderRadius: 10
    },
    appContainer: {
        flex: 1,
        // flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleWrapper: {
        // flexDirection: 'row',
        flexDirection: 'column',
        alignItems: 'flex-end',
        // justifyContent: 'space-between',
        paddingBottom: 8
    },
    content: {
        marginLeft: 20,
        marginBottom: 16
    },
    footer: {
        marginLeft: 20,
        borderColor: 'blue',
        borderWidth: 2,
        padding: 8,
        backgroundColor: 'pink',
        textDecorationColor: 'white',
        marginBottom: 20,
        borderRadius: 10
    },
    goalText: {
        color: 'red'
    }
});
