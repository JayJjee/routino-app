import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from 'react-native';
import images from '../../assets/fields/images.js';

const FlatlistView = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  flex: 1;
  flex-direction: row;
  align-items: center;

`;



const ViewArea = styled.TouchableOpacity`
  width: 100px;
  height: 100%;
  padding: 20px;
  flex: 1;
  align-items: center;
`;

const TextArea = styled.View`
  flex: 1;
`;

const TextParam = styled.Text`
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
`;

const ThemeIcon = styled.Image`
  height: 100px;
  width: 100px;
  flex: 1;
  aspect-ratio: 1;
`;

const StatusBar = styled.View`

`;

const StatusBarStyle = (cor) => {
  return StyleSheet.create({
    statusBar: {
      height: 10,
      width: 80,
      borderRadius: 20,
      backgroundColor: cor
    }
  })
}

export default ({ item, addOnPress }) => {
  const navigation = useNavigation();
  const statusStyle = StatusBarStyle(item.cor);
  const idName = item.nome
  return (

    <ViewArea onPress={addOnPress}>
      <FlatlistView>
        {/* {!!item.fotoPet && <ImagePet source={{ uri: item.fotoPet }} />} */}
        {!!item && <ThemeIcon source={images[idName]} />}

      </FlatlistView>
      <TextArea>
        <TextParam>{item.nome}</TextParam>
        <StatusBar style={statusStyle.statusBar}></StatusBar>
      </TextArea>
    </ViewArea>





  );
};
