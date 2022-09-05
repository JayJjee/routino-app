import React, { useEffect, useState } from "react";
import {
    Container,
    FlatList,
    TitleText,
    Title,
    TitleIconView,
    TraitsArea,
    ScrollViewHome,
    ArticlesArea,
    GoToSearch,
    ImageSearch,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../../firebase";
import Header from "../../components/HeaderRoutino";
import ProgressBar from "../../components/ProgressBar";
import ItemTraits from "./ItemTraits";
import ItemArticle from "./ItemMostViewed";
import ItemEmpty from "./ItemEmpty";
import SearchButton from "../../components/SearchButton";
import { onSnapshot, collection, query, orderBy, limit } from "firebase/firestore"



export default () => {

    auth
    const navigation = useNavigation();
    const [artigos, setArtigos] = useState([]);
    const [traits, setTraits] = useState([]);

    const renderItemTraits = ({ item }) => <ItemTraits item={item} />;
    const renderItemArticle = ({ item }) => <ItemArticle item={item} />;
    const renderEmpty = () => <ItemEmpty />;
    // const numColumns = 1
    const handleSearchClick = () => {
        navigation.navigate("Search")
    }

    useEffect(() => {
        const listArticle = [];
        const coll = collection(db, "Artigo");
        const q = query(coll, orderBy("Views"), limit(10));
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setArtigos(listArticle);
        })

        const list = [];
        const collTraits = collection(db, "Traits");
        const qTraits = query(collTraits, limit(24));
        onSnapshot(qTraits, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                list.push({ ...doc.data(), nome: doc.id })
            })
            setTraits(list);
        })
    }, [])

    return (
        <Container>
            <Header></Header>

            <ArticlesArea>
                <Title>Most viewed today</Title>
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

            <ScrollViewHome>
                <TraitsArea>
                    <TitleIconView>
                        <TitleText>Browse</TitleText>

                        <GoToSearch onPress={() => handleSearchClick()}>
                            <ImageSearch source={require("../../assets/squares.png")} />
                        </GoToSearch>

                    </TitleIconView>

                    <FlatList
                        data={traits}
                        renderItem={renderItemTraits}
                        horizontal
                        contentContainerStyle={{ justifyContent: "space-between" }}
                        // contentContainerStyle={{ justifyContent: "center" 
                    />
                    <SearchButton >
                    </SearchButton>
                </TraitsArea>
            </ScrollViewHome>
        </Container>
    );
};