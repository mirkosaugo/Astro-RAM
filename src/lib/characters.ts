import { ICharacter, IAllCharacters } from '../types/characters';

export default async function getCharacters(): Promise<IAllCharacters> {
  const mainCharactersResponse = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5');
  const mainCharacters: ICharacter[] = await mainCharactersResponse.json();

  const response = await fetch('https://rickandmortyapi.com/api/character/?species=alien');
  const { results } = await  response.json();
  const aliensCharacters: ICharacter[] = results.slice(0, 5);

  return {
    mainCharacters,
    aliensCharacters
  };
}
