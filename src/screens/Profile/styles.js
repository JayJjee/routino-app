import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #fff;
    flex: 1;
`;

// VIEW

export const TopArea = styled.View`
    height: 100px;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 20px;
    margin-bottom: 10px;
    background-color: #fff;
`;

export const TraitsArea = styled.View`
    height: 180px;
    width: 100%;
    background-color: #EAEAEA;
`;

export const ArticlesArea = styled.View`
    flex: 1;
    margin-top: 20px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    background-color: #EAEAEA;
`;

export const FlatList = styled.FlatList`
    margin-bottom: 5px;
    width: 100%;
    height: 100%;
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

export const HandleButtonText = styled.Text`
    font-size: 16px;
    text-align: center;
`;

export const ImageProfile = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 88px;
`;

export const Title = styled.Text`
    font-size: 23px;
    font-weight: bold;
    margin-left: 25px;
    margin-top: 10px;
`;

export const TitleText = styled.Text`
    font-size: 20px;
    margin-top: 10px;
    text-align: center;
`;


export const SimpleText = styled.Text`
    font-size: 20px;
    margin-top: 20px;
`;

export const ScrollViewProfile = styled.ScrollView`
    width: 100%;
    flex: 1;
`;


