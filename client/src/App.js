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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "pages/Login/Login";
import Navigation from 'pages/Navbar/Navbar';
import Profile from 'pages/Profile/Profile';
import CreateJob from 'pages/Works/CreateJob';
import JobFeed from 'pages/Works/JobFeed';
import Signup from "pages/Login/Signup";

function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/CreateJob" element={<CreateJob/>}/>
        <Route path="/JobFeed" element={<JobFeed/>}/>
        
        {/*<Route path="/Contact" element={<Contact/>}/> */}
      </Routes>
      </div>
    </Router>
    
    
  );
}

export default App;