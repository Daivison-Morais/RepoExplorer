import { Linking, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Repo } from "../../types/repo";
import { useNavigation } from "@react-navigation/native";

export default function RepositoryCard(props: Repo) {
  const navigation = useNavigation<any>();

  function extractDateAndTime (dateAndTime: string | undefined) {
    if(dateAndTime){
        const date = new Date(dateAndTime);
        return date.toLocaleString('pt-BR', );
    }else{"carregando"}
  }
  return (
    <>
     <TouchableOpacity 
     activeOpacity={0.7}
     onPress={() => { 
      Linking.openURL(`https://github.com/${props.nameUser}/${props.name}`); 
    }}>
      <Container>
       
                      
        <NameUser>Nome: {props.name}</NameUser>
        {props.description? <NameUser>Descrição: {props.description}</NameUser> : ""}
        <NameUser>Linguagem: {props.language}</NameUser>
        <NameUser>Criação: { extractDateAndTime(props.created_at)}</NameUser>
        <Text>Ultimo push: {extractDateAndTime(props.pushed_at)}</Text>
        
      </Container>
      </TouchableOpacity>
    </>
  );
}

const Text = styled.Text`
  display: flex;
  font-family: OpenSans_400Regular;
  color: white;
  padding: 3px;
  font-size: 22px;
`;

const NameUser = styled.Text`
  display: flex;
  text-align: justify;
  font-family: OpenSans_400Regular;
  color: white;
  padding: 3px;
  font-size: 22px;
`;

const Container = styled.View`
  display: flex;
  justify-content: start;
  align-items: start;
  border-radius: 12px;
  width: 100%;
  padding: 5px;
  background-color: #0d31b3;
  margin-top: 20px;
`;
