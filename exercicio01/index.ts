import { ContaCorrente } from "./src/models/contaCorrente.js";
import { ContaPoupanca } from "./src/models/contaPopupanca.js";
import { contaBancaria } from "./src/models/contaBancaria.js";

console.log("=== SISTEMA DA LOJA ===");

const contaCorrente = new ContaCorrente({
    numero: "111.222.333-44",
    titular: "Carlos Silva",
    agencia: "11999999999",
    saldo: 1000,
    limite: 1000
});

contaCorrente.sacar(100);
contaCorrente.depositar(2000); 

const contaPoupanca = new ContaPoupanca({
    numero: "111.222.333-44",
    titular: "Carlos Silva",
    agencia: "11999999999",
    saldo: 1000,
    taxaAniversario: 10
});

contaPoupanca.sacar(100);
contaPoupanca.depositar(2000);



console.log("\n--- DEMONSTRAÇÃO DE POLIMORFISMO ---");

// Array tipado com a Classe Abstrata recebe as subclasses
const bancoDeDados: contaBancaria[] = [contaCorrente, contaPoupanca];

// O polimorfismo em ação: O mesmo método se comporta diferente para cada objeto
for (const pessoa of bancoDeDados) {
    pessoa.exibirExtrato();
}