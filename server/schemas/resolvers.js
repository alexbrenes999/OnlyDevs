import { AuthenticationError } from 'apollo-server-express';
import User from '../models/User.js';
import HelpPost from '../models/HelpPost.js';
import Profile from '../models/Profile.js';

import { authStuff } from '../utils/auth.js';

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id);
              return user;
            }
      
        },
        helpPost : async (parent, args, context) => {
          if (context.helpPost) {
            const helpPost = await HelpPost.findById(context.helpPost._id);
            return helpPost;
          }
        },
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
      
            const token = authStuff.signToken(user);
      
            return { token, user };
        },
        createHelpPost: async (parent, args) => {
          return await HelpPost.create(args);
        },
        editProfile: async (parent, { profiles }, context) => {
            console.log(context);
            if (context.user) {
              const profile = new Profile({ profiles });
              await User.findByIdAndUpdate(context.user._id, { $push: { profile: profile } });
              return profile;
            }
            throw new AuthenticationError('Not logged in');
        }
       
    }
};

//How would i make a resolver for a blog post?

export default resolvers;