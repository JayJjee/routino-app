import React from 'react';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const InputArea = styled.View`
    width: 80%;
    height: 40px;
    border-radius: 30px;
    margin-bottom: 20px;
    margin-top: 10px;
    padding-left: 20px;
    background-color: #fff;
    flex-direction: row;
    align-items: center;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    margin-left: 10px;
`;

const Icon = styled.Image`
    width: 20px;
    height: 20px;
`;

export default ({ placeholder, value, onChangeText, OnSubmit }) => {
    return (
        <InputArea>
            <Icon source={require('../assets/search.png')} />
            <Input
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                
            />
            <TouchableOpacity onPress={OnSubmit}>
                <AntDesign name="RightCircleOutlined" size={21} color="gray" />
            </TouchableOpacity>
        </InputArea>
    );
}

