import { FC, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    value: string;
}

export const Display: FC<Props> = ({ value }) => {
    const numberWithSpaces = useCallback((x: string) => {
        const parts = x.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }, []);

    return (
        <View style={styles.container}>
            <Text numberOfLines={1} style={styles.text}>{numberWithSpaces(value) || '0'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '33%',
        width: '100%',
        backgroundColor: '#000',
    },
    text: {
        position: 'absolute',
        marginHorizontal: '1%',
        right: 0,
        bottom: 5,
        fontSize: 60,
        color: '#fff',
    }
})
