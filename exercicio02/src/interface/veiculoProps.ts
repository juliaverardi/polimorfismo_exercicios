export interface VeiculoProps{
    marca: string
    modelo:string
    ano: number
}

export interface CarroProps extends VeiculoProps{
    qtdePortas: number
}

export interface MotoProps extends VeiculoProps{
    cilindradas: number
}