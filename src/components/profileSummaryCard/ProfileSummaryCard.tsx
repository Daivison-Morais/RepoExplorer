import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Entypo from "react-native-vector-icons/Entypo";
import { User } from "../../types/user";
import { useNavigation } from "@react-navigation/native";

export default function ProfileSummaryCard(props: User) {
  const navigation = useNavigation<any>();
  return (
    <>
      <DataUser>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DataProfile", {
              routeParam: props,
            });
          }}
        >
          <Circumference>
            <AvatarUrl
              source={{
                uri: props.avatar_url,
              }}
            ></AvatarUrl>
          </Circumference>
        </TouchableOpacity>

        <Text>{props.name}</Text>
        <Text>{props.login}</Text>
        <Location>
          <Entypo
            name="location-pin"
            color="#620da8"
            style={{ fontSize: 40 }}
          />
          <Text>{props.location}</Text>
        </Location>
      </DataUser>
    </>
  );
}

const Location = styled.View`
  display: flex;
  flex-direction: row;
`;

const Text = styled.Text`
  font-family: OpenSans_400Regular;
  color: white;
  font-size: 22px;
  padding: 1.5px;
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
  width: 100%;
  max-height: 70%;
  padding: 20px;
  background-color: #031246;
  margin-top: 20px;
`;
