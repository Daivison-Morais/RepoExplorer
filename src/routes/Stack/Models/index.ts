import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { User } from "../../../types/user";

export type PropsNavigationStack = {
    SearchProfile: undefined,
    DataProfile?: {
        name: string
    },
    MenuProfiles?: undefined
    
}

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>