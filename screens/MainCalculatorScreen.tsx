import { FC, useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';

import { Display } from '../components/Display';
import { Keyboards } from '../components/Keyboards';
import { View } from '../components/Themed';
import { operate } from '../helpers/calculate'

export const MainCalculatorScreen: FC = () => {
    const [state, setState] = useState({
        operand1: '',
        operand2: '',
        operation: '',
        value: '',
    });

    const handleState = useCallback(
        (value: string) => {
            operate(value, setState)
        }, [],
    )
    console.log(state);
    
    return (
        <View style={styles.container}>
            <Display value={state.value}/>
            <Keyboards handeleState={handleState} operation={state.operation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    // separator: {
    //     marginVertical: 30,
    //     height: 1,
    //     width: '80%',
    // },

    /* Other styles hidden to keep the example brief... */
    // thumbnail: {
    //     width: 300,
    //     height: 300,
    //     resizeMode: "contain"
    // }
});
