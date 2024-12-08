import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import BookIcon from '@mui/icons-material/Book';
import QuizIcon from '@mui/icons-material/Quiz';
import TypographyTheme from '../Layout/Scrollbox/scrol/Text';

// Define the colors
const borderColors = [
  '#1873D3',  
  '#FF6F61',  
  '#FFB900',  
  '#159F64'   
];

const bgColors = [
  '#1873D3',  
  '#FF6F61',  
  '#FFB900',  
  '#159F64'   
];

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div>


    <Box
      sx={{
        width: '100%',
        maxWidth: 360,
        background: 'white',
        height: 500,
        borderRight: `16px solid ${borderColors[selectedIndex]}`, // Dynamic border color
        borderBottomLeftRadius: 15,
      }}
    >
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
          sx={{
            backgroundColor: selectedIndex === 0 ? bgColors[0] : 'transparent',
            '&.Mui-selected': {
              backgroundColor: bgColors[0],
              color: 'white',
              '&:hover': { backgroundColor: bgColors[0] },
            },
          }}
        >
          <ListItemIcon>
            <LocalFireDepartmentIcon
              sx={{ color: selectedIndex === 0 ? 'white' : 'inherit' }}
            />
          </ListItemIcon>
          <ListItemText primary="New Hot Words" />
        </ListItemButton>

        <Divider />

        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
          sx={{
            backgroundColor: selectedIndex === 1 ? bgColors[1] : 'transparent',
            '&.Mui-selected': {
              backgroundColor: bgColors[1],
              color: 'white',
              '&:hover': { backgroundColor: bgColors[1] },
            },
          }}
        >
          <ListItemIcon>
            <LocalLibraryIcon
              sx={{ color: selectedIndex === 1 ? 'white' : 'inherit' }}
            />
          </ListItemIcon>
          <ListItemText primary="Learning" />
        </ListItemButton>

        <Divider />

        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
          sx={{
            backgroundColor: selectedIndex === 2 ? bgColors[2] : 'transparent',
            '&.Mui-selected': {
              backgroundColor: bgColors[2],
              color: 'white',
              '&:hover': { backgroundColor: bgColors[2] },
            },
          }}
        >
          <ListItemIcon>
            <BookIcon
              sx={{ color: selectedIndex === 2 ? 'white' : 'inherit' }}
            />
          </ListItemIcon>
          <ListItemText primary="Dictionary" />
        </ListItemButton>

        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
          sx={{
            backgroundColor: selectedIndex === 3 ? bgColors[3] : 'transparent',
            '&.Mui-selected': {
              backgroundColor: bgColors[3],
              color: 'white',
              '&:hover': { backgroundColor: bgColors[3] },
            },
          }}
        >
          <ListItemIcon>
            <QuizIcon
              sx={{ color: selectedIndex === 3 ? 'white' : 'inherit' }}
            />
          </ListItemIcon>
          <ListItemText primary="Quiz" />
        </ListItemButton>
      </List>
    </Box>
    </div>
  );
}
