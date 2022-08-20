import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const FlatlistView = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  flex: 1;
  flex-direction: row;
  align-items: center;

`;

const ViewArea = styled.View`
  width: 100px;
  height: 100%;
  padding: 20px;
  flex: 1;
  align-items: center;
`;

const StatusBar = styled.TouchableOpacity`
  height: 10px;
  width: 80px;
  border-radius: 20px;
  background-color: #56C3CA;
  margin-bottom: 20px;
`;

const TextArea = styled.View`
  flex: 1;
`;

const TextParam = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  text-align: center;
`;

const ThemeIcon = styled.Image`
  height: 100px;
  width: 100px;
  flex: 1;
  aspect-ratio: 1;
`;

export default ({ item }) => {
  const navigation = useNavigation();
  return (

    <ViewArea>
      <FlatlistView>
        {/* {!!item.fotoPet && <ImagePet source={{ uri: item.fotoPet }} />} */}
        <ThemeIcon source={require('../../assets/binary-code.png')} />

      </FlatlistView>
      <TextArea>
        <TextParam>Name</TextParam>
        <StatusBar></StatusBar>
      </TextArea>
    </ViewArea>





  );
};
