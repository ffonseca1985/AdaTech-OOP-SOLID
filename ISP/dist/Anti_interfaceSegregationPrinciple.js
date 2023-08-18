"use strict";
class PDFA {
    open() {
        console.log("Abrir");
    }
    save() {
        console.log("Salvar");
    }
    Write() {
        console.log("Escrever");
    }
}
class WordA {
    open() {
        console.log("Abrir");
    }
    save() {
        console.log("Salvar");
    }
    Write() {
        throw new Error("Não escreve aqui");
    }
}
