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
    width: 52px;
    height: 52px;
    border-radius: 52px;
`;

export const LevelImgView = styled.View`
    align-items: center;
    /* position: absolute;
    top: -20px;
    left: -10px;
    z-index: 1; */
`;

export const LevelText = styled.Text`
    font-size: 13px;
    text-align: center;
`;

export const ViewTitleInput = styled.View`
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #fff;
    border-width: 1px;
    border-color: #fff1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;

export const InputTitle = styled.TextInput`
    width: 100%;
    border-start-start-radius: 8px;
    background-color: #fff;
    font-size: 20px;
    font-weight: bold;
    flex: 1;
    padding-left: 10px;
    margin-left: 5px;
    margin-bottom: 10px;
`;

export const ViewTextInput = styled.View`
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: #fff;
    border-width: 1px;
    border-color: #fff1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;

export const InputText = styled.TextInput`
    width: 100%;
    border-radius: 8px;
    background-color: #fff;
    /* border-color: blue;
    border-top-width: 1px; */
    flex: 1;
    padding-left: 10px;
    margin-bottom: 10px;
`;

export const ViewPostInput = styled.View`
    width: 90%;
    height: 50px;
    border-radius: 8px;
    margin-top: 20px;
    background-color: #ADADAD;
    border-width: 1px;
    border-color: #fff1;
    flex-direction: row;
    align-items: center;
    
`;

export const ScrollViewSignUp = styled.ScrollView`
    width: 100%;
    height: 100%;
    flex: 1;
    padding: 20px;    
`;


// KeyboardAvoidingView



