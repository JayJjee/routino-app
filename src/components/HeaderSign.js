import React from "react";
import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient";

const HeaderArea = styled.View`
    /* flex: 1; */
    height: 100px;
    width: 100%;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    border-color: black;
    border-width: 0.2px;
      
`

export const Title = styled.Text`
    font-size: 40px;
    margin-top: 10px;
    margin-left: 20px;
    font-weight: bold;
    opacity: 0;
`;

export const TitleProps = styled.Text`
    font-size: 40px;
    margin-left: 20px;
    margin-top: 10px;
    font-weight: bold;
    background-color: transparent;
`;

export default () => {

    return (
        <HeaderArea>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#2CAD58', '#742CAD', '#FF0909']}
                style={{
                    height: 10,
                    width: 350,
                    marginTop: 55,
                    borderRadius: 20,
                }}
            >
            </LinearGradient>
        </HeaderArea>
    );
};