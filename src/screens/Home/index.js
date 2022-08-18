import React, { useEffect, useState } from "react";
import { Container, ViewArea, SimpleText, Title, HandleButton, HandleButtonText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../firebase";
import Header from "../../components/HeaderRoutino";

export default () => {

    const navigation = useNavigation();

    return (
        <Container>
            
            <Header></Header>

            <ViewArea>
                <SimpleText>Bem vindo ao início</SimpleText>
                <Title>Home</Title>

            </ViewArea>

        </Container>
    );
};