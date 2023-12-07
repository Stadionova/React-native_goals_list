import {Button, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

export const Input = (props) => {
    const [inputText, setInputText] = useState('')
    const fetchInputChanges = (inputText) => {
        setInputText(inputText)
    }
    const addGoalHandler = () => {
        props.addGoal(inputText)
        setInputText('')
    }
    return (
        <View style={styles.content}>
            <TextInput onChangeText={fetchInputChanges}
                       placeholder={'write your real name or nickname'}
                       value={inputText}
            />
            <Button onPress={addGoalHandler} title={'CLICK TO GET GOAL FOR A DAY'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginLeft: 20,
        marginBottom: 16
    },
});