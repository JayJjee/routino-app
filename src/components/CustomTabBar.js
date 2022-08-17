import React from "react";
import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from '@react-native-masked-view/masked-view';

const TabArea = styled.View`
    height: 120px;
    background-color: #EAEAEA;
    flex-direction: row;
`

const TabLargeItem = styled.TouchableOpacity`
    width: 120px;
    height: 110px;
    align-items: center;
    justify-content: center;
`;

const TabSmallItem = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 80px;
    height: 100px;
`;

const LargeImage = styled.Image`
    width: 100px;
    height: 100px;
`;

const SmallImage = styled.Image`
    width: 60px;
    height: 60px;
    /* justify-content: center; */
`;


export default ({ state, navigation }) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }

    return (
        <TabArea>
            <TabLargeItem onPress={() => goTo("Profile")}>
                <LargeImage style={{ opacity: state.index === 0 ? 1 : 0.5 }} source={require("../assets/profile.png")} />
            </TabLargeItem>

            <TabSmallItem onPress={() => goTo("Settings")}>
                <SmallImage style={{ opacity: state.index === 1 ? 1 : 0.5 }} source={require("../assets/gear.png")} />
            </TabSmallItem>

            <TabSmallItem onPress={() => goTo("Search")}>
                <SmallImage style={{ opacity: state.index === 2 ? 1 : 0.5 }} source={require("../assets/search.png")} />
            </TabSmallItem>

            <TabLargeItem onPress={() => goTo("Publication")}>
                <LargeImage style={{ opacity: state.index === 3 ? 1 : 0.5 }} source={require("../assets/add.png")} />
            </TabLargeItem>
        </TabArea>
    );
};