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
        {props.location ? (
          <Location>
            <Entypo
              name="location-pin"
              color="#620da8"
              style={{ fontSize: 40 }}
            />
            <Text>{props.location}</Text>
          </Location>
        ) : (
          ""
        )}
        {props.typeProfile ? (
          <MoreData>
            <Bar></Bar>
            <Text>Id: {props?.id}</Text>
            <Text>Seguidores: {props?.followers?.toString()}</Text>
            <Text>Repositórios públicos: {props?.public_repos}</Text>
          </MoreData>
        ) : (
          ""
        )}
      </DataUser>
    </>
  );
}

export const MoreData = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
  width: 100%;
  background-color: #031246;
`;

export const Bar = styled.View`
  height: 2px;
  width: 80%;
  background-color: #620da8;
`;

const Location = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Text = styled.Text`
  text-align: center;
  font-family: OpenSans_400Regular;
  color: white;
  font-size: 21px;
  padding: 0.5px;
`;

const Circumference = styled.View`
  border-radius: 112px;
  border: solid 4px #620da8;
`;

const AvatarUrl = styled.Image`
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 110px;
`;
const DataUser = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
  width: 100%;
  padding: 10px;
  background-color: #031246;
  margin-top: 20px;
`;
