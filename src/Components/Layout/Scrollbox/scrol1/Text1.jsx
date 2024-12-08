import * as React from 'react';
import { styled } from '@mui/material/styles';


const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  padding: theme.spacing(1),
  textAlign: 'center',
  fontSize: 25,
  color: 'white',
  backgroundColor:  '#1873D3',
  width: 350,
  borderTopLeftRadius: 45,
  borderTopRightRadius: 45,


}));

export default function TypographyTheme1() {
  
  return   (<div style = {{display: 'flex', justifyContent: 'center'}}>
  <Div>{"MY WORD"}</Div>;
</div>);
  
  
  
}
