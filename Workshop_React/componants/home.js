import { Button, View } from "react-native"

export const Home = ({navigation}) => {
    <View>
      <Text>
        Hello there!!
      </Text>
      <TouchableOpacity>
        <Text>
          Here!!
        </Text>
      </TouchableOpacity>
      <ButtonNew/>
      <TextInput/>
      <Button onPress={() => navigation.navigate("screen2")}>
      </Button>
    </View>
}