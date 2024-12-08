import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '../scrol/Grid';
import TypographyTheme from '../scrol/Text';
import { Divider } from '@mui/material';
import TypographyTheme1 from './Text1';
import ResponsiveGrid1 from './Grid1';

function ScrollableBox1() {
  return (
    <Box
      sx={{
        height: 500, // Adjust height as needed
        overflowY: 'auto', // Enable vertical scrolling
     
        

        width: 440,
        borderLeft: 'none',
        borderTopRightRadius: 10,
    

      }}
    >
      <ResponsiveGrid1/>
    </Box>
  );
}

export default ScrollableBox1;