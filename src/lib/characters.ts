const API_URL = import.meta.env.PUBLIC_RICKANDMORTYAPI;

import { ICharacter, IAllCharacters } from '../types/characters';

export default async function getCharacters(): Promise<IAllCharacters> {
  try {
    const mainCharactersResponse = await fetch(`${API_URL}/character/1,2,3,4,5`);
    const mainCharacters: ICharacter[] = await mainCharactersResponse.json();

    const response = await fetch(`${API_URL}/character/?species=alien`);
    const { results } = await  response.json();
    const aliensCharacters: ICharacter[] = results.slice(0, 5);

    return {
      mainCharacters,
      aliensCharacters
    };
  } catch (error) {
    return {
      mainCharacters: [],
      aliensCharacters: []
    };
  }
};

