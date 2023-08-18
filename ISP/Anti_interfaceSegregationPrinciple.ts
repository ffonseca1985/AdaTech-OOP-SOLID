interface DocumentoA {
    open(): void;
    save(): void;
    Write(): void;
}

class PDFA implements DocumentoA {

    open(): void {
        console.log("Abrir");
    }
    save(): void {
        console.log("Salvar");
    }
    Write(): void {
        console.log("Escrever");
    }
}

class WordA implements DocumentoA {

    open(): void {
        console.log("Abrir");
    }
    save(): void {
        console.log("Salvar");
    }
    Write(): void {
        throw new Error("Não escreve aqui")
    }
}