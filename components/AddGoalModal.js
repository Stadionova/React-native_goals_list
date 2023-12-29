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
                />
                <View style={styles.btnsWrapper}>
                    <Button onPress={addGoalHandler} title={'ADD GOAL'}/>
                    <Button onPress={props.closeModal} title={'CANCEL'}/>
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
        position:"absolute",
        top: 160,
        left: 120
    },
    content: {
        marginLeft: 20,
        marginBottom: 16,
        // position: 'absolute',
        // top: 0, bottom: 0
        marginTop: 300,
        zIndex: 1000000000
    },
    btnsWrapper: {
        // flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    }
});