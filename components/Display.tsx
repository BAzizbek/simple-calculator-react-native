import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
    value: string;
}

export const Display: FC<Props> = ({ value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{value || '0'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '20%',
        backgroundColor: '#000',
    },
    text: {
        position: 'absolute',
        right: 10,
        bottom: 5,
        fontSize: 60,
        color: '#fff'
    }
})
