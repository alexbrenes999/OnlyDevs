import React from 'react';
import { ApolloClient , InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/Login/Login"
import Profile from './pages/Profile/Profile';
import EditProfile from './pages/Profile/EditProfile';
import CreateJob from './pages/Works/CreateJob';
import JobFeed from './pages/Works/JobFeed';
import Signup from "./pages/Login/Signup";
  
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

//COPIED THIS DIRECTLY FROM THE JWT CLASSWORK, DONT KNOW IF WE NEED THE SINGLE JOB
//THING -K
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        
          <div>
            <Routes>
              <Route path="/" element={<LoginPage/>}/>
              <Route path="/Signup" element={<Signup/>}/>
              <Route path="/MyProfile" element={<Profile/>}/>
              {/* <Route path="/EditProfile" element={<EditProfile/>}/> */}
              <Route path="/CreateJob" element={<CreateJob/>}/>
              <Route path="/JobFeed" element={<JobFeed/>}/>
              <Route path="/profiles/:username" element={<Profile />}/>
              <Route path="/Job/:JobId" // element={<SingleJob />}
              />
            </Routes>
          </div>
        
      </Router>
    </ApolloProvider>
  );
}



export default App;