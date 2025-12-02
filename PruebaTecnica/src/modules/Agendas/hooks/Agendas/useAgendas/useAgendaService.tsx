import { useQuery } from '@tanstack/react-query'
import { type Agendas, } from '../../../../../types/agendaTypes';
import { useMutation } from '@tanstack/react-query'


interface AgendasResponse {
    agendas: Agendas[];
}

export const useAgendaService = () => {

    return useQuery<AgendasResponse[]>({
        queryKey: ['agendas'],
        queryFn: async () => {
            const response = await fetch(
                'https://playground.4geeks.com/contact/agendas'
            )
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const text = await response.text();
            if (!text) {
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

            try {
                return JSON.parse(text) as AgendasResponse[];
            } catch {
                throw new Error(`Expected JSON response but received: ${text}`);
            }
        }
    })
}

export const useDeleteContact = () => {

    return useMutation({
        mutationFn: async (slug: string) => {
            const response = await fetch('https://playground.4geeks.com/contact/agendas/' + slug, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Error en la petición');
            }
            return (
                response.json()
            );
        },
        onSuccess: () => {
            location.reload();
        }
    });
};


