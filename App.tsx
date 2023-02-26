import { useCachedResources } from './hooks/useCachedResources';
import { MainCalculatorScreen } from './screens/MainCalculatorScreen';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function App(): JSX.Element | null {
    const isLoadingComplete = useCachedResources();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaView style={styles.container}>
                <MainCalculatorScreen />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
});
