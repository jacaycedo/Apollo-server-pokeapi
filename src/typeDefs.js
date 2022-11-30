export const typeDefs = `#graphql

  type Pokemon {
    name: String
    url: String
  }
  type Query {
    pokemons: [Pokemon]
  }
`;