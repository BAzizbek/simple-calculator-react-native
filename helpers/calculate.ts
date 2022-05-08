type CalcProps = {
    operation: string;
    operand1: string;
    operand2: string;
}

export const calculate = ({ operation, operand1, operand2 }: CalcProps): string => {
    const min = Number.MIN_SAFE_INTEGER
    const max = Number.MAX_SAFE_INTEGER
    const operand11 = Number(operand1);
    const operand21 = Number(operand2);
    
    let result;

    switch (operation) {
    case '+':
        result = operand11 + operand21 < max || operand11 + operand21 > min ? operand11 + operand21 : '0';
        return String(result).slice(0, 10);
    case '-':
        result = operand11 - operand21 < max || operand11 - operand21 > min ? operand11 - operand21 : '0';
        return String(result).slice(0, 10);
    case 'x':
        result = operand11 * operand21 < max || operand11 * operand21 > min ? operand11 * operand21 : '0';
        return String(result).slice(0, 10);
    case '/':
        result = Number.isNaN(operand11 / operand21) ? '0' : operand11 / operand21;
        return String(result).slice(0, 10);
    case '%':
        result = operand11 / 100 * operand21;
        return String(result).slice(0, 10)
    default:
        return '';
    }
}

interface Values {
    operand1: string;
    operand2: string;
    operation: string;
    value: string;
}

interface State {
    (callback: (values: Values) => Values): void;
}

export const operate = (value: string, setState: State) => {
    switch (value) {
    case 'AC':
        setState(() => {
            return { operand1: '', operand2: '', operation: '', value: '' }
        });
        break;
    case '+/-':
        setState((prev) => {
            return {
                ...prev,
                operand1: !prev.operation ? prev.value[0] === '-' ? prev.value.slice(1) : `-${prev.value}` : prev.operand1,
                operand2: prev.operation ? prev.value[0] === '-' ? prev.value.slice(1) : `-${prev.value}` : prev.operand2,
                value: prev.value[0] === '-' ? prev.value.slice(1) : `-${prev.value}`,
            }
        });
        break;
    case '=':
        setState((prev) => {
            return {
                ...prev,
                operand1: calculate(prev),
                operand2: '',
                value: calculate(prev),
            }
        });
        break;
    case '/':
        setState((prev) => {
            return {
                operation: '/',
                operand1: prev.operation ? calculate(prev) : prev.operand1,
                operand2: prev.operand2,
                value: prev.operation ? calculate(prev) : prev.value,
            }
        });
        break;
    case 'x':
        setState((prev) => {
            return {
                operation: 'x',
                operand1: prev.operation ? calculate(prev) : prev.operand1,
                operand2: prev.operand2,
                value: prev.operation ? calculate(prev) : prev.value,
            }
        });
        break;
    case '-':
        setState((prev) => {
            return {
                operation: '-',
                operand1: prev.operation ? calculate(prev) : prev.operand1,
                operand2: prev.operand2,
                value: prev.operation ? calculate(prev) : prev.value,
            }
        });
        break;
    case '+':
        setState((prev) => {
            return {
                operation: '+',
                operand1: prev.operation ? calculate(prev) : prev.operand1,
                operand2: prev.operand2,
                value: prev.operation ? calculate(prev) : prev.value,
            }
        });
        break;
    case '.':
        setState((prev) => {
            return {
                ...prev,
                operand1: !prev.value ? '0.' :  prev.operation || prev.operand1.includes('.') ? prev.operand1 : prev.operand1 + '.',
                operand2: prev.operation && !prev.operand2 ? '0.' :  prev.operation || prev.operand2.includes('.') ? prev.operand2 + '.' : prev.operand2,
                value: !prev.value ? '0.' : !prev.value.includes('.') ? prev.value + '.' : !prev.operand2 ? '0.' : prev.value,
            }
        });
        break;
    default:
        setState((prev) => {
            const limit = prev.value.includes('.') ? 9 : 8;
            
            return {
                ...prev,
                operand1: prev.operation ? prev.operand1 : String(parseFloat(prev.value + value)),
                operand2: prev.operation ? String(parseFloat(prev.operand2 + value)) : prev.operand2,
                value: prev.value.length > limit ? prev.value : prev.operation ? String(parseFloat(prev.operand2 + value)) : String(parseFloat(prev.operand1 + value)),
            }
        });
    }
}
