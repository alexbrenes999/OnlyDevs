// import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
// import HomePage from "scenes/homePage";

// import ProfilePage from "scenes/profilePage";
// import { useMemo } from "react";
// import { useSelector } from "react-redux";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { createTheme } from "@mui/material/styles";
// import { themeSettings } from "./theme";

// function App() {
//   const mode = useSelector((state) => state.mode);
//   const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
//   const isAuth = Boolean(useSelector((state) => state.token));

//   return (
//     <div className="app">
//       <BrowserRouter>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//           <Routes>
//             <Route path="/" element={<LoginPage />} />
//             <Route
//               path="/home"
//               element={isAuth ? <HomePage /> : <Navigate to="/" />}
//             />
//             <Route
//               path="/profile/:userId"
//               element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
//             />
//           </Routes>
//         </ThemeProvider>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginPage from "./pages/Login/Login"
// import Navigation from './pages/Navbar/Navbar';
// import Profile from './pages/Profile/Profile';
// import CreateJob from './pages/Works/CreateJob';
// import JobFeed from './pages/Works/JobFeed';
// import Signup from "./pages/Login/Signup";

// function App() {
//   return (
//     <Router>
//       <div>
//       <Routes>
//         <Route path="/" element={<LoginPage/>}/>
//         <Route path="/Signup" element={<Signup/>}/>
//         <Route path="/Profile" element={<Profile/>}/>
//         <Route path="/CreateJob" element={<CreateJob/>}/>
//         <Route path="/JobFeed" element={<JobFeed/>}/>
        
//         {/*<Route path="/Contact" element={<Contact/>}/> */}
//       </Routes>
//       </div>
//     </Router>
    
    
//   );
// }
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/Login/Login"
import Navigation from './pages/Navbar/Navbar';
import Profile from './pages/Profile/Profile';
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
            <Route path="/CreateJob" element={<CreateJob/>}/>
            <Route path="/JobFeed" element={<JobFeed/>}/>
              <Route 
                path="/profiles/:username"
                element={<Profile />}
              />
              <Route 
                path="/Job/:JobId"
                // element={<SingleJob />}
              />
            </Routes>
          </div>
        
      </Router>
    </ApolloProvider>
  );
}



export default App;