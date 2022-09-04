import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons'; 
import { StyleSheet } from 'react-native';
import images from '../../assets/fields/images.js';

const FlatlistView = styled.TouchableOpacity`
  margin-top: 10px;
  width: 100px;
  height: 60px;
  border-radius: 100px;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const CloseButton = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  margin-left:70px;
  justify-content: flex-end;
`;

const ViewArea = styled.View`
  width: 100px;
  height: 100%;
  flex: 1;
  align-items: center;
  margin-left: 50px;
`;

const StatusBar = styled.TouchableOpacity`
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
  margin-top: 20px;
  text-align: center;
`;

const ThemeIcon = styled.Image`
  height: 100px;
  width: 100px;
  flex: 1;
  aspect-ratio: 1;
`;


export default ({item, removeOnPress}) => {
  const navigation = useNavigation();
  const idName = item.nome

  return (

    <ViewArea>
      <CloseButton onPress={removeOnPress}>
        <AntDesign name="closecircle" size={25} color="gray"/>
      </CloseButton>
      <FlatlistView onPress={removeOnPress}>
        {/* {!!item.fotoPet && <ImagePet source={{ uri: item.fotoPet }} />} */}
        {!!item && <ThemeIcon source={images[idName]} />}
        {/* <ThemeIcon source={require('../../assets/binary-code.png')} /> */}
      </FlatlistView>
      <TextArea>
        <TextParam>{item.nome}</TextParam>
        <StatusBar></StatusBar>
      </TextArea>
    </ViewArea>
  );
};
