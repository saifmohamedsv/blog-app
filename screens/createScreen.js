import React, {useContext} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Context as BlogContext} from "../context/BlogContext";

function ShowScreen({navigation: {getParam}}) {
    const id = getParam('id')
    const {state} = useContext(BlogContext)

    const blogData = state.find(res => res.id === id)

    return (
        <View>
            <Text>{blogData.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ShowScreen;