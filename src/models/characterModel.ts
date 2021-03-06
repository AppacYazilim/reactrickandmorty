

export default interface CharacterModel {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface CharacterLocation {
  name: string;
  url: string;
}
