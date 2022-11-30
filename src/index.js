import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { PokemonAPI } from "./pokemon-api.js";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./typeDefs.js";


const server = new ApolloServer({
  typeDefs,
  resolvers
});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {
          pokemonApi: new PokemonAPI({ cache })
        }
      };
    }
  });

  console.log(`🚀  Server ready at ${url}`);
};

startServer();