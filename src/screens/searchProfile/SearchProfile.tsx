import { TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import styled from "styled-components/native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import ProfileSummaryCard, {
  Text,
} from "../../components/profileSummaryCard/ProfileSummaryCard";
import axios from "axios";
import { User } from "../../types/user";
import { StatusBar } from "expo-status-bar";
import { css } from "styled-components";
import { Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes/Stack/Models";

function SearchProfile() {
  const [dataUser, setDataUser] = useState<User | null>(null);
  const [click, setClick] = useState<boolean>(false);
  const [text, onChangeText] = useState("");
  const [recentSearches, setRecentSearches] = useState<User[]>([]);

  const navigation = useNavigation<PropsStack>();

  async function getDataUser() {
    setClick(true);
    Keyboard.dismiss();
    try {
      const response = await axios.get(`https://api.github.com/users/${text}`);
      setDataUser(response.data);

      listRecentSearches(response.data);
    } catch (error) {
      alert("Perfil não encontrado");
    }
  }

  async function listRecentSearches(dataSearch: User) {
    const exist = recentSearches?.find((value) => value.id === dataSearch?.id);

    if (!exist) {
      setRecentSearches((recentSearches: User[]): User[] => [
        ...recentSearches,
        dataSearch,
      ]);
    }
  }
  useEffect(()=>{
    saveLocalStorag();
  }, [recentSearches])

  async function saveLocalStorag() {
    const serializedList = JSON.stringify(recentSearches);
    await AsyncStorage.setItem("@listUsers", serializedList);
  }

  return (
    <>
      <Container $click={click}>
        <StatusBar backgroundColor="#ADD8E6"></StatusBar>
        <Main>
          <Title>Encontre Perfis</Title>
          <BlockSearch>
            <Input
              onChangeText={onChangeText}
              value={text}
              placeholder="Nome do perfil"
              cursorColor={"#b61dbb"}
              placeholderTextColor={"rgba(223, 212, 223, 0.5)"}
            />
            <TouchableOpacity
              onPress={() => {
                getDataUser();
              }}
            >
              <Contour>
                <EvilIcons name="search" size={50} color="white" />
              </Contour>
            </TouchableOpacity>
          </BlockSearch>
        </Main>
        {click ? (
          <ProfileSummaryCard
            avatar_url={dataUser?.avatar_url}
            location={dataUser?.location}
            name={dataUser?.name}
            login={dataUser?.login}
            id={dataUser?.id}
            followers={dataUser?.followers}
            public_repos={dataUser?.public_repos}
          />
        ) : (
          ""
        )}
        <ButtonTouchableOpacity
          onPress={() => {
            navigation.navigate("MenuProfiles");
          }}
        >
          <Text>Pesquisados recentemente</Text>
        </ButtonTouchableOpacity>
      </Container>
    </>
  );
}
const ButtonTouchableOpacity = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2%;
  border-radius: 12px;
  width: 100%;
  height: 60px;
  background-color: #031246;
`;

const Contour = styled.View`
  border: solid 1px #fff;
  border-radius: 5px;
`;

const Input = styled.TextInput`
  border-radius: 5px;
  padding-left: 4px;
  height: 40px;
  margin-right: 8px;
  font-family: OpenSans_400Regular;
  font-size: 19px;
  border: solid 1px #fff;
  color: white;
  flex: 1;
`;

const BlockSearch = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  margin: 18px 0px;
  border-radius: 10px;
  min-height: 40px;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: OpenSans_500Medium;
  color: #fff;
  font-size: 28px;
  padding: 3px;
`;

const Main = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  width: 100%;
  min-height: 25%;
  padding: 0 15px;
  background-color: #031246;
`;

const Container = styled.View<{ $click?: boolean }>`
  flex: 1;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  background-color: #341992;
  ${(props) =>
    props.$click &&
    css`
      justify-content: start;
      padding-top: 45px;
    `}
`;

export default SearchProfile;
