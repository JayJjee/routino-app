import React, { useEffect, useState } from "react";
import { Container, ViewArea, Title, FlatList, HandleButtonText, HorizontalList } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../../firebase";
import Header from "../../components/HeaderRoutino";
import SearchButton from "../../components/SearchButton";
import Item from "./Item";
import SelectedItems from "./SelectedItems";
import { onSnapshot, collection, query, limit } from "firebase/firestore"

export default () => {

    const navigation = useNavigation();
    const [traits, setTraits] = useState([]);
    const [selectedTraits, setSelectedTraits] = useState([{nome:"arte",cor:"#FFFFFF"}]);

    const renderItem = ({ item }) => <Item item={item} addOnPress={() => selectTrait(item)}/>;
    const renderSelectedraits = ({ item }) => <SelectedItems item={item} removeOnPress={() => removeTrait(item)} />;

    const selectTrait = (item) => {
        console.log(">>>>>>>Entrei na selecao")
        console.log(selectedTraits)
        if(!selectedTraits.includes(item)){
            setSelectedTraits([...selectedTraits, item])
        }
    }

    const removeTrait = (item) => {
        console.log(">>>>>>>nasdas")
        const index = selectedTraits.indexOf(item);
        if (index > -1) {
            selectedTraits.splice(index, 1);
            console.log(selectedTraits);
            setSelectedTraits([...selectedTraits]);
        }
    }
    
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
    
    const numColumns = 3
    return (
        <Container>
            <Header></Header>
            <Title>Browse</Title>
            <ViewArea>
                <SearchButton>
                    
                </SearchButton>
            </ViewArea>
            <HorizontalList
                data={selectedTraits}
                renderItem={renderSelectedraits}
                horizontal
                // contentContainerStyle={{ marginHorizontal: 10 }}
                contentContainerStyle={{ justifyContent: "space-between" }}

            />
            <FlatList
                data={traits}
                renderItem={renderItem}
                contentContainerStyle={{ marginHorizontal: 10 }}
                numColumns={numColumns}

            />



        </Container>
    );
};