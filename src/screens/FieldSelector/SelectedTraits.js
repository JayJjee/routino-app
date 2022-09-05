import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import images from '../../assets/fields/images.js';

const ViewArea = styled.View`
  width: 100px;
  height: 100px;
  margin-left: 20px;
  align-items: center;
`;

const FlatlistView = styled.TouchableOpacity`
  height: 90px;
  width: 100px;
  border-radius: 100px;
  flex-direction: row;
  align-items: center;
`;

const CloseButton = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  margin-left:70px;
  justify-content: flex-end;
`;

const TextArea = styled.View`
  width: 100px;
  height: 100px;
  margin-top: 5px;
  align-items: center;
  /* justify-content: center; */
`;

const StatusBar = styled.View`

`;

const TextParam = styled.Text`
  font-size: 14px;
  text-align: center;
`;

const ThemeIcon = styled.Image`
  height: 100px;
  width: 100px;
  margin-bottom: 10px;
  aspect-ratio: 1;
`;

const StatusBarStyle = (cor) => {
  console.log(">>>>>>>>>>>>", cor);
  return StyleSheet.create({
    statusBar: {
      height: 10,
      width: 80,
      borderRadius: 20,
      backgroundColor: cor
    }
  })
}

export default ({ item, removeOnPress }) => {
  const navigation = useNavigation();
  const idName = item.nome
  const statusStyle = StatusBarStyle(item.cor);

  return (

    <ViewArea>
      <CloseButton onPress={removeOnPress}>
        <AntDesign name="closecircle" size={25} color="gray" />
      </CloseButton>
      <FlatlistView onPress={removeOnPress}>
        {/* {!!item.fotoPet && <ImagePet source={{ uri: item.fotoPet }} />} */}
        {!!item && <ThemeIcon source={images[idName]} />}
        {/* <ThemeIcon source={require('../../assets/binary-code.png')} /> */}
      </FlatlistView>
      <TextArea>
        <TextParam>{item.nome}</TextParam>
        <StatusBar style={statusStyle.statusBar}></StatusBar>
      </TextArea>
    </ViewArea>
  );
};
