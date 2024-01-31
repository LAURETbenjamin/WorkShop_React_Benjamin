import { React } from 'react'
import { Text, TouchableOpacity, View } from "react-native"

export const Screen1 = ({navigation}) => {
    return (
        <View>
            <Text>
                Hello world
            </Text>
            <TouchableOpacity onPress={() => navigate.navigation("screen2")}>
                click
            </TouchableOpacity>
        </View>
    );
}