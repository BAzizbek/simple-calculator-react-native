import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export const MainCalculatorScreen: FC = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculator</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },

    /* Other styles hidden to keep the example brief... */
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: "contain"
    }
});
