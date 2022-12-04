interface ICharacterData {
  name: string;
  url: string;
}

export interface ICharacter {
	id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin?: ICharacterData,
  location?: ICharacterData,
  image: string;
  episode?: string[],
  url?: string,
  created?: string,
}

export interface IAllCharacters {
  mainCharacters: ICharacter[];
  aliensCharacters: ICharacter[];
}

export type ICharacterCard = Omit<ICharacter, "species" | "type" | "gender">;
