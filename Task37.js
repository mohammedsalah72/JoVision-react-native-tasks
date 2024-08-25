import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';


function generateRandomWord(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}


function generateRandomTexts(count, wordLength) {
    const texts = [];
    for (let i = 0; i < count; i++) {
        texts.push(generateRandomWord(wordLength));
    }
    return texts;
}

const Task37 = () => {
    const [randomTexts, setRandomTexts] = useState(generateRandomTexts(100, 8));
    const [refreshing, setRefreshing] = useState(false);

    
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        
        setTimeout(() => {
            setRandomTexts(generateRandomTexts(100, 8));
            setRefreshing(false);
        }, 1000); 
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {randomTexts.map((text, index) => (
                    <Text key={index} style={styles.text}>
                        {text}
                    </Text>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
        margin: 10,
        color: 'black',
    },
});

export default Task37;
