class CDBA {

    id: string;
    ir: number = 0;
    iof: number = 0;
    puCompra: number = 0;
    pu: number;
    quantidade: number

    constructor(id: string, puCompra: number, quantidade: number) {

        this.id = id;
        this.puCompra = puCompra;
        this.pu = this.puCompra;
        this.quantidade = quantidade;
    }

    mudarPu(novoPu: number) {

        // Validações...
        this.pu = novoPu;
    }

    getTotal () : number  {
        return (this.pu * this.quantidade) + this.iof + this.ir
    }
}

class PoupancaA {

    id: string;
    valor: number = 0;

    constructor(id: string, valor: number) {

        this.id = id;
        this.valor = valor
    }

    adicionarRendimento() {

        let rendimentoMedio = 0.002;
        this.valor = this.valor * (1 + rendimentoMedio);
    }

    getTotal () : number  {
        return this.valor;
    }
}

class ExtratoA {

    CDB: Array<CDBA> = []
    poupanca: Array<PoupancaA> = []

    getTotalCDB() : number {
        return this.CDB.map(x => x.getTotal()).reduce((previus, currecy) => previus + currecy);
    }

    getTotalPoupanca () {
        return this.CDB.map(x => x.getTotal()).reduce((previus, currecy) => previus + currecy);
    }
}
