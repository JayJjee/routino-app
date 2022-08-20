import React from "react";
import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient";

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
                marginLeft: 10,
                marginRight: 10,
            }}
        >
        </LinearGradient>
    );
};