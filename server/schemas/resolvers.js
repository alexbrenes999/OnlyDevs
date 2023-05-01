import { AuthenticationError } from 'apollo-server-express';
import User from '../models/User.js';
import HelpPost from '../models/HelpPost.js';


import { authStuff } from '../utils/auth.js';

const resolvers = {
    Query: {
      findOneUser: async (parent, { username }) => {
        return User.findOne({ username })
      },
        helpPost : async ( ) => {
          
            const helpPost = await HelpPost.find({});
            
            return helpPost;
          
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
        createHelpPost: async (parent, {title, languages, timeline, description, contact}) => {
          return await HelpPost.create({title: title, languages: languages, timeline: timeline, description: description, contact: contact });
        },
        editUser: async (_, { username, location, jobTitle, skills, contact }) => {
          try {
            const user = await User.findOneAndUpdate(
              { username },
              { $set: { location, jobTitle, skills, contact } },
              { new: true } // returns the updated document
            );
            return user;
          } catch (err) {
            console.error(err);
            throw new Error('Failed to update user');
          }
        }
      
       
    }
};

export default resolvers;