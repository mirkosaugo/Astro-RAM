interface ICahracterData {
  name: string;
  url: string;
}

export interface ICahracter {
	id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin?: ICahracterData,
  location?: ICahracterData,
  image: string;
  episode: string[],
  url: string,
  created?: string,
}

export interface IAllCharacters {
  mainCharacters: ICahracter[];
  aliensCharacters: ICahracter[];
}
