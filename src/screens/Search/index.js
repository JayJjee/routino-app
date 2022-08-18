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

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.navigate("SignIn")
                console.log('Deslogado');
            })
            .catch(error => alert(error.message))
    }
    
    const data = "daniloas"
    const renderItem = ({ item }) => <Item item={item} />;
    const numColumns = 3
    return (
        <Container>
            <Header></Header>
            <Title>Browse</Title>
            <ViewArea>
                <SearchButton onPress={() => handleSignOut()}>
                    <HandleButtonText>Sign Out</HandleButtonText>
                </SearchButton>
            </ViewArea>
            <FlatList
                data={data}
                renderItem={renderItem}
                contentContainerStyle={{ justifyContent: "center" }}
                numColumns={numColumns}

            />



        </Container>
    );
};