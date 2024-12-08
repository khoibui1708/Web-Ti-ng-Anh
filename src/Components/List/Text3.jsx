import * as React from 'react';
import { styled } from '@mui/material/styles';


const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  textAlign: 'center',
  fontSize: 25,
  color: 'white',
  backgroundColor:  '#1873D3',
  width: 200,
  borderTopLeftRadius: 45,
  borderTopRightRadius: 45,


}));

export default function TypographyTheme2() {
  return   (<div style = {{display: 'flex', justifyContent: 'center'}}>
    <Div>{"MENU"}</Div>;
  </div>);
}
