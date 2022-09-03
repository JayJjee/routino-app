import React, { useEffect, useState } from "react";
import {
    Container,
    ScrollViewSignUp,
    ImageProfile,
    ViewTitleInput,
    LevelImgView,
    LevelText,
    ViewTextInput,
    InputTitle,
    InputText,
    ViewPostInput,
    ViewArea
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../../firebase";
import Header from "../../components/HeaderRoutino";
import CircleAdd from "../../components/ButtonRequest/CircleAdd";
import TextAdd from "../../components/ButtonRequest/TextAdd";
import PictureAdd from "../../components/ButtonRequest/PictureAdd";
import DropboxAdd from "../../components/ButtonRequest/DropboxAdd";
import { addDoc, collection } from "firebase/firestore";


export default () => {

    const navigation = useNavigation();
    const [title, setTitle] = useState()
    const [post, setPost] = useState()
    const [inputHeightTitle, setInputHeightTitle] = useState(0)
    const [inputHeightText, setInputHeightText] = useState(0)
    const [loading, setLoading] = useState(false)
    const level = 30

    const handleButtonPress = () => {
        const coll = collection(db, "Artigo");
        const docData = {
            "Titulo": title,
            "Texto": post,
            "Lingua": "PT-BR",
            "Campo": "Undefined",
            "Views": 0,
            "Upvote":0,
            "Downvote":0,
            "Usuario": auth.name
        }
        addDoc(coll, docData)
        .then(()=>{
            alert("Artigo publicado com sucesso!");
        })
        .catch((error)=>{
            alert("Erro ao publicar o artigo");
            console.log(error.message)
        })
        
    }

    const finishArticleButton = () => {


        setLoading(true)
        setTimeout(function () {
            setLoading(false)

        }, 2000);
    }

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
                <ViewArea>
                    <CircleAdd
                        isLoading={loading}
                        onPress={() => handleButtonPress()}
                    />
                    <ViewPostInput>
                        <TextAdd
                        // isLoading={loading}
                        // onPress={() => handleButtonPress()}
                        />
                        <PictureAdd
                        // isLoading={loading}
                        // onPress={() => handleButtonPress()}
                        />
                        <DropboxAdd
                        // isLoading={loading}
                        // onPress={() => handleButtonPress()}
                        />
                    </ViewPostInput>
                </ViewArea>


            </ScrollViewSignUp>


        </Container>
    );
};