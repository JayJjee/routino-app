import React from 'react';
import styled from 'styled-components';
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

const IconRight = styled.Image`
    width: 25px;
    height: 25px;
    margin-right: 20px;
`;

export default ({ placeholder, value, onChangeText}) => {
    return (
        <InputArea>
            <Icon source={require('../../assets/search.png')} />
            <Input
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                editable={false}
                
            />
        </InputArea>
    );
}

