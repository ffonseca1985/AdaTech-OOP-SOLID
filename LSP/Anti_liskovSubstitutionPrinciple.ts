interface FuncionarioA {
    getSubordinado(): string;
}

class GerenteA implements FuncionarioA {

    getSubordinado(): string {
        return "Diretor"
    }
}

class CEOA implements FuncionarioA {

    getSubordinado(): string {
        throw new Error("Method not implemented.");
    }
}