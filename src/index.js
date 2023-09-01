import RickAndMortyService from './service';

const service = new RickAndMortyService();

function createCharacterCard(character){

    let estado = '';
    let punto_color = '';

    if (character.status === 'Alive') {
        estado = 'alive';
        punto_color = '#54CB44';
    } else if (character.status === 'Dead') {
        estado = 'dead';
        punto_color = '#D63D2E';
    } else {
        estado = 'unknown';
        punto_color = '#9E9E9E';
    }

    return `
    <div class="tarjeta">
        <div class="imagen" style="background-image: url(${character.image})">
        </div>
        <div class="datos">
            <div>
                <h2 class="${estado}">${character.name}</h2>
                <p class="${estado}">
                    <span class="punto" style="background-color: ${punto_color};"></span>
                    ${character.status} - ${character.species}
                </p>
            </div>
            <div>
                <p class="${estado}" id="secondary_color">Last known location:</p>
                <p class="${estado}">${character.location}</p>
            </div>
            <div>
                <p class="${estado}" id="secondary_color">First seen in:</p>
                <p class="${estado}">${character.firstSeen}</p>
            </div>
        </div>
    </div>`;
}

function addCharacterListeners(character) {
    character.addEventListener('click', () => {
        alert(`Hola, soy ${character.name}`);
    });
}

async function createCharacterList() {
    const container = document.getElementById('characterContainer');
    
    try {
        const characters = await service.getAllCharacters();
        const table = document.createElement('table');
        let row;

        characters.forEach((character, index) => {
            if (index % 3 === 0) {
                row = document.createElement('tr');
            }

            const cell = document.createElement('td');
            cell.innerHTML = createCharacterCard(character);
            addCharacterListeners(cell, character);
            
            row.appendChild(cell);

            if ((index + 1) % 3 === 0 || index === characters.length - 1) {
                table.appendChild(row);
            }
        });

        container.appendChild(table);
    } catch (error) {
        console.error('Error creando la lista:', error);
    }
}


function addCharacterListeners(characterCard, character){
    characterCard.addEventListener('click', () => {
        alert(`Hola, soy ${character.name}`);
    });
}

createCharacterList();