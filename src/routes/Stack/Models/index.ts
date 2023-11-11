import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type PropsNavigationStack = {
    SearchProfile: undefined,
    DataProfile?: {
        name: string
    }
}

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>