import styled from "styled-components/native";
import EvilIcons  from 'react-native-vector-icons/EvilIcons';
function SearchProfile() {
  return (
    <>
      <Container>
        <Title>I love Sandla</Title>
        <BlockSearch>
          <Input></Input>
          <EvilIcons name="search" size={60} color="white" />
        </BlockSearch>
      </Container>
    </>
  );
}

const Input = styled.TextInput``;

const BlockSearch = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  border-radius: 10px;
  min-height: 40px;
  min-width: 70%;
  max-width: 70%;
  background-color: black;
`;
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: red;
`;
const Title = styled.Text`
  color: #fff;
  font-size: 28;
`;

export default SearchProfile;
