import React, { useEffect, useState } from "react";
import { Container, ViewArea, Title, FlatList, HorizontalList} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../firebase";
import Header from "../../components/HeaderRoutino";
import SearchButton from "../../components/SearchButton";
import ItemTraits from "./ItemTraits";
import ItemEmpty from "../../components/ItemEmpty";
import SelectedTraits from "./SelectedTraits";
import { TouchableOpacity } from "react-native-gesture-handler";

export default () => {

    const [fields, setFields] = useState([]); 
    const [selectedTraits, setSelectedTraits] = useState(["ei","ei"]); 

    // useEffect(()=>{
    //     const list = [];
    //     const coll = collection(db, "Campos");
    //     const q = query(coll, orderBy("Views"), limit(10));
    //     onSnapshot(q, (querySnapshot)=>{
    //         querySnapshot.forEach((doc)=>{
    //             list.push({...doc.data(), id: doc.id})
    //         })
    //         setArtigos(list);
    //     } )
    // }, [])

    const selectTrait = (item) => {
        setSelectedTraits([...selectedTraits,"ei"]);
        // if(!selectedTraits.includes(item)){
            
        // }
        console.log(selectedTraits);
    }

    const removeTrait = (item) => {
        const index = selectedTraits.indexOf(item);
        if (index > -1) { 
            array.splice(index, 1); 
            setSelectedTraits([...selectedTraits]);
        }
        
    }

    const navigation = useNavigation();
    const renderItemTraits = ({ item }) =>
        <Container>
            <TouchableOpacity onPress={selectTrait}>
                <ItemTraits item={item}  />
            </TouchableOpacity>
        </Container>;
    ;

    const renderSelectedraits = ({ item }) => 
                <  SelectedTraits item={item} removeOnPress={(item)=>removeTrait(item)}/>;

    const renderEmpty = () => <ItemEmpty />;
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
                    contentContainerStyle={{ justifyContent: "center"}}
                    // numColumns={numColumns}
                    />
            <FlatList
                data={traits}
                renderItem={renderItemTraits}
                contentContainerStyle={{ marginHorizontal: 10 }}
                numColumns={numColumns}
                

            />



        </Container>
    );
};