import React, { useEffect, useState } from "react";
import { Container, FlatList, TitleText, Title, ImageProfile, TopArea, TraitsArea, ScrollViewProfile, ArticlesArea } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../firebase";
import Header from "../../components/HeaderRoutino";
import ProgressBar from "../../components/ProgressBar";
import ItemTraits from "./ItemTraits";
import ItemArticle from "./ItemArticle";
import ItemEmpty from "./ItemEmpty";



export default () => {

    const navigation = useNavigation();

    const traits = ["musica", "esporte", "programacao","musica", "esporte", "programacao"]
    const article = ["danilo", "marcus", "joan", "danilo", "marcus", "joan"]
    const renderItemTraits = ({ item }) => <ItemTraits item={item} />;
    const renderItemArticle = ({ item }) => <ItemArticle item={item} />;
    const renderEmpty = () => <ItemEmpty />;
    // const numColumns = 1

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
                    data={article}
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