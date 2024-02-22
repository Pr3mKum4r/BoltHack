import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Tooltip } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { useState, useEffect } from "react";
// import Logo from '../assets/Logo.png';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    navigate('/carform');
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const {currentUser, logOut} = useUserAuth();
  const [profileImg, setProfileImg] = useState('/static/images/avatar/2.jpg');

  useEffect(()=>{
    
    if(currentUser){
      setProfileImg(currentUser.photoURL);
    }
  }, [currentUser])

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters className="h-8">
          <Link to="/" className="Logo">
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                textDecoration: "none",
                color: "black",
                alignItems: "center",
                ":hover": {
                  color: "black",
                },
              }}
              component={Link}
              to={"/"}
            >
              <img src='/Logo.webp' alt='logo' className='logo'/>
              <h3 className="logo-text">NEUROASSIST</h3>
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                flexDirection: "column",
              }}
              className="nav-menu"
            >
              <MenuItem key={"Home"} onClick={handleCloseNavMenu}>
                {/* <Link to='/about' className='navlink'> */}
                <Typography textAlign="center" className="navbar-menu-text">
                  About
                </Typography>
                {/* </Link> */}
              </MenuItem>
              <MenuItem key={"About"} onClick={handleCloseNavMenu}>
                <Link to="/signup" className="navlink">
                  <Typography textAlign="center" className="navbar-menu-text">
                    Sign Up
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NEUROASSIST
          </Typography>
          <Box
            sx={{
              my: 3,
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {/* <Link to='/about' className='navlink'> */}
            <Button
              key="About"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#000000a6",
                display: "block",
                margin: "0 40px 0 40px",
                fontWeight: "bolder",
                textTransform: "capitalize",
                "&:hover": { backgroundColor: "transparent" },
                fontSize: "14pt",
              }}
              className="navbar-menu-text"
            >
              Services
            </Button>
            <Button
              key="About"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#000000a6",
                display: "block",
                margin: "0 40px 0 40px",
                fontWeight: "bolder",
                textTransform: "capitalize",
                "&:hover": { backgroundColor: "transparent" },
                fontSize: "14pt",
              }}
              className="navbar-menu-text"
            >
              About
            </Button>
            <Button
              key="About"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#000000a6",
                display: "block",
                margin: "0 40px 0 40px",
                fontWeight: "bolder",
                textTransform: "capitalize",
                "&:hover": { backgroundColor: "transparent" },
                fontSize: "14pt",
              }}
              className="navbar-menu-text"
            >
              Contact
            </Button>
            {/* </Link> */}
            {!currentUser ? <div onClick={()=>{navigate('/login')}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</div> :
            <div onClick={()=>{logOut()}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Logout</div>}
          </Box>
          {currentUser && <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={profileImg} />
              </IconButton>
            </Tooltip>
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
