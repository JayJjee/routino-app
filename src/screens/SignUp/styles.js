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
      
`;

export const ScrollViewSignUp = styled.ScrollView`
    width: 100%;
    height: 100%;
    flex: 1;
`;

export const HandleButton = styled.TouchableOpacity`
    background-color: #8C8C8C;
    width: 40%;
    height: 35px;
    border-radius: 30px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
`;

export const HandleButtonMessage = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;

    margin-bottom: 20px;
`;

export const HandleButtonText = styled.Text`
    font-size: 16px;
    text-align: center;
`;

export const HandleButtonTextBold = styled.Text`
    font-size: 16px;
    text-align: center;
    font-weight: bold;
`;

export const ImageProfile = styled.Image`
    width: 130px;
    height: 130px;
    border-radius: 200px;
    margin-bottom: 40px;
`;

export const Title = styled.Text`
    font-size: 40px;
    margin: 20px;
    text-align: center;
    font-weight: bold;
    opacity: 0;
`;

export const TitleProps = styled.Text`
    font-size: 40px;
    margin: 20px;
    text-align: center;
    font-weight: bold;
    background-color: transparent;
`;


