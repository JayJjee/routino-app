import React, { useEffect, useState } from "react";
import { Container, ViewArea, HeaderArea, ImageProfile, Title, TitleProps, HandleButton, HandleButtonText } from "./styles";
import SignInput from "../../components/SignInput";
import HeaderSign from "../../components/HeaderSign";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from '@react-native-masked-view/masked-view';
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default () => {

    const navigation = useNavigation();
    const [email, setEmailField] = useState('');
    const [password, setPasswordField] = useState('');

    const handleSignClick = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logado com o email: ', user.email);
            })
            .catch(error => alert(error.message))
    };

    const handleRegisterClick = () => {
        navigation.reset({
            routes: [{ name: 'SignUp' }]
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                const uid = user.email
                console.log(uid)
                navigation.reset({
                    routes: [{ name: 'MainTab' }]
                });
            }
        })

        return unsubscribe;
    }, [])

    return (
        <Container>
            <HeaderSign></HeaderSign>

            <ViewArea>
                <MaskedView maskElement={<TitleProps>ROUTINO</TitleProps>}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        colors={['#2CAD58', '#FF0909']}
                    >
                        <Title>ROUTINO</Title>
                    </LinearGradient>
                </MaskedView>


                <ImageProfile source={{ uri: "https://cdn-icons.flaticon.com/png/512/4526/premium/4526288.png?token=exp=1660705138~hmac=c3748ab04f7bff6529537321632d0ca6" }} />
                <SignInput
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChangeText={t => setEmailField(t)}
                />
                <SignInput
                    placeholder="Digite sua senha"
                    password={true}
                    value={password}
                    onChangeText={t => setPasswordField(t)}
                />
                <HandleButton onPress={() => handleSignClick()}>
                    <HandleButtonText>Entrar</HandleButtonText>
                </HandleButton>
                <HandleButton onPress={() => handleRegisterClick()}>
                    <HandleButtonText>Cadastre-se</HandleButtonText>
                </HandleButton>

            </ViewArea>

        </Container>
    );
};