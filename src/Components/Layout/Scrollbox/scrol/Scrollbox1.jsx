import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from './Grid';
import TypographyTheme from './Text';
import { Divider } from '@mui/material';

function ScrollableBox() {
  return (
    <Box
      sx={{
        height: 500, 
        overflowY: 'auto', 
        width: 800
        
      }}
    >
      <div style = {{display: 'flex', justifyContent: 'center', alignContent: 'center', width: 'fit'}}>
      <Grid/>
      </div>


      
    </Box>
  );
}

export default ScrollableBox;