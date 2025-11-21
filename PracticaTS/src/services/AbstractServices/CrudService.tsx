import {useQuery} from '@tanstack/react-query'

export const CrudGetService = (key:string , apiUrl:string) => {

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const response = await fetch(
        apiUrl,
      )
      return await response.json()
    },
  })

    if (isPending) return 'Loading...'
    if (isFetching) return 'Fetching Data...'
    if (error) return 'An error has occurred: ' + error.message

    return (data);
};

export const CrudPostService = (key:string , apiUrl:string) => {

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const response = await fetch(
        apiUrl,
      )
      return await response.json()
    },
  })

    if (isPending) return 'Loading...'
    if (isFetching) return 'Fetching Data...'
    if (error) return 'An error has occurred: ' + error.message

    return (data);
};
