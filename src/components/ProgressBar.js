import React from "react";
import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient";

const HeaderArea = styled.View`
    flex: 1;
    height: 100px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    /* border-color: black;
    border-width: 0.2px; */
`;

export default () => {

    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={['#2CAD58', '#742CAD', '#FF0909']}
            style={{
                flex: 1,
                height: 25,
                borderRadius: 20,
                margin: 10,
            }}
        >
        </LinearGradient>
    );
};