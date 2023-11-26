import {StyleSheet, TextInput, View} from "react-native";

export const Input = ({fetchInputChanges}) => {
    return (
        <View style={styles.content}>
            <TextInput onChangeText={fetchInputChanges} placeholder={'write your real name or nickname'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginLeft: 20,
        marginBottom: 16
    },
});