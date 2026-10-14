import { ContaPoupancaProps } from "../interfaces/ContaProps.js";
import { contaBancaria } from "./contaBancaria.js";

export class ContaPoupanca extends contaBancaria<ContaPoupancaProps>{

    constructor(props: ContaPoupancaProps) {
        super(props);
    }
    
     get getTaxaAniversario(): number { return this.props.taxaAniversario; }
    
     set setTaxaAniversario(novaTaxaAniversario: number) {
        if (novaTaxaAniversario == 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.props.taxaAniversario = novaTaxaAniversario;
    
    }
    public exibirExtrato(): void {
        console.log(
            `[CONTA POUPANCA] 
            Numero da conta: ${this.getNumero} 
            | agencia: ${this.getAgencia} 
            | Titular: ${this.getTitular} 
            | Saldo: ${this.getSaldo}
            | taxaAniversario: ${this.getTaxaAniversario}
            `
        )
    }
}
