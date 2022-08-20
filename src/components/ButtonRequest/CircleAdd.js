import React from 'react';
import styled from 'styled-components';

const ButtonRequest = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 30px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    position: absolute;   
    top: 5px;
    right: 5px;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px
`;

const Icon = styled.Image`
    width: 30px;
    height: 30px;
    background-color: transparent;
`;

const IconLoading = styled.ActivityIndicator`
`;

export default ({ onPress, isLoading }) => {
    return (
        <ButtonRequest onPress={onPress}>
            {isLoading ? (<IconLoading size="small" color="#ADADAD" />) : (<Icon source={require('../../assets/plus.png')} />)}
        </ButtonRequest>
    );
}

// , value, onChangeText, password
// secureTextEntry={password}

// value={value}
// onChangeText={onChangeText}

