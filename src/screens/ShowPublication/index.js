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
    ButtonAvaluation,
    IconAvaluation,
    AvaluationArea
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
    let Upvote = object.route.params.article.Upvote
    let Downvote = object.route.params.article.Downvote

    const updateView = async () => {
        const article = doc(db, "Artigo", idArticle);

        Views += 1
        await updateDoc(article, {
            Views: Views
        });
    }

    const handleLikeClick = async () => {
        const article = doc(db, "Artigo", idArticle);

        Upvote += 1
        await updateDoc(article, {
            Upvote: Upvote
        });
    }


    const handleDislikeClick = async () => {
        const article = doc(db, "Artigo", idArticle);

        Downvote += 1
        await updateDoc(article, {
            Downvote: Downvote
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
                <AvaluationArea>
                    <ButtonAvaluation onPress={() => handleLikeClick()}>
                        <IconAvaluation source={require("../../assets/likeArticle.png")} />
                    </ButtonAvaluation>

                    <ButtonAvaluation onPress={() => handleDislikeClick()}>
                        <IconAvaluation source={require("../../assets/dislikeArticle.png")} />
                    </ButtonAvaluation>
                </AvaluationArea>
            </ScrollViewSignUp>
        </Container>
    );
};