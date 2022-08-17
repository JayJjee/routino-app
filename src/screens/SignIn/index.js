import React from "react";
import { Container, ViewArea, HeaderArea, ImageProfile, Title, HandleButton, HandleButtonText } from "./styles";
import SignInput from "../../components/SignInput";
import { LinearGradient } from "expo-linear-gradient";

export default () => {

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
                <Title>ROUTINO</Title>
                <ImageProfile source={{ uri: "https://cdn-icons.flaticon.com/png/512/4526/premium/4526288.png?token=exp=1660705138~hmac=c3748ab04f7bff6529537321632d0ca6" }} />
                <SignInput
                    placeholder="Digite seu e-mail"
                />
                <SignInput
                    placeholder="Digite sua senha"
                />
                <HandleButton>
                    <HandleButtonText>Entrar</HandleButtonText>
                </HandleButton>
                <HandleButton>
                    <HandleButtonText>Cadastre-se</HandleButtonText>
                </HandleButton>

            </ViewArea>

        </Container>
    );
};