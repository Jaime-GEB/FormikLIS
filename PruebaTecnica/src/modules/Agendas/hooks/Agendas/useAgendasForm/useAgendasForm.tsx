import { useQuery } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { type AgendasContacts } from '../../../../../types/agendaTypes';

interface AgendasResponse {
    agendas: AgendasContacts[];
}

const navigate = useNavigate();

export const useGetAgendasForm = (slug: string) => {
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
            try {
                return JSON.parse(text) as AgendasResponse[];
            } catch {
                throw new Error(`Expected JSON response but received: ${text}`);
            }
        }
    })
}

export const useCreateContact = () => {
    return useMutation({
        mutationFn: async (data: AgendasContacts) => {
            const response = await fetch('/agendas/' + data.slug, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error('Error en la petición');
            }
            return response.json();
        }
    });
};

export const useCreateSlug = () => {
    return useMutation({
        mutationFn: async (data: { slug: string }) => {
            const response = await fetch('https://playground.4geeks.com/contact/agendas/' + data.slug, {
                method: 'POST',
            });
            if (!response.ok) {
                throw new Error('Error en la petición');
            }
            return response.json();
        },
        onSuccess: () => {
            navigate('/agendas');
        }
    });
};


