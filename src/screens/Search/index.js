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
    const [selectedTraits, setSelectedTraits] = useState([]);
    const [text, setText] = useState("");

    const renderItem = ({ item }) => <Item item={item} addOnPress={() => selectTrait(item)}/>;
    const renderSelectedraits = ({ item }) => <SelectedItems item={item} removeOnPress={() => removeTrait(item)} />;

    const selectTrait = (item) => {
        if(!selectedTraits.includes(item)){
            if(selectedTraits.length>=3){
                selectedTraits.pop()
                setSelectedTraits([item,...selectedTraits]);
            }else{
                setSelectedTraits([item,...selectedTraits]);
            }
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

    const handleSearch = ()=> {
        navigation.navigate("SearchResults", {
            SelectedTraits: selectedTraits,
            Text: text
        })
    }
    
    const numColumns = 3
    return (
        <Container>
            <Header></Header>
            <Title>Browse</Title>
            <ViewArea>
                <SearchButton placeholder="Digite o titulo do artigo" OnSubmit={()=>handleSearch()} value={text} onChangeText={t=>setText(t)} >
                    
                </SearchButton>
            </ViewArea>
            <HorizontalList
                data={selectedTraits}
                renderItem={renderSelectedraits}
                horizontal
                // contentContainerStyle={{ marginHorizontal: 10 }}
                contentContainerStyle={{ justifyContent: "space-between" }}
                showsHorizontalScrollIndicator={false}

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