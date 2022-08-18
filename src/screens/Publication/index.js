import React, { useEffect, useState } from "react";
import { Container, ViewArea, SimpleText, Title, HandleButton, HandleButtonText } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from '@react-native-masked-view/masked-view';
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../firebase";
import Header from "../../components/HeaderRoutino";

export default () => {

    const navigation = useNavigation();

    return (
        <Container>
            <Header></Header>

            <ViewArea>
                <SimpleText>Faça uma publicação</SimpleText>
                <Title>Publication</Title>

            </ViewArea>

        </Container>
    );
};