import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export default function DataProfile() {
  return (
    <>
      <Container >
        <Text style={{ backgroundColor: "red" }}>olgggggggggggggggá</Text>
      </Container>
      <TouchableOpacity onPress={()=>{

      }}>
      </TouchableOpacity>
    </>
  );
}




const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-top: 24px;
  align-items: center;
  background-color: #341992;
`;
