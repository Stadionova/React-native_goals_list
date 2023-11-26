import {Text, View} from "react-native";

export const Title = ({text, styles}) => {
    return (
        <View style={styles}>
            <Text>{text}</Text>
        </View>
    )
}