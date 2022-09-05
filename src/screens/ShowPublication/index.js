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
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import Header from "../../components/HeaderRoutino";

export default (object) => {
    auth
    const navigation = useNavigation();
    const level = 30
    const title = object.route.params.article.Titulo
    const text = object.route.params.article.Texto
    const idArticle = object.route.params.article.id
    let Views = object.route.params.article.Views


    const updateView = async () => {
        const article = doc(db, "Artigo", idArticle);

        Views += 1
        await updateDoc(article, {
            Views: Views
        });
    }

    useEffect(() => {
        updateView();
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