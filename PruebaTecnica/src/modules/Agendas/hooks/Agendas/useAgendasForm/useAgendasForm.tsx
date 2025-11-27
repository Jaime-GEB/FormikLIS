import { useQuery } from '@tanstack/react-query'
import { type AgendasContacts } from '../../../../../types/agendaTypes';

interface AgendasResponse {
    agendas:AgendasContacts[]; 
}

export const useAgendasForm = (slug:string) => {

    return useQuery<AgendasResponse[]>({
        queryKey: ['agendas'],
        queryFn: async () => {
            const response = await fetch(
                'https://playground.4geeks.com/contact/agendas/' + slug
            )
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const text = await response.text();
            if (!text) {
                // empty response -> return empty array to satisfy the expected type
                return [] as AgendasResponse[];
            }

            const contentType = response.headers.get('content-type') || '';
            if (contentType.includes('application/json')) {
                try {
                    return JSON.parse(text) as AgendasResponse[];
                } catch (e) {
                    throw new Error(`Failed to parse JSON response: ${e instanceof Error ? e.message : String(e)} - body: ${text}`);
                }
            }

            // Fallback: try to parse anyway, otherwise provide a helpful error
            try {
                return JSON.parse(text) as AgendasResponse[];
            } catch {
                throw new Error(`Expected JSON response but received: ${text}`);
            }
        }
    })
}