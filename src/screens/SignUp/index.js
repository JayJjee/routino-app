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
import HeaderSign from "../../components/HeaderSign";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from '@react-native-masked-view/masked-view';
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

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
                navigation.navigate("MainTab")
            })
            .catch(error => alert(error.message))
    }

    const createColection = async (name) => {
        try {
            const currentDateTime = new Date().toISOString()
            const data = {
                "id": auth.currentUser?.uid,
                "email": auth.currentUser?.email,
                "nome": name,
                "createdAt": currentDateTime,
                "updatedAt": currentDateTime,
                "activate": true
            }

            const docRef = await setDoc(doc(db, "users", data.id), data);

            console.log("Document written with ID: ", data.id);
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

            <HeaderSign></HeaderSign>
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


                    <ImageProfile source={require("../../assets/profile.png")} />
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
                        <HandleButtonText>Concluir cadastro</HandleButtonText>
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