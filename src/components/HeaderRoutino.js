import React from "react";
import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from '@react-native-masked-view/masked-view';
import { useNavigation } from "@react-navigation/native";

const HeaderArea = styled.TouchableOpacity`
    /* flex: 1; */
    height: 100px;
    width: 100%;
    background-color: #fff;
    justify-content: center;
    border-color: black;
    border-width: 0.2px;
      
`

const Title = styled.Text`
    font-size: 40px;
    margin-top: 10px;
    margin-left: 20px;
    font-weight: bold;
    opacity: 0;
`;

const TitleProps = styled.Text`
    font-size: 40px;
    margin-left: 20px;
    margin-top: 10px;
    font-weight: bold;
    background-color: transparent;
`;


export default () => {
    const navigation = useNavigation();

    const handleHome = () => {
        navigation.navigate("Home")
    }
    return (
        <HeaderArea onPress={() => handleHome()}>
            <MaskedView maskElement={<TitleProps>ROUTINO</TitleProps>}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={['#2CAD58', '#FF0909']}
                >
                    <Title>ROUTINO</Title>
                </LinearGradient>
            </MaskedView>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#2CAD58', '#742CAD', '#FF0909']}
                style={{
                    height: 10,
                    width: 350,
                    borderRadius: 20,
                    alignSelf: "center"
                }}
            >
            </LinearGradient>

        </HeaderArea>
    );
};