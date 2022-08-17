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
`;

export const HeaderArea = styled.View`
    height: 100px;
    width: 100%;
    background-color: #fff;
    align-items: center;
      
`

export const HandleButton = styled.TouchableOpacity`
    background-color: #8C8C8C;
    width: 40%;
    height: 35px;
    border-radius: 30px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
`;

export const HandleButtonText = styled.Text`
    font-size: 16px;
    text-align: center;
`;

export const ImageProfile = styled.Image`
    width: 280px;
    height: 280px;
    border-radius: 200px;
    margin-bottom: 40px;
`;

export const Title = styled.Text`
    font-size: 40px;
    margin: 20px;
    text-align: center;
    font-weight: bold;
`;


