import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { type Categories } from '../../../Types/wikitypes'

const fetchCategories = async (): Promise<Categories[]> => {
    const url = "https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Film_genres&cmlimit=max&format=json&origin=*"
    const response = await axios.get(url);
    return response.data.query.categorymembers;
}

const useGetCategories = () => {
    return useQuery({
        queryKey: ["categories"],
        queryFn: fetchCategories,
    });
}
export default useGetCategories