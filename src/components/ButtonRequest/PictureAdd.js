import React from 'react';
import styled from 'styled-components';

const ButtonRequest = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
    border-radius: 8px;
    margin: 5px;
    margin-left: 5px;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.Image`
    width: 25px;
    height: 25px;
    background-color: transparent;
`;

const IconLoading = styled.ActivityIndicator`
`;

export default ({ onPress, isLoading }) => {
    return (
        <ButtonRequest onPress={onPress}>
            {isLoading ? (<IconLoading size="small" color="#ADADAD" />) : (<Icon source={require(`../../assets/pictures.png`)} />)}
        </ButtonRequest>
    );
}

// , value, onChangeText, password
// secureTextEntry={password}

// value={value}
// onChangeText={onChangeText}

