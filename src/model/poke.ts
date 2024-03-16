export type Poke = {
  id: string;
  sprites: {
    front_default: string;
  };
  name: string;
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
  abilities: string[];
  height: number;
  weight: number;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
};
