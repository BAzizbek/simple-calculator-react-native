import { FC, useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Display } from '../components/Display';
import { Keyboards } from '../components/Keyboards';
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
        }, [state.value],
    )
    
    return (
        <View style={styles.container}>
            <Display value={state.value}/>
            <Keyboards handeleState={handleState} operation={state.operation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000'
    },
});
