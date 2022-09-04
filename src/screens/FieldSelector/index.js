import React, { useEffect, useState } from "react";
import { Container, ViewArea, Title, FlatList, HorizontalList, ViewPostInput, HandleButtonText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../../firebase";
import Header from "../../components/HeaderRoutino";
import SearchButton from "../../components/SearchButton";
import ItemTraits from "./ItemTraits";
import ItemEmpty from "../../components/ItemEmpty";
import SelectedTraits from "./SelectedTraits";
import { TouchableOpacity } from "react-native-gesture-handler";
import { addDoc, collection, doc } from "firebase/firestore";

export default (object) => {
    auth
    const [fields, setFields] = useState([]);
    const [selectedTraits, setSelectedTraits] = useState(["ei", "ei"]);
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
        setSelectedTraits([...selectedTraits, "ei"]);
        // if(!selectedTraits.includes(item)){

        // }
        console.log(selectedTraits);
    }

    const removeTrait = (item) => {
        const index = selectedTraits.indexOf("ei");
        if (index > -1) {
            selectedTraits.splice(index, 1);
            console.log(selectedTraits);
            setSelectedTraits([...selectedTraits]);
        }

    }

    const navigation = useNavigation();
    const renderItemTraits = ({ item }) =>
        <Container>
            <TouchableOpacity onPress={selectTrait}>
                <ItemTraits item={item} />
            </TouchableOpacity>
        </Container>;
    ;

    const renderSelectedraits = ({ item }) =>
        <  SelectedTraits item={item} removeOnPress={(item) => removeTrait(item)} />;

    const traits = ["musica", "esporte", "programacao", "musica", "esporte", "programacao"]

    const data = "daniloas"

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