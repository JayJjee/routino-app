import React, { useEffect, useState } from "react";
import { Container, ScrollViewSignUp, ImageProfile, ViewTitleInput, LevelImgView, LevelText, ViewTextInput, InputTitle, InputText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../firebase";
import Header from "../../components/HeaderRoutino";

export default () => {

    const navigation = useNavigation();
    const [title, setTitle] = useState()
    const [post, setPost] = useState()
    const [inputHeightTitle, setInputHeightTitle] = useState(0)
    const [inputHeightText, setInputHeightText] = useState(0)
    const level = 30

    return (
        <Container>
            <Header></Header>
            <ScrollViewSignUp>
                <ViewTitleInput>
                    <LevelImgView>
                        <ImageProfile source={require("../../assets/profile.png")} />
                        <LevelText>Lv. {level}</LevelText>
                    </LevelImgView>

                    <InputTitle
                        style={{ height: inputHeightTitle }}
                        value={title}
                        onChangeText={setTitle}
                        placeholder="Escreva o título:"
                        multiline={true}
                        onContentSizeChange={(e) => setInputHeightTitle(e.nativeEvent.contentSize.height, 35)}
                    />
                </ViewTitleInput>
                <ViewTextInput>
                    <InputText
                        style={{ height: inputHeightText }}
                        value={post}
                        onChangeText={setPost}
                        placeholder="Escreva seu artigo:"
                        multiline={true}
                        onContentSizeChange={(e) => setInputHeightText(e.nativeEvent.contentSize.height, 35)}
                    />

                </ViewTextInput>
            </ScrollViewSignUp>


        </Container>
    );
};