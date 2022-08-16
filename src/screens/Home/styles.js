import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #fff;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

// VIEW

export const ViewArea = styled.View`
    flex: 1;
    height: 100%;
    width: 100%;
    background-color: red;
`;

export const InputButton = styled.TouchableOpacity`
    height: 100px;
    width: 100px;
`;

export const InputText = styled.TextInput`
    flex: 1;
    font-size: 16px;
    margin-left: 10px;
`;

export const SimpleText = styled.Text`
    flex: 1;
    font-size: 16px;
    margin-left: 10px;
`;
