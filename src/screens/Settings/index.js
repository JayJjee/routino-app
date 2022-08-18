import React, { useEffect, useState } from "react";
import { Container, ViewArea, Icon, HandleButton, HandleButtonText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../firebase";
import Header from "../../components/HeaderRoutino";

export default () => {

    const navigation = useNavigation();

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.navigate("SignIn")
                console.log('Deslogado');
            })
            .catch(error => alert(error.message))
    }

    return (
        <Container>
            <Header></Header>

            <ViewArea>
                <HandleButton>
                    <Icon source={require('../../assets/dark-mode.png')} />
                    <HandleButtonText>Modo Escuro</HandleButtonText>
                </HandleButton>

                <HandleButton>
                    <Icon source={require('../../assets/like.png')} />
                    <HandleButtonText>FeedBack</HandleButtonText>
                </HandleButton>

                <HandleButton>
                    <Icon source={require('../../assets/help.png')} />
                    <HandleButtonText>Ajuda</HandleButtonText>
                </HandleButton>

                <HandleButton onPress={() => handleSignOut()}>
                    <Icon source={require('../../assets/logout.png')} />
                    <HandleButtonText>Sair</HandleButtonText>
                </HandleButton>

            </ViewArea>

        </Container>
    );
};