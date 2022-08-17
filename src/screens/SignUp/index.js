import React, { useState } from "react";
import {
    Container,
    ViewArea,
    HeaderArea,
    ImageProfile,
    Title,
    TitleProps,
    HandleButton,
    HandleButtonText,
    HandleButtonTextBold,
    ScrollViewSignUp,
    HandleButtonMessage
} from "./styles";
import SignInput from "../../components/SignInput";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from '@react-native-masked-view/masked-view';
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

export default () => {
    const navigation = useNavigation();
    const [email, setEmailField] = useState('');
    const [password, setPasswordField] = useState('');
    const [name, setName] = useState('');


    const handleSignUpClick = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Resgistrado com email: ", user.email);
                createColection(name)
                navigation.navigate("Home")
            })
            .catch(error => alert(error.message))
    }

    const createColection = async (name) => {
        try {
            const data = {
                "id": auth.currentUser?.uid,
                "email": auth.currentUser?.email,
                "nome": name,
            }

            const docRef = await addDoc(collection(db, "users"), data);
                    
            console.log("Document written with ID: ", docRef.id);
        } catch (err) {
            console.error("Error adding document: ", err);
        }
    }
    const handleGoBack = () => {
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        });
    };

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
            <ScrollViewSignUp>
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
                        placeholder="Digite seu nome"
                        value={name}
                        onChangeText={t => setName(t)}
                    />

                    <SignInput
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChangeText={canonical => setEmailField(canonical)}
                    />
                    <SignInput
                        placeholder="Digite sua senha"
                        password={true}
                        value={password}
                        onChangeText={canonical => setPasswordField(canonical)}
                    />
                    <SignInput
                        placeholder="Digite novamente sua senha"
                        password={true}
                    />
                    <HandleButton onPress={() => handleSignUpClick()}>
                        <HandleButtonText>Entrar</HandleButtonText>
                    </HandleButton>
                    <HandleButtonMessage onPress={() => handleGoBack()}>
                        <HandleButtonText>Já possui uma conta?</HandleButtonText>
                        <HandleButtonTextBold> Faça Login</HandleButtonTextBold>
                    </HandleButtonMessage>

                </ViewArea>
            </ScrollViewSignUp>


        </Container>
    );
};