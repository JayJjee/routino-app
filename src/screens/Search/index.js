import React, { useEffect, useState } from "react";
import { Container, ViewArea, Title, FlatList, HandleButtonText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../../firebase";
import Header from "../../components/HeaderRoutino";
import SearchButton from "../../components/SearchButton";
import Item from "./Item";
import { onSnapshot, collection, query, limit } from "firebase/firestore"

export default () => {

    useEffect(()=>{
        const list = [];
        const coll = collection(db, "Traits");
        const q = query(coll, limit(24));
        onSnapshot(q, (querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                list.push({...doc.data(), nome: doc.id})
            })
            setTraits(list);
        } )
    }, [])

    const navigation = useNavigation();
    const [traits, setTraits] = useState([]);
    
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
                data={traits}
                renderItem={renderItem}
                contentContainerStyle={{ marginHorizontal: 10 }}
                numColumns={numColumns}

            />



        </Container>
    );
};