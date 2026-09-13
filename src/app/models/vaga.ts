export interface Vaga {
    id: number;
    empresa: string;
    cargo: string;
    salario: number;
    localizacao: string;
    modalidade: string;
    descricao: string;
    requisitos: string[];
    aberta: boolean;
    urgente: boolean;
    imagem: string;
}
