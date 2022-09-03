import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { auth, db} from "../../../firebase";

const ButtonArea = styled.TouchableOpacity`
    width: 100%;
    flex: 1;
    border-radius: 30px;
    margin-bottom: 10px;
    margin-top: 10px;
    background-color: #fff;
    align-items: center;
`;

const ButtonText = styled.Text`
    font-size: 16px;
    margin-top: 5px;
`;

const StatusBarH = styled.View`
  height: 10px;
  width: 80%;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: #56C3CA;
`;

export default ({ item }) => {

  
  const navigation = useNavigation();
  return (

    <ButtonArea>
        <ButtonText>{item.Titulo}</ButtonText>
        <StatusBarH></StatusBarH>
    </ButtonArea>

  );
};
