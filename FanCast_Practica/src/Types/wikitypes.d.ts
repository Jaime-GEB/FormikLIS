
// Para series y películas
export interface Character {
    name: string;
    image: string;
}

export interface MediaItem {
    title: string;
    image: string;
    genres: string[];
    characters?: Character[];
}

// Para actores/personas públicas
export interface PublicFigure {
    firstName: string;
    lastName: string;
    image: string;
}

export interface Categories {
    pageid: number;
    title: string;
}

