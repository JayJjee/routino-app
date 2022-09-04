import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import images from '../../assets/fields/images.js';
import { Container } from "./styles";

const FlatlistView = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  flex: 1;
  flex-direction: row;
  align-items: center;

`;

const CloseButton = styled.View`
  width: 20px;
  height: 20px;
`;

const ViewArea = styled.View`
  width: 100px;
  height: 100%;
  padding: 20px;
  margin-left: 20px;
  flex: 1;
  align-items: center;
`;

const StatusBar = styled.View`
  height: 10px;
  width: 80px;
  border-radius: 20px;
  background-color: #56C3CA;
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
  const idName = item.nome
  console.log(images[idName]);

  return (

    <ViewArea>
      <FlatlistView>
        {!!item && <ThemeIcon source={images[idName]} />}
        {/* {images[item.nome] != undefined ? <ThemeIcon source={images[item.nome]} /> : <Container></Container>} */}

      </FlatlistView>
      <TextArea>

        <TextParam>{idName}</TextParam>
        <StatusBar></StatusBar>
      </TextArea>
    </ViewArea>
  );
};
