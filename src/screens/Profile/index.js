import React, { useEffect, useState } from "react";
import { Container, FlatList, TitleText, Title, ImageProfile, TopArea, TraitsArea, ScrollViewProfile, ArticlesArea } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import Header from "../../components/HeaderRoutino";
import ProgressBar from "../../components/ProgressBar";
import ItemTraits from "./ItemTraits";
import ItemArticle from "./ItemArticle";
import ItemEmpty from "./ItemEmpty";



export default () => {

    auth
    const idUser = auth.currentUser?.uid
    const navigation = useNavigation();
    const traits = ["musica", "esporte", "programacao", "musica", "esporte", "programacao"]
    const [artigos, setArtigos] = useState([]);
    const renderItemTraits = ({ item }) => <ItemTraits item={item} />;
    const renderItemArticle = ({ item }) => <ItemArticle item={item} />;
    const renderEmpty = () => <ItemEmpty />;

    const getuser = async () => {
        const q = query(collection(db, "Artigo"), where("IdUsuario", "==", idUser));
        const querySnapshot = await getDocs(q);
        let tempory = []
        querySnapshot.forEach((doc) => {
            const objeto =  doc.data()
            console.log(doc.id, "=> ", objeto);
            tempory.push(objeto.Titulo)
        });
        setArtigos(tempory)
    }
    
    useEffect(() => {
        getuser()
    }, []);

    return (
        <Container>
            <Header></Header>

            <Title>Profile</Title>

            <TopArea>
                <ImageProfile source={require("../../assets/profile.png")} />
                <ProgressBar></ProgressBar>
            </TopArea>
            <TraitsArea>
                <TitleText>YOUR TRAITS</TitleText>
                <FlatList
                    data={traits}
                    renderItem={renderItemTraits}
                    horizontal
                    ListEmptyComponent={renderEmpty}
                    contentContainerStyle={{ justifyContent: "center" }}
                // numColumns={numColumns}
                />
            </TraitsArea>
            <ArticlesArea>
                <TitleText>YOUR ARTICLES</TitleText>
                <FlatList
                    nestedScrollEnabled
                    data={artigos}
                    // refreshing={true}
                    renderItem={renderItemArticle}
                    ListEmptyComponent={renderEmpty}
                    contentContainerStyle={{ marginHorizontal: 30 }}
                // ListHeaderComponent
                />
            </ArticlesArea>

        </Container>
    );
};