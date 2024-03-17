import { Poke } from './model/poke';

const urlBase = 'https://pokeapi.co/api/v2/';

export class RepoPoke {
  urlPoke: URL;
  offset = 0;
  constructor() {
    this.urlPoke = new URL('pokemon/', urlBase);
  }

  async getStartingPokemon(): Promise<Poke[]> {
    const response = await fetch(this.urlPoke);
    if (!response.ok) {
      const message = `Error fetching pokemon: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }
    const responseData = await response.json();

    const pokemonPromises: Promise<Poke>[] = responseData.results.map(
      async (pokemon: any) => {
        const pokemonResponse = await fetch(pokemon.url);
        if (!pokemonResponse.ok) {
          throw new Error(`Error fetching details for ${pokemon.name}`);
        }
        return pokemonResponse.json();
      }
    );

    return Promise.all(pokemonPromises);
  }

  async getNextPokemon(): Promise<Poke[]> {
    this.offset += 20;
    const newUrl = new URL(`?offset=${this.offset}&limit=20`, this.urlPoke);
    const response = await fetch(newUrl);
    if (!response.ok) {
      const message = `Error fetching pokemon: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }

    const responseData = await response.json();

    const pokemonPromises: Promise<Poke>[] = responseData.results.map(
      async (pokemon: any) => {
        const pokemonResponse = await fetch(pokemon.url);
        if (!pokemonResponse.ok) {
          throw new Error(`Error fetching details for ${pokemon.name}`);
        }
        return pokemonResponse.json();
      }
    );

    return Promise.all(pokemonPromises);
  }

  async getPrevPokemon(): Promise<Poke[]> {
    this.offset -= 20;
    const newUrl = new URL(`?offset=${this.offset}&limit=20`, this.urlPoke);
    const response = await fetch(newUrl);
    if (!response.ok) {
      const message = `Error fetching pokemon: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }

    const responseData = await response.json();

    const pokemonPromises: Promise<Poke>[] = responseData.results.map(
      async (pokemon: any) => {
        const pokemonResponse = await fetch(pokemon.url);
        if (!pokemonResponse.ok) {
          throw new Error(`Error fetching details for ${pokemon.name}`);
        }
        return pokemonResponse.json();
      }
    );

    return Promise.all(pokemonPromises);
  }

  async getPokemonDetails(id: string): Promise<Poke[]> {
    const newUrl = new URL(`${id}`, this.urlPoke);
    const response = await fetch(newUrl);
    if (!response.ok) {
      const message = `Error fetching pokemon: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }

    const responseData = await response.json();
    console.log(responseData);

    const pokemonPromises: Promise<Poke>[] = responseData.results.map(
      async (pokemon: any) => {
        const pokemonResponse = await fetch(pokemon.url);
        if (!pokemonResponse.ok) {
          throw new Error(`Error fetching details for ${pokemon.name}`);
        }
        return pokemonResponse.json();
      }
    );

    return Promise.all(pokemonPromises);
  }
}
