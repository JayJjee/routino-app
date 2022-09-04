import React, { useEffect, useState } from "react";
import {
    Container,
    ScrollViewSignUp,
    ImageProfile,
    ViewTitleInput,
    LevelImgView,
    LevelText,
    ViewTextInput,
    Title,
    Text,
    ViewPostInput,
    ViewArea
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../../firebase";
import Header from "../../components/HeaderRoutino";
import { doc, getDoc } from "firebase/firestore";

export default (object) => {

    const navigation = useNavigation();
    const level = 30
    const title = object.route.params.article.Titulo
    const text = object.route.params.article.Texto
    const idWriter = object.route.params.article.IdUsuario

    const getUser = async () => {
        const docRef = doc(db, "users", idWriter);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <Container>
            <Header></Header>
            <ScrollViewSignUp>
                <ViewTitleInput>
                    <LevelImgView>
                        <ImageProfile source={require("../../assets/profile.png")} />
                        <LevelText>Lv. {level}</LevelText>
                    </LevelImgView>
                    <Title>{title}</Title>
                </ViewTitleInput>
                <ViewTextInput>
                    <Text>{text}</Text>
                </ViewTextInput>
            </ScrollViewSignUp>
        </Container>
    );
};