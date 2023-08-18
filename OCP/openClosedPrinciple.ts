class ItemPedido  {

    idProduto: string;
    quantidade: number;
    preco: number;

    constructor(idProduto: string, quantidade: number, preco: number) {
        this.idProduto = idProduto;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    getTotal() {
        return this.quantidade * this.preco;
    }
}

interface Transportadora {
    calcularFrete(pedido: Pedido) : number;
}

class Correios implements Transportadora {

    calcularFrete(pedido: Pedido): number {

        let total = pedido.getTotal();

        if (total > 1000) {
            return 0;
        }

        let cincoPorCento = 5/100;
        return total * cincoPorCento;
    }
}

class UBER implements Transportadora {

    calcularFrete(pedido: Pedido): number {

        let total = pedido.getTotal();

        if (total > 1000) {
            return 0;
        }

        return 5
    }
}

class Pedido {

    id: number
    itens: Array<ItemPedido> = [];
    tipoFrete: string = ""

    constructor(id: number) {
        this.id = id;
    }

    addItem(idProduto: string, quantidade: number, preco: number) {

        this.itens.push(new ItemPedido(idProduto, quantidade, preco ));
    }

    getTotal() : number {

        if (!this.itens) return 0;

        return this.itens.map(x => x.getTotal()).reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    getTotalDesconto(transportadora: Transportadora): number {

        let frete = transportadora.calcularFrete(this);
        return frete;
    }
}

let pedido = new Pedido(1);

pedido.addItem("Cama", 2, 12);
pedido.addItem("Sofa", 1, 102);

let transportadora = new UBER();
let totalDesconto = pedido.getTotalDesconto(transportadora);

console.log(totalDesconto);


