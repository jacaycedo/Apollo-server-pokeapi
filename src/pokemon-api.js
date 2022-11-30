import { RESTDataSource } from "@apollo/datasource-rest";

export class PokemonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://pokeapi.co/api/v2/";
  }

  async getAllPokemon() {
    const data = await this.get("pokemon", {});
    return data.results;
  }
}
