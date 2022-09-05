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
    flex: 1;
    width: 100%;
    margin-bottom: 10px;
    background-color: #EAEAEA;
    align-items: center;
`;

export const TitleIconView = styled.View`
    flex: 1;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const ArticlesArea = styled.View`
    flex: 1;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    background-color: #EAEAEA;
`;

export const ScrollViewHome = styled.ScrollView`
    width: 100%;
    height: 100%;
    flex: 1;
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

export const GoToSearch = styled.TouchableOpacity`
    margin-top: 10%;
    margin-left: 50%;
    align-items: center;
    justify-content: center;
    /* height: 80px; */
`;

export const ImageSearch = styled.Image`
    width: 35px;
    height: 35px;
    aspect-ratio: 1;
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
    margin-top: 10px;
`;

export const TitleText = styled.Text`
    font-size: 22px;
    font-weight: bold;
`;


export const SimpleText = styled.Text`
    font-size: 20px;
    margin-top: 20px;
`;

export const IconLoading = styled.ActivityIndicator`
`;

export const AllView = styled.View`
    flex: 1;
`;





