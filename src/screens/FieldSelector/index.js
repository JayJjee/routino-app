import React, { useEffect, useState } from "react";
import { Container, ViewArea, Title, FlatList, HorizontalList, ViewPostInput, HandleButtonText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { auth, db} from "../../../firebase";
import Header from "../../components/HeaderRoutino";
import SearchButton from "../../components/SearchButton";
import ItemTraits from "./ItemTraits";
import ItemEmpty from "../../components/ItemEmpty";
import SelectedTraits from "./SelectedTraits";
import { TouchableOpacity } from "react-native-gesture-handler";
import { addDoc, onSnapshot, collection, query, limit, doc } from "firebase/firestore"

export default (object) => {
    auth
    const [fields, setFields] = useState([]);
    const [selectedTraits, setSelectedTraits] = useState([]);
    const [traits, setTraits] = useState([]); 
    const [loading, setLoading] = useState(false)
    const docData = object.route.params.docData
    
    const handleButtonPress = async () => {
        const coll = collection(db, "Artigo");
        setLoading(true)
        docData.Campo = selectedTraits
        console.log(docData); 
        addDoc(coll, docData)
            .then(() => {
                setLoading(false)
                alert("Artigo publicado com sucesso");
                navigation.navigate("MainTab")
            })
            .catch((error) => {
                alert("Erro ao publicar o artigo");
                console.log(error.message)
            })
    }

    const selectTrait = (item) => {
        if(!selectedTraits.includes(item)){
            setSelectedTraits([...selectedTraits,item])
        }
    }

    const removeTrait = (item) => {
        const index = selectedTraits.indexOf(item);
        if (index > -1) {
            selectedTraits.splice(index, 1);
            console.log(selectedTraits);
            setSelectedTraits([...selectedTraits]);
        }

    }

    const navigation = useNavigation();
    const renderItemTraits = ( {item} ) => <ItemTraits item={item} addOnPress={() => selectTrait(item)}/>   ;
    const renderSelectedraits = ({ item }) => <SelectedTraits item={item} removeOnPress={() => removeTrait(item)} />;
    
    const numColumns = 3

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
                contentContainerStyle={{ justifyContent: "space-between" }}
            // numColumns={numColumns}
            />
            <FlatList
                data={traits}
                renderItem={renderItemTraits}
                contentContainerStyle={{ marginHorizontal: 10 }}
                numColumns={numColumns}
            />

            <ViewPostInput onPress={(handleButtonPress)}>
                <HandleButtonText>Publicar o artigo</HandleButtonText>
            </ViewPostInput>

        </Container>
    );
};