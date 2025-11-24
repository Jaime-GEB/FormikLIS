import {CrudGetService, CrudPostService} from '../AbstractServices/CrudService';

export const WorkersServices = (key:string, typeService:string) => {
    if (typeService === 'GET') { 
        return (CrudGetService (key, import.meta.env.API_URL as string  ))
    }
    if (typeService === 'POST') { 
        return (CrudPostService (key, import.meta.env.API_URL as string  ))
    }
}
