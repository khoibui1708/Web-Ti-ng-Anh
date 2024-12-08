import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import BasicCard from '../../Cards/Card1';

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 44,

}));

export default function ResponsiveGrid1() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 3 }} sx = {{background: 'white'}}>
          <Grid size={{ xs: 2, sm: 4, md: 4 }}>
            <Item><BasicCard/></Item>
          </Grid>

          <Grid size={{ xs: 2, sm: 4, md: 4 }}>
            <Item><BasicCard/></Item>
          </Grid>
          <Grid size={{ xs: 2, sm: 4, md: 4 }}>
            <Item><BasicCard/></Item>
          </Grid>

      </Grid>
    </Box>
  );
}
