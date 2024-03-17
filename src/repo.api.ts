import { Poke } from './model/poke';

const urlBase = 'https://pokeapi.co/api/v2/';

export class RepoPoke {
  urlPoke: URL;
  nextUrl: URL;
  offset = 0;
  constructor() {
    this.urlPoke = new URL('pokemon/', urlBase);
    this.nextUrl;
  }

  async getStartingPokemon(): Promise<Poke[]> {
    const response = await fetch(this.urlPoke);
    if (!response.ok) {
      const message = `Error fetching pokemon: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }

    const responseData = await response.json();
    console.log(responseData);

    this.nextUrl = responseData.next;

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
    console.log(newUrl);
    const response = await fetch(newUrl);
    if (!response.ok) {
      const message = `Error fetching pokemon: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }

    const responseData = await response.json();

    this.nextUrl = responseData.next;

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
    console.log(newUrl);
    const response = await fetch(newUrl);
    if (!response.ok) {
      const message = `Error fetching pokemon: ${response.status} ${response.statusText}`;
      throw new Error(message);
    }

    const responseData = await response.json();

    this.nextUrl = responseData.next;

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

// let allPokemon: Poke[] = [];
// let offset = 0;
// const limit = 20; // Fetch 20 Pokémon at a time
// let totalCount = 0;

// do {
//   const url = new URL('pokemon/', urlBase);
//   url.searchParams.append('offset', offset.toString());
//   url.searchParams.append('limit', limit.toString());

//   const response = await fetch(url);
//   if (!response.ok) {
//     const message = `Error fetching pokemon: ${response.status} ${response.statusText}`;
//     throw new Error(message);
//   }

//   const responseData = await response.json();
//   allPokemon = allPokemon.concat(responseData.results);
//   totalCount = responseData.count;

//   offset += limit;
// } while (allPokemon.length < totalCount);

// return Promise.all(
//   allPokemon.map(async (pokemon: any) => {
//     const pokemonResponse = await fetch(pokemon.url);
//     if (!pokemonResponse.ok) {
//       throw new Error(`Error fetching details for ${pokemon.name}`);
//     }
//     return pokemonResponse.json();
//   })
// );

// async add(pet: Omit<Poke, 'id'>): Promise<Poke> {
//   const response = await fetch(this.urlPoke, {
//     method: 'POST',
//     body: JSON.stringify(pet),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     const message = `Error adding pets: ${response.status} ${response.statusText}`;
//     throw new Error(message);
//   }

//   return response.json();
// }

// async update(pet: Poke): Promise<Poke> {
//   const response = await fetch(this.urlPoke + '/' + pet.id, {
//     method: 'PATCH',
//     body: JSON.stringify(pet),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   if (!response.ok) {
//     const message = `Error updating pets: ${response.status} ${response.statusText}`;
//     throw new Error(message);
//   }

//   return response.json();
// }

// async delete(pet: Poke): Promise<Poke> {
//   const response = await fetch(this.urlPoke + '/' + pet.id, {
//     method: 'DELETE',
//   });

//   if (!response.ok) {
//     const message = `Error deleting pets: ${response.status} ${response.statusText}`;
//     throw new Error(message);
//   }

//   return response.json();
// }
