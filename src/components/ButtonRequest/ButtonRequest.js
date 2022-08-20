import React from 'react';
import styled from 'styled-components';

const ButtonRequest = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 20px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

const IconLoading = styled.ActivityIndicator`
`;

export default ({ title, onPress, isLoading }) => {
    return (
        <ButtonRequest onPress={onPress}>
            {isLoading? (<IconLoading size="small" color="black"/>) : (<Title>{title}</Title>)}

        </ButtonRequest>
    );
}

// , value, onChangeText, password
// secureTextEntry={password}

// value={value}
// onChangeText={onChangeText}

