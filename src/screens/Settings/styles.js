import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #EAEAEA;
    flex: 1;
`;

// VIEW

export const ViewArea = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const HeaderArea = styled.View`
    /* flex: 1; */
    height: 100px;
    width: 100%;
    background-color: #fff;
    justify-content: center;
    border-color: black;
    border-width: 0.2px;
      
`

export const HandleButton = styled.TouchableOpacity`
    background-color: #fff;
    width: 80%;
    height: 60px;
    border-radius: 30px;
    margin-bottom: 20px;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;
    flex-direction: row;
`;

export const HandleButtonText = styled.Text`
    flex: 1;
    font-size: 30px;
    text-align: center;
    margin-right: 30px;
    font-weight: bold;
`;

export const Icon = styled.Image`
    width: 35px;
    height: 35px;
`;

export const Title = styled.Text`
    font-size: 40px;
    margin-top: 20px;
    font-weight: bold;
`;

export const SimpleText = styled.Text`
    font-size: 20px;
    margin-top: 20px;
`;



