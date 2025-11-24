import { useQuery } from '@tanstack/react-query'
import { type AndroidDevice } from '../constants/types';

export const useAndroidDevices = () => {
    
    return useQuery<AndroidDevice[]>({
        queryKey: ['androidDevices'],
        queryFn: async () => {
            const response = await fetch(
                import.meta.env.API_URL
            )
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            
            return await response.json();
        }
    })
}
