import AsyncStorage from "@react-native-async-storage/async-storage";

export async function dataUserLocalStorag(){
    const listaSerializada: any = await AsyncStorage.getItem("@listUsers");
    const list = JSON.parse(listaSerializada);
    return list.reverse();
}