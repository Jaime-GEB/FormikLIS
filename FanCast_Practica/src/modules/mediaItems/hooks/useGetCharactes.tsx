
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const WIKI_API = 'https://en.wikipedia.org/w/api.php';

async function fetchBookCharacters(bookTitle: string) {
    // 1. Obtener wikitexto del libro
    const { data } = await axios.get(WIKI_API, {
        params: {
            action: 'query',
            prop: 'revisions',
            rvprop: 'content',
            rvslots: 'main',
            titles: bookTitle,
            format: 'json',
            origin: '*',
        },
    });

    const pages = data?.query?.pages;
    const page = pages[Object.keys(pages)[0]];
    const wikitext = page?.revisions?.[0]?.slots?.main?.content || '';

    // 2. Extraer personajes (heurística: sección == Characters ==)
    const sectionMatch = wikitext.match(/==\s*Characters\s*==([\s\S]*?)(==|$)/);
    const sectionText = sectionMatch ? sectionMatch[1] : '';
    const characterNames = sectionText
        .split('\n')
        .filter((line) => line.startsWith('*'))
        .map((line) => line.replace(/^\*\s*/, '').trim());

    // 3. Obtener imágenes para cada personaje
    const charactersWithImages = await Promise.all(
        characterNames.map(async (name) => {
            const imgRes = await axios.get(WIKI_API, {
                params: {
                    action: 'query',
                    prop: 'pageimages',
                    piprop: 'original',
                    titles: name,
                    format: 'json',
                    origin: '*',
                },
            });
            const imgPages = imgRes.data?.query?.pages;
            const imgPage = imgPages[Object.keys(imgPages)[0]];
            const image = imgPage?.original?.source || null;
            return { name, image };
        })
    );
    return charactersWithImages;
}

export function useBookCharacters(bookTitle: string) {
    return useQuery({
        queryKey: ['book-characters', bookTitle],
        queryFn: () => fetchBookCharacters(bookTitle),
        enabled: !!bookTitle,
    });
}
