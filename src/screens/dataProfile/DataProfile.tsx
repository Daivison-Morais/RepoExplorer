import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import ProfileSummaryCard from "../../components/profileSummaryCard/ProfileSummaryCard";
import React, { useState, useEffect } from "react";
import { User } from "../../types/user";
import axios from "axios";
import { Title } from "../searchProfile/SearchProfile";
import { FlatList } from "react-native";
import RepositoryCard from "../../components/repositories/RepositoryCard";

export default function DataProfile(props: User) {
  const { routeParam } = props?.route?.params;
  const [dataRepo, setDataRepo] = useState<any>(null);

  useEffect(() => {
    getDataRepositories();
  }, []);

  async function getDataRepositories() {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${routeParam.login}/repos`
      );
      setDataRepo(response.data);
    } catch (error) {
      alert("erro ao carregar dados");
    }
  }

  return (
    <>
      <Container>
        <ScrollView style={{flex: 1, width: "100%"}}>
          <ProfileSummaryCard
            avatar_url={routeParam?.avatar_url}
            location={routeParam?.location}
            name={routeParam?.name}
            login={routeParam?.login}
            followers={routeParam?.followers}
            id={routeParam?.id}
            public_repos={routeParam.public_repos}
          />
          <TouchableOpacity onPress={() => {}}></TouchableOpacity>

          <MoreData>
            <Bar></Bar>
            <Text>Id: {routeParam?.id}</Text>
            <Text>Seguidores: {routeParam?.followers?.toString()}</Text>
            <Text>Repositórios públicos: {routeParam?.public_repos}</Text>
          </MoreData>
          <CardRepositories>
            <Bar></Bar>
            <Title>Repositórios</Title>
            
            <FlatList
              data={dataRepo}
              renderItem={({ item }) => (
                <RepositoryCard
                  id={item.id}
                  name={item.name}
                  public_repos={item.public_repos}
                  description={item.description}
                  language={item.language}
                  created_at={item.created_at}
                  pushed_at={item.pushed_at}
                  nameUser={routeParam.login}
                  

                />
              )}
              keyExtractor={(item) => item.id}
            />
            
          </CardRepositories>
        </ScrollView >
      </Container>
    </>
  );
}

const ScrollViews = styled.ScrollView`
  flex: 1;
  
  width: 100%;
  
`;
const MoreData = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
  width: 100%;
  background-color: #031246;
`;

const Bar = styled.View`
  height: 2px;
  width: 80%;
  background-color: #620da8;
`;
const Text = styled.Text`
  font-family: OpenSans_400Regular;
  color: white;
  font-size: 21px;
  padding: 4px;
`;

const CardRepositories = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  width: 100%;
  max-height: 100%;
  padding: 0 5px;
  overflow: hidden;
  background-color: #031246;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 15px;
  width: 100%;
  align-items: center;
  background-color: #341992;
`;
