import { FC } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { buttons } from '../constants/buttons'

interface Props {
    handeleState: (e: string) => void;
    operation: string;
}
export const Keyboards: FC<Props> = ({ handeleState, operation }) => {
    
    return (
        <View style={styles.container}>
            {buttons.map((button, idx) => (
                <TouchableOpacity
                    key={idx}
                    style={{
                        ...styles.button,
                        backgroundColor: button.value === operation ? button.textColor : button.backgroundColor,
                        flexGrow: button.value === '0' ? 10 : 1,
                        alignItems: button.value === '0' ? 'flex-start' : 'center',
                        paddingLeft: button.value === '0' ? '8%' : '1%',
                    }}
                    onPress={() => handeleState(button.value)}
                >
                    <Text style={{
                        ...styles.text,
                        color: button.value === operation ? button.backgroundColor : button.textColor,
                    }}>
                        {button.value}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // height: '65%',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1%',
        margin: '2%',
        width: `19%`,
        height: `15%`,
        borderRadius: 100,
    },
    text: {
        fontSize: 40,
    }
})
