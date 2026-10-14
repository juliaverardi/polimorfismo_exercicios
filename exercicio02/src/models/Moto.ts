import { Veiculo } from "./Veiculo.js"
import { MotoProps } from "../interface/veiculoProps.js";

export class Moto extends Veiculo<MotoProps> {

    constructor(props: MotoProps) {
        super(props);
    }

    public get getCilindradas(): number { return this.props.cilindradas; }

    public set setCilindradas(novaCilindrada: number) {
        this.props.cilindradas = novaCilindrada;
    }

    public exibirPerfil(): void {
        console.log(`[CARRO] Marca: ${this.getMarca} | Modelo: ${this.getModelo} | Ano do veiculo: ${this.getAno}`)
    }
}