import { AuthenticationError } from 'apollo-server-express';
import User from '../models/User.js';
import { authStuff } from '../utils/auth.js';

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id);
      
              return user;
            }
      
        }
    },
    
    Mutation: {
        registerUser: async (parent, args) => {
            const user = await User.create(args);
            const token = authStuff.signToken(user);
            return { token, user };
        },
        loginUser: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
        }
    }
};

export default resolvers;