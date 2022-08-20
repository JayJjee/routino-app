import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const ViewArea = styled.View`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  flex: 1;
  padding: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const FlatlistView = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  flex: 1;
  align-items: center;

`;

const StatusBarH = styled.View`
  height: 10px;
  width: 60px;
  margin-top: 10px;
  border-radius: 20px;
  background-color: #56C3CA;
`;

const StatusBarV = styled.View`
  height: 80px;
  width: 25px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #018598;
`;

const TextParam = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  text-align: center;
`;

const ThemeIcon = styled.Image`
  height: 80px;
  width: 80px;
  aspect-ratio: 1;
`;

export default ({ item }) => {
    const navigation = useNavigation();
    return (

        <ViewArea>
            <FlatlistView>
                {/* {!!item.fotoPet && <ImagePet source={{ uri: item.fotoPet }} />} */}
                <ThemeIcon source={require('../../assets/binary-code.png')} />
                <StatusBarH></StatusBarH>
            </FlatlistView>
            <StatusBarV></StatusBarV>
            
            {/* <StatusBarV></StatusBarV> */}

        </ViewArea>





    );
};
