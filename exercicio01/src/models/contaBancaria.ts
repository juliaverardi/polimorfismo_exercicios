import { ContaProps } from "../interfaces/ContaProps.js";

export abstract class contaBancaria<T extends ContaProps = ContaProps> {
  constructor(protected props: T) {}

  public get getNumero(): string {
    return this.props.numero;
  }
  public get getAgencia(): string {
    return this.props.agencia;
  }
  public get getTitular(): string {
    return this.props.titular;
  }
  public get getSaldo(): number {
    return this.props.saldo;
  }

  public set setNumero(novonumero: string) {
    if (novonumero.trim().length === 0) {
      console.log("\n ERRO: Esse campo n pode estar vazio!");
      return;
    }
    this.props.numero = novonumero;
  }
  public set setAgencia(novoagencia: string) {
    if (novoagencia.trim().length === 0) {
      console.log("\n ERRO: Esse campo n pode estar vazio!");
      return;
    }
    this.props.agencia = novoagencia;
  }
  public set setTitular(novotitular: string) {
    if (novotitular.trim().length === 0) {
      console.log("\n ERRO: Esse campo n pode estar vazio!");
      return;
    }
    this.props.titular = novotitular;
  }
  public set setSaldo(novosaldo: number) {
    if ((novosaldo = 0)) {
      console.log("\n ERRO:Esse campo n pode estar vazio!");
      return;
    }
    this.props.saldo = novosaldo;
  }
  sacar(valor: number) {
    this.props.saldo -= valor;
  }
  depositar(valor: number) {
    this.props.saldo += valor;
  }
  public abstract exibirExtrato(): void;
}
