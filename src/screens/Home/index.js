import React, { useEffect, useState } from "react";
import { Container, ViewArea, HeaderArea, ImageProfile, Title, TitleProps, HandleButton, HandleButtonText } from "./styles";
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
    console.log("To no home");
    return (
        <Container>
            <Header></Header>

            <ViewArea>
                <Title>Email: {auth.currentUser?.email}</Title>
                <Title>Home</Title>
                <HandleButton onPress={() => handleSignOut()}>
                    <HandleButtonText>Sign Out</HandleButtonText>
                </HandleButton>

            </ViewArea>

        </Container>
    );
};