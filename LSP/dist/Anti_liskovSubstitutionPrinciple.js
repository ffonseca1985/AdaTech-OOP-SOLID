"use strict";
class GerenteA {
    getSubordinado() {
        return "Diretor";
    }
}
class CEOA {
    getSubordinado() {
        throw new Error("Method not implemented.");
    }
}
