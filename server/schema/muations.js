const graphql from 'graphql';
const { GraphQLObjectType, GraphQLString } = graphql;
const UserType from './types/user_type';

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(_, args, request) {
        
      }
    }
  }
});

module.exports = mutation;
