import { Veiculo } from "./Veiculo.js"
import { CarroProps } from "../interface/veiculoProps.js";

export class Carro extends Veiculo<CarroProps> {

    constructor(props: CarroProps) {
        super(props);
    }

    public get getQtdePortas(): number { return this.props.qtdePortas; }

    public set setQtdePortas(novaQtdePortas: number) {
        this.props.qtdePortas = novaQtdePortas;
    }

    public exibirPerfil(): void {
        console.log(`[CARRO] Marca: ${this.getMarca} | Modelo: ${this.getModelo} | Ano do veiculo: ${this.getAno}`)
    }
}