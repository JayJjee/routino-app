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
    /* border-color: black;
    border-width: 0.2px; */
      
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
                    marginTop: 50,
                    borderRadius: 20,
                }}
            >
            </LinearGradient>
        </HeaderArea>
    );
};