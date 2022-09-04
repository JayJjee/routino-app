import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const ButtonArea = styled.View`
    width: 100%;
    height: 100%;
    flex: 1;
    border-radius: 30px;
    margin-top: 10px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

const ButtonText = styled.Text`
    font-size: 22px;
    font-weight: bold;
`;



export default () => {
  const navigation = useNavigation();
  return (

    <ButtonArea>
        <ButtonText>NÃO HÁ NADA</ButtonText>
    </ButtonArea>

  );
};
