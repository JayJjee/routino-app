import React, { useEffect, useState } from "react";
import { Container, ViewArea, HeaderArea, ImageProfile, Title, TitleProps, HandleButton, HandleButtonText } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../firebase";

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

            <HeaderArea>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    colors={['#2CAD58', '#742CAD', '#FF0909']}
                    style={{
                        height: 15,
                        width: 350,
                        marginTop: 55,
                        borderRadius: 20,
                    }}
                >
                </LinearGradient>
            </HeaderArea>

            <ViewArea>
                <Title>Email: {auth.currentUser?.email}</Title>
                <HandleButton onPress={() => handleSignOut()}>
                    <HandleButtonText>Sign Out</HandleButtonText>
                </HandleButton>

            </ViewArea>

        </Container>
    );
};