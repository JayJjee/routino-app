import React, { useEffect, useState } from "react";
import { Container, ViewArea, Title, FlatList, HorizontalList, ViewPostInput, HandleButtonText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { auth, db} from "../../../firebase";
import Header from "../../components/HeaderRoutino";
import SearchButton from "./SearchButton";
import ItemTraits from "./ItemTraits";
import ItemEmpty from "./ItemEmpty";
import SelectedTraits from "./SelectedTraits";
import { TouchableOpacity } from "react-native-gesture-handler";
import { addDoc, onSnapshot, collection, query, limit, doc, where } from "firebase/firestore"
import ItemArticle from "../Home/ItemMostViewed";
import styled from 'styled-components/native';

export default (object) => {
    const [selectedTraits, setSelectedTraits] = useState([]);
    const [traits, setTraits] = useState([]); 
    const [artigos, setArtigos] = useState([]); 
    const [loading, setLoading] = useState(false)
    const docData = object.route.params.docData

    const searchText = object.route.params.Text
    const selectedFields = object.route.params.SelectedTraits
    console.log(searchText)
    console.log(selectedFields)

    const ArticlesArea = styled.View`
    flex: 1;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    background-color: #EAEAEA;
    `;
    

    // const selectTrait = (item) => {
    //     if(!selectedTraits.includes(item)){
    //         setSelectedTraits([...selectedTraits,item])
    //     }
    // }

    // const removeTrait = (item) => {
    //     const index = selectedTraits.indexOf(item);
    //     if (index > -1) {
    //         selectedTraits.splice(index, 1);
    //         console.log(selectedTraits);
    //         setSelectedTraits([...selectedTraits]);
    //     }

    // }

    // const navigation = useNavigation();
    // const renderItemTraits = ( {item} ) => <ItemTraits item={item} addOnPress={() => selectTrait(item)}/>   ;
    // const renderSelectedraits = ({ item }) => <SelectedTraits item={item} removeOnPress={() => removeTrait(item)} />;
    const renderItemArticle = ({ item }) => <ItemArticle item={item} />;
    const renderEmpty = () => <ItemEmpty />;

    useEffect(()=>{
        const list = [];
        const coll = collection(db, "Artigo");

        if(selectedFields.length === 0){
            const q = query(coll, where('Titulo', '>=', searchText), where('Titulo', '<=', (searchText+ '\uf8ff')))
            onSnapshot(q, (querySnapshot)=>{
                querySnapshot.forEach((doc)=>{
                    list.push({...doc.data(), nome: doc.id})
                })
                setArtigos(list);
            } )

        }else{
            const q = query(coll, where('Campo', 'array-contains-any', selectedFields), where('Titulo', '>=', searchText), where('Titulo', '<=', (searchText+ '\uf8ff')))
            onSnapshot(q, (querySnapshot)=>{
                querySnapshot.forEach((doc)=>{
                    list.push({...doc.data(), nome: doc.id})
                })
                setArtigos(list);
            } )

        }
    }, [])

    return (
        <Container>
            <Header></Header>
            <Title>Browse</Title>
            <ViewArea>
                <SearchButton placeholder={searchText}>

                </SearchButton>
            </ViewArea>
            <ArticlesArea>
                <Title>Resultado</Title>
                <FlatList
                    nestedScrollEnabled
                    data={artigos}
                    // refreshing={true}
                    renderItem={renderItemArticle}
                    ListEmptyComponent={renderEmpty}
                    contentContainerStyle={{ marginHorizontal: 30 }}

                />
            </ArticlesArea>


        </Container>
    );
};