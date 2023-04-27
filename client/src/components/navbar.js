// import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'; //removed the 'Button'
// import { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/authContext';

// function Navbar() {
//     const { user, logout } = useContext(AuthContext);

//     const onLogout = () => {
//         logout();
//         Navigate('/')
//     }
// console.log(user);

//     return (
//         <Box sx={{flexGrow: 1}}>
//             <AppBar position='static'>
//                 <Toolbar>
//                     <Typography variant='h5' component='div'>
//                         <Link to='/'>ReactLogin</Link>
//                     </Typography>
//                     <Box alignItems="right" sx={{flexGrow: 1, textAlign: "right"}}>
//                         <Link to="/login" style={{textDecoration: "none", color: "white", marginRight: "10px"}}>Login</Link>
//                         <Link to="/register" style={{textDecoration: "none", color: "white"}}>Register</Link>
//                     </Box>
//                 </Toolbar>
//             </AppBar>
//         </Box>
//     );
// }

// export default Navbar;