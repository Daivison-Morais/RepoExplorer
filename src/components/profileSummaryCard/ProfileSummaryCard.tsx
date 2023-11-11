import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Entypo from "react-native-vector-icons/Entypo";
import { User } from "../../types/user";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes/Stack/Models";
export default function ProfileSummaryCard(props: User) {
const navigation = useNavigation<PropsStack>()
  return (
    <>
      <DataUser>
        <TouchableOpacity onPress={() =>{
          navigation.navigate('DataProfile')  
          }}>
        <Circumference>
          <AvatarUrl
            source={{
              uri: props.avatar_url,
            }}
          ></AvatarUrl>
        </Circumference>
        </TouchableOpacity>
        
        <NameUser>{props.name}</NameUser>
        <NameUser>{props.login}</NameUser>
        <Location>
          <Entypo
            name="location-pin"
            color="#620da8"
            style={{ fontSize: 40 }}
          />
          <NameUser>{props.location}</NameUser>
        </Location>
      </DataUser>
    </>
  );
}

const Location = styled.View`
  display: flex;
  flex-direction: row;
`;

const NameUser = styled.Text`
  font-family: OpenSans_400Regular;
  color: white;
  font-size: 25px;
  padding: 4px;
`;

const Circumference = styled.View`
  border-radius: 112px;
  border: solid 4px #620da8;
`;

const AvatarUrl = styled.Image`
  width: 220px;
  height: 220px;
  object-fit: contain;
  border-radius: 110px;
`;
const DataUser = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
  width: 90%;
  max-height: 70%;
  padding: 20px;
  background-color: #031246;
  margin-top: 20px;
`;
