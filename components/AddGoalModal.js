import {Button, StyleSheet, TextInput, View, Modal, Image} from "react-native";
import {useState} from "react";

export const AddGoalModal = (props) => {
    const [inputText, setInputText] = useState('')
    const fetchInputChanges = (inputText) => {
        setInputText(inputText)
    }
    const addGoalHandler = () => {
        props.addGoal(inputText)
        setInputText('')
    }
    return (
        <Modal visible={props.visible} animaionType='slide'>
            <Image style={styles.image} source={require('../assets/images/favicon.png')}/>
            <View style={styles.content}>
                <TextInput onChangeText={fetchInputChanges}
                           placeholder={'type your goal'}
                           value={inputText}
                           style={styles.input}
                />
                <View style={styles.btnsWrapper}>
                    <Button color='red' onPress={addGoalHandler} title={'ADD GOAL'}/>
                    <Button color='blue' onPress={props.closeModal} title={'CANCEL'}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        margin: 20,
        position: "absolute",
        top: 160,
        left: 120
    },
    input: {
        borderColor: 'red',
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        padding: 5,
        borderRadius: 10
    },
    content: {
        marginBottom: 16,
        marginTop: 300
    },
    btnsWrapper: {
        // flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    }
});