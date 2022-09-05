import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import images from '../../assets/fields/images.js';

const ViewArea = styled.View`
  width: 80px;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  margin-bottom: 8px;
  z-index: 1;
`;

const FlatlistView = styled.TouchableOpacity`
  height: 100px;
  width: 80px;
  border-radius: 100px;
`;

const CloseButton = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  top: 20px;
  right: 7px;
  z-index: 1;
`;


const ThemeIcon = styled.Image`
  height: 40px;
  width: 40px;
  aspect-ratio: 1;
`;


export default ({ item, removeOnPress }) => {
  const navigation = useNavigation();
  const idName = item.nome

  return (

    <ViewArea>
      <CloseButton onPress={removeOnPress}>
        <AntDesign name="closecircle" size={21} color="gray" />
        
      </CloseButton>
      <FlatlistView onPress={removeOnPress}>
        {!!item && <ThemeIcon source={images[idName]} />}
      </FlatlistView>
    </ViewArea>
  );
};
