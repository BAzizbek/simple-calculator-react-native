interface Prev {
    operand1: string;
    operand2: string;
    operation: string;
    value: string;
}

export const handleTyping = (prev: Prev, value: string): Prev => {
    const canType: boolean = prev.value.length <= (prev.value.includes('.') ? 9 : 8);
    const firstOperand = prev.operation ? prev.operand1 : String(parseFloat(prev.value + value));
    const lastValue = prev.operation ? String(parseFloat(prev.operand2 + value)) : String(parseFloat(prev.operand1 + value));

    return {
        ...prev,
        operand1: canType ? firstOperand : prev.operand1,
        operand2: prev.operation ? String(parseFloat(prev.operand2 + value)) : prev.operand2,
        value: canType ? lastValue : prev.operation ? lastValue : prev.value,
    }
}
