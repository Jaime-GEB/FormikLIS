export interface Agendas{
    slug: string,
    id: number,
}


interface Contact {
  name: string;
  phone: string;
  email: string;
  address: string;
  id: number;
}

export interface AgendasContacts {
  slug: string;
  contacts: Contact[];
}
