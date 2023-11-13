import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ProfileSummaryCard from "../../components/profileSummaryCard/ProfileSummaryCard";
import { dataUserLocalStorag } from "../../utils/DataProfileUtils";
import { Title } from "../searchProfile/SearchProfile";
import { User } from "../../types/user";
import styled from "styled-components/native";

export default function MenuProfiles() {
  const [dataProfiles, setDataProfiles] = useState<User[] | any>([]);
  useEffect(() => {
    teste();
  }, []);
  async function teste() {
    const datas = await dataUserLocalStorag();

    setDataProfiles((dataProfiles: User[]): User[] => [
      ...dataProfiles,
      ...datas,
    ]);
  }

  return (
    <>
      {dataProfiles.length > 0 ? (
        <Container>
          <Title>Perfis Visualizados</Title>
          <FlatList
          style={{width: '90%'}}
            data={dataProfiles}
            renderItem={({ item }) => (
              <ProfileSummaryCard
                avatar_url={item?.avatar_url}
                location={item?.location}
                name={item?.name}
                login={item?.login}
                id={item?.id}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </Container>
      ) : (
        <Container>
          <Text>Sem perfis até o momento :/</Text>
        </Container>
      )}
    </>
  );
}

const CardsProfiles = styled.FlatList`
  font-family: OpenSans_400Regular;
  color: white;
  font-size: 22px;
  padding: 1.5px;
`;

const Text = styled.Text`
  font-family: OpenSans_400Regular;
  color: white;
  font-size: 22px;
  padding: 1.5px;
`;
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 100%;
  padding-top: 23px;
  background-color: #341992;
`;
