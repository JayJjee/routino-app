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
import { auth } from "../../../firebase";
import Header from "../../components/HeaderRoutino";
import ProgressBar from "../../components/ProgressBar";
import ItemTraits from "./ItemTraits";
import ItemArticle from "./ItemMostViewed";
import ItemEmpty from "./ItemEmpty";
import SearchButton from "../../components/SearchButton";

export default () => {

    const navigation = useNavigation();

    const traits = ["musica", "esporte", "programacao", "musica", "esporte", "programacao"]
    const article = ["danilo", "marcus", "joan", "danilo", "marcus", "joan"]
    const renderItemTraits = ({ item }) => <ItemTraits item={item} />;
    const renderItemArticle = ({ item }) => <ItemArticle item={item} />;
    const renderEmpty = () => <ItemEmpty />;
    // const numColumns = 1
    const handleSearchClick = () => {
        navigation.navigate("Search")
    }

    return (
        <Container>
            <Header></Header>

            <ArticlesArea>
                <Title>Most viewed today</Title>
                <FlatList
                    nestedScrollEnabled
                    data={article}
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
                        ListEmptyComponent={renderEmpty}
                        contentContainerStyle={{ justifyContent: "center" }}
                    // numColumns={numColumns}
                    />
                    <SearchButton >
                    </SearchButton>
                </TraitsArea>
            </ScrollViewHome>
        </Container>
    );
};