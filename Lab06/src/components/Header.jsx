import React from "react";

/* import { 
  StyledButton, 
  StyledHeadingTwo,
  StyledContainer
} from './Header.styled' */

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const HeaderOne = ({ user, setUser }) => {
  return (
    <>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '15vh',
        width: '100%',
        backgroundColor: '#f4f4f4' }}>
        <h1 color="#00ff00">Welcome, {user}</h1>
        <Button variant="contained" onClick={() => setUser("")}>Logout</Button>
      </Box>
    </> 
  )
};

export default HeaderOne;