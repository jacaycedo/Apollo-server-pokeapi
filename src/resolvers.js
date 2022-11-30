export const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    pokemons: (_, __, { dataSources }) => {
      return dataSources.pokemonApi.getAllPokemon();
    },
  },
};
