// import {StatusBar} from 'expo-status-bar';
import {useState} from "react";

import {GoalsList} from "./components/GoalsList";
import {AddGoalModal} from "./components/AddGoalModal";
import {Title} from "./components/Title";
import {Button, StyleSheet, View} from 'react-native';

export default function App() {
    const [goalsList, setGoalsList] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModalBtnHandler = () => {
        setIsModalVisible(true)
    }
    const closeModalBtnHandler = () => {
        setIsModalVisible(false)
    }

    // делать так плохая практика
    // когда новый стэйт основан на предыдущем
    const addGoal = (inputText) => {
        // setGoalsList([...goalsList, inputText])
        setGoalsList(currentGoal => [...currentGoal, inputText])
        closeModalBtnHandler()
    }

    const deleteGoal = (goalId) => {
        setGoalsList(goalsList.filter((goal, index) => goalId !== index))
    }

    return (
        <View style={styles.appContainer}>
            <Button title='OPEN MODAL' color='red' onPress={showModalBtnHandler}/>
            <View style={styles.titleWrapper}>
                <Title styles={{marginLeft: 20, marginRight: 10}} text='KING FOR A DAY'/>
                <Title styles={styles.title} text='BE READY TO REACH YOUR GOAL'/>
            </View>
            <AddGoalModal visible={isModalVisible} addGoal={addGoal} closeModal={closeModalBtnHandler}/>
            <GoalsList deleteGoal={deleteGoal} goalsList={goalsList}/>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        // flexDirection: 'row',
        backgroundColor: 'pink',
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
