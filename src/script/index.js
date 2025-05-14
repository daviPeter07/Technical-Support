function operacoesBasicas(a, b, operacao) {
    switch (operacao) {
        case 'soma':
            return a + b;
        case 'subtracao':
            return a - b;
        case 'multiplicacao':
            return a * b;
        case 'divisao':
            if (b === 0) {
                return 'Erro: divisão por zero';
            }
            return a / b;
        default:
            return 'Operação inválida';
    }
}

// Exemplo de uso:
console.log(operacoesBasicas(10, 5, 'soma')); // 15
console.log(operacoesBasicas(10, 5, 'subtracao')); // 5
console.log(operacoesBasicas(10, 5, 'multiplicacao')); // 50
console.log(operacoesBasicas(10, 5, 'divisao')); // 2
console.log(operacoesBasicas(10, 0, 'divisao')); // Erro: divisão por zero
console.log(operacoesBasicas(10, 5, 'modulo')); // Operação inválida