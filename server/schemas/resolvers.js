import { AuthenticationError } from 'apollo-server-express';
import User from '../models/User.js';
import HelpPost from '../models/HelpPost.js';


import { authStuff } from '../utils/auth.js';

const resolvers = {
    Query: {
      findOneUser: async (parent, { username }) => {
        return User.findOne({ username })
      },
        helpPost : async (parent, args, context) => {
          if (context.helpPost) {
            const helpPost = await HelpPost.findById(context.helpPost._id);
            return helpPost;
          }
        },
    },
    
    Mutation: {
        registerUser: async (parent, {firstName, lastName, username, password}) => {
            const user = await User.create({firstName: firstName, lastName: lastName, username: username, password: password});
            const token = authStuff.signToken(user);
            console.log(token);
            console.log(user);
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
        editUser: async (parent, { username, location, jobTitle, skills, contact } ) => {
           console.log(username)
              const profile = await User.findOneAndUpdate({username: username}, 
                { $push: { location: location, jobTitle: jobTitle, skills: skills, contact: contact } });
              return profile;
            
        }
       
    }
};

//How would i make a resolver for a blog post?

export default resolvers;