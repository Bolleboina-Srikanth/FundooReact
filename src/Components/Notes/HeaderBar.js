import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import RefreshIcon from '@mui/icons-material/Refresh';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import FunKeep from '../Images/Keep.png';

const drawerWidth = 240;

const Header = styled(AppBar)`
      z-index: 1201;
      background: #fff;
      height: 70px;
      box-shadow: inset 0 -1px 0 0 #dadce0;
      `;
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-around'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50ch',
        },

    },
}));



const HeaderBar = ({ open, handleDrawer }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const handleLogout = () =>
  {
    if(localStorage.key)
    {
      localStorage.removeItem("token")
    }
    navigate("/")
  }
    return (
        <Header open={open}>
            <Toolbar>
                <IconButton
                    // color="inherit"
                    // aria-label="open drawer"
                    onClick={handleDrawer}
                    edge="start"
                    sx={{ marginRight: '20px' }}
                >
                    <MenuIcon />
                </IconButton>
                 <img src={FunKeep}  alt="keeplogo"></img>   
                <Typography variant="h6" noWrap component="div" sx={{ color: "gray" }}>
                    Keep
                </Typography>
                <Search >
                    <SearchIconWrapper >
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Add account </MenuItem>
                    <MenuItem onClick={handleLogout}>Log out</MenuItem>
                </Menu>
                <RefreshIcon
                    sx={{ marginLeft: 50, color: "gray" }} />
                <ViewStreamOutlinedIcon sx={{ marginLeft: 2, color: "gray" }} />

                <SettingsIcon sx={{ marginLeft: 2, color: "gray" }} />
                <AppsIcon sx={{ marginLeft: 3, color: "gray" }} />

                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                    sx={{
                        marginLeft: 1, color: "gray"
                    }}

                >
                    <AccountCircle />
                </IconButton>

            </Toolbar>
        </Header>
    );
}
export default HeaderBar;