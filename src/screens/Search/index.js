import React, { useEffect, useState } from "react";
import { Container, ViewArea, Title, FlatList, HandleButtonText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../firebase";
import Header from "../../components/HeaderRoutino";
import SearchButton from "../../components/SearchButton";
import Item from "./Item";

export default () => {

    // const [data, setData] = useState([]); 

    const navigation = useNavigation();
    
    const data = "daniloas"
    const renderItem = ({ item }) => <Item item={item} />;
    const numColumns = 3
    return (
        <Container>
            <Header></Header>
            <Title>Browse</Title>
            <ViewArea>
                <SearchButton>
                    
                </SearchButton>
            </ViewArea>
            <FlatList
                data={data}
                renderItem={renderItem}
                contentContainerStyle={{ marginHorizontal: 10 }}
                numColumns={numColumns}

            />



        </Container>
    );
};