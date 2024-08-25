import React, { createContext, useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


const TextContext = createContext();


const TextProvider = ({ children }) => {
    const [text, setText] = useState('');
    return (
        <TextContext.Provider value={{ text, setText }}>
            {children}
        </TextContext.Provider>
    );
};


class TextComponentOne extends React.Component {
    static contextType = TextContext;

    render() {
        const { text } = this.context;
        return <Text style={styles.text}>{text}</Text>;
    }
}


const TextComponentTwo = () => {
    const { text, setText } = useContext(TextContext);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder="Enter text"
            />
            <TextComponentOne />
        </View>
    );
};


const Task38 = () => {
    return (
        <TextProvider>
            <View style={styles.appContainer}>
                
                <TextComponentTwo />
                <TextComponentTwo />
                <TextComponentTwo />
                <TextComponentTwo />
            </View>
        </TextProvider>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    container: {
        margin: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
});

export default Task38;
