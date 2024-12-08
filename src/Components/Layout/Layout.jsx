import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import SelectedListItem from '../List/List';
import ScrollableBox from './Scrollbox/scrol/Scrollbox1';
import TypographyTheme from './Scrollbox/scrol/Text';
import ScrollableBox1 from './Scrollbox/scrol1/Scrollbox2';
import TypographyTheme1 from './Scrollbox/scrol1/Text1';
import TypographyTheme2 from '../List/Text3';
import { Divider } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
  borderRadius: 0
}));

export default function VariableWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
      <Grid container spacing={0}>
        <Grid size="auto">
          <div style = {{width: 240}}>
          <TypographyTheme2/>
          <div style = {{background: '#1873D3', width: 'grow', height: '20px', borderTopLeftRadius: 15}}></div>
            <SelectedListItem/>
          </div>
        </Grid>
        <Grid size= 'fit'>
          <TypographyTheme/>
        <div style = {{background: '#1873D3', width: 'grow', height: '20px'}}></div>
          <ScrollableBox/>
        </Grid>
        
        <Grid size = 'fit'>
          <TypographyTheme1/>
          <div style = {{background: '#1873D3', width: 'grow', height: '20px',borderTopRightRadius: 15}}></div>
          <ScrollableBox1/>
        </Grid>
        
        
        
      </Grid>
    </Box>
  );
}
