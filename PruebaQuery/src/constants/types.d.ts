export interface AndroidDevice {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    locatexApiUrl: string;
    idSociedad: string;
    idPlanta: string;
    updateConfig: boolean;
}

export interface AgendasResponse {
    agendas:agendas[]; 
}
export interface agendas {
    slug: string;
    id: number;
}