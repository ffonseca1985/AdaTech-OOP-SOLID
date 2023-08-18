
interface Subordinado {
    getSubordinado(): string;
}

interface Funcionario {
    getSalario():  number;
}

class Gerente implements Funcionario, Subordinado {

    getSalario(): number {
        return 1000;
    }

    getSubordinado(): string {
        return "Diretor"
    }
}

class CEO implements Funcionario {

    getSalario(): number {
        return 1000;
    }
}