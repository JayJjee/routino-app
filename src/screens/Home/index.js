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
    IconLoading,
    AllView
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
    const [loading, setLoading] = useState(false)

    const renderItemTraits = ({ item }) => <ItemTraits item={item} />;
    const renderItemArticle = ({ item }) => <ItemArticle item={item} />;
    const renderEmpty = () => <ItemEmpty />;
    // const numColumns = 1
    const handleSearchClick = () => {
        navigation.navigate("Search")
    }

    useEffect(() => {
        setLoading(true)
        const listArticle = [];
        const coll = collection(db, "Artigo");
        const q = query(coll, orderBy("Views", "desc"), limit(10));
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                listArticle.push({ ...doc.data(), id: doc.id })
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
            setLoading(false)
        })
    }, [])

    return (
        <Container>
            <Header></Header>
            {loading ? (<IconLoading size="large" color="black" />) :
                <AllView>
                    <ArticlesArea>
                        <Title>Most viewed today</Title>
                        <FlatList
                            nestedScrollEnabled
                            data={artigos}
                            // refreshing={true}
                            renderItem={renderItemArticle}
                            ListEmptyComponent={renderEmpty}
                            contentContainerStyle={{ marginHorizontal: 30 }}

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
                                ListEmptyComponent={renderEmpty}
                            />
                            <SearchButton >
                            </SearchButton>
                        </TraitsArea>
                    </ScrollViewHome>
                </AllView>

            }

        </Container>
    );
};