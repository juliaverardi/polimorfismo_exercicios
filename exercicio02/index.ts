import { Veiculo } from "./src/models/Veiculo.js";
import { Carro } from "./src/models/Carro.js";
import { Moto } from "./src/models/Moto.js";

console.log("=== SISTEMA DE VEICULOS ===");

const CARRO = new Carro({
  marca: "Toyota",
  modelo: "SW4",
  ano: 2026,
  qtdePortas: 4,
});

const MOTO = new Moto({
  marca: "BMW",
  modelo: "R12 G/S",
  ano: 2026,
  cilindradas: 109,
});

const bancoDeDados: Veiculo[] = [CARRO, MOTO];

for (const Veiculo of bancoDeDados) {
  Veiculo.exibirPerfil();
}
