// import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.title}>
                <Text style={styles.text}>KING FOR A DAY</Text>
            </View>
            <View style={styles.content}>
                <TextInput placeholder={'type your real name or nickname'}/>
            </View>
            <View style={styles.footer}>
                <Button title={'CLICK TO GET GOAL FOR A DAY'}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginLeft: 20,
        padding: 16
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
        textDecorationColor: 'white'
    }
});
