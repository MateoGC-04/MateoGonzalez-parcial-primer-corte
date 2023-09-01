class RickAndMortyService {
    constructor() {
        this.endpoint = 'https://rickandmortyapi.com/api/character';
    }

    async getAllCharacters() {
        try {
            const response = await fetch(this.endpoint);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            const characters = data.results.map(character => ({
                name: character.name,
                status: character.status,
                species: character.species,
                gender: character.gender,  
                firstSeen: character.origin.name,
                location: character.location.name,
                image: character.image,
                student: 'Mateo',
                code: '274565'
            }));
    
            return characters;
        } catch (error) {
            console.error('Error fetching characters:', error);
            throw error;
        }
    }    
}

export default RickAndMortyService;