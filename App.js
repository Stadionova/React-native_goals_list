// import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
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
                <TextInput placeholder={'write your real name or nickname'}/>
            </View>
            <View>
                <View style={styles.footer}>
                    <Button title={'CLICK TO GET GOAL FOR A DAY'}/>
                </View>
                <View style={styles.footer}>
                    <Button title={'OK'}/>
                </View>
            </View>
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
        marginBottom: 20
    }
});
