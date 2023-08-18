"use strict";
class ItemPedido {
    constructor(idProduto, quantidade, preco) {
        this.idProduto = idProduto;
        this.quantidade = quantidade;
        this.preco = preco;
    }
    getTotal() {
        return this.quantidade * this.preco;
    }
}
class Correios {
    calcularFrete(pedido) {
        let total = pedido.getTotal();
        if (total > 1000) {
            return 0;
        }
        let cincoPorCento = 5 / 100;
        return total * cincoPorCento;
    }
}
class UBER {
    calcularFrete(pedido) {
        let total = pedido.getTotal();
        if (total > 1000) {
            return 0;
        }
        return 5;
    }
}
class Pedido {
    constructor(id) {
        this.itens = [];
        this.tipoFrete = "";
        this.id = id;
    }
    addItem(idProduto, quantidade, preco) {
        this.itens.push(new ItemPedido(idProduto, quantidade, preco));
    }
    getTotal() {
        if (!this.itens)
            return 0;
        return this.itens.map(x => x.getTotal()).reduce((previousValue, currentValue) => previousValue + currentValue);
    }
    getTotalDesconto(transportadora) {
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
//# sourceMappingURL=openClosedPrinciple.js.map