import React from 'react';
import styled from 'styled-components';

const InputArea = styled.View`
    width: 80%;
    height: 40px;
    background-color: #fff;
    border-radius: 30px;
    padding-left: 10px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    margin-left: 10px;
`;

export default ({ placeholder }) => {
    return (
        <InputArea>
            <Input
                placeholder={placeholder}
            />
        </InputArea>
    );
}

// , value, onChangeText, password
// secureTextEntry={password}

// value={value}
// onChangeText={onChangeText}

