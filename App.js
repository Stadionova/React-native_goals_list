// import {StatusBar} from 'expo-status-bar';
import {useState} from "react";

import {GoalsList} from "./components/GoalsList";
import {Input} from "./components/Input";
import {Title} from "./components/Title";
import {Button, StyleSheet, View} from 'react-native';

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
                <Title styles={{marginLeft: 20, marginRight: 10}} text='KING FOR A DAY'/>
                <Title styles={styles.title} text='BE READY TO REACH YOUR GOAL'/>
            </View>
            <Input fetchInputChanges={fetchInputChanges}/>
            <View>
                <View style={styles.footer}>
                    <Button onPress={addGoal} title={'CLICK TO GET GOAL FOR A DAY'}/>
                </View>
                <View style={styles.footer}>
                    <Button title={'OK'}/>
                </View>
            </View>
            <GoalsList goalsList={goalsList}/>
        </View>
    );
}

const styles = StyleSheet.create({
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
    footer: {
        marginLeft: 20,
        borderColor: 'blue',
        borderWidth: 2,
        padding: 8,
        backgroundColor: 'pink',
        textDecorationColor: 'white',
        marginBottom: 20,
        borderRadius: 10
    }
});
