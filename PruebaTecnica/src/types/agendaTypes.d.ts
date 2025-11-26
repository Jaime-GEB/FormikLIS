export interface Agendas{
    slug: string,
    id: number,
}

export interface AgendasContacts{
    slug:string,
    contacts:[
        name:string,
        phone:string,
        email:string,
        address:string,
        id:number,
    ]
}
