import * as React from 'react';
import { styled } from '@mui/material/styles';



const Div = styled('div')(({ theme, BgColor }) => ({
  ...theme.typography.button,
  backgroundColor: BgColor || '#1873D3',  
  padding: theme.spacing(1),
  textAlign: 'center',
  fontSize: 25,
  color: 'white',  
  width: 700,
  borderTopLeftRadius: 45,
  borderTopRightRadius: 45,
}));

export default function TypographyTheme({ selectedIndex = 0 }) {
 

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Div >{"NEW HOT ENGLISH WORDS"}</Div>
    </div>
  );
}
