import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { type Categories } from '../../../Types/wikitypes'


const fetchCategories = async (category: string): Promise<Categories[]> => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${category}&cmlimit=max&format=json&origin=*`
    const response = await axios.get(url);
    return response.data.query.categorymembers;
}

const useGetCategories = (category: string) => {
    return useQuery({
        queryKey: ["categories", category],
        queryFn: () => fetchCategories(category),
        enabled: !!category
    });
}
export default useGetCategories
