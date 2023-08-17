import React, { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { CgDetailsMore } from "react-icons/cg";
import Logo from "../assets/logo.png";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const drawerWidth = 240;
const navItems = [
  { label: "Home", active: true },
  { label: "About us", active: false },
  { label: "Our services", active: false },
  { label: "Our experience", active: false },
  { label: "Resources", active: false },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>

      <Divider />

      <List>
        {navItems?.map((item, ind) => (
          <ListItem key={ind} disablePadding>
            <ListItemButton sx={{}}>
              <ListItemText primary={item?.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className="!bg-white">
        <Toolbar className="flex items-center justify-between space-x-5">
          <img src={Logo} alt="logo" />

          <div className="flex space-x-6">
            {navItems?.map((item, ind) => (
              <div
                key={ind}
                className={`uppercase text-black text-[16px] ${
                  item?.active && "border-primary border-b-2"
                }`}
              >
                {item?.label}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="contained"
              className="uppercase !bg-primary !rounded-[30px]"
            >
              Contact us
            </Button>

            <IconButton size="small">
              <BsFacebook />
            </IconButton>

            <IconButton size="small">
              <AiOutlineInstagram />
            </IconButton>

            <IconButton size="small">
              <BsLinkedin />
            </IconButton>
          </div>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            // sx={{ mr: 2, display: { sm: "none" } }}
          >
            <CgDetailsMore />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* {props.children && (
        <Box component="main" sx={{ p: 3 }}>
          {props.children}
        </Box>
      )} */}
    </Box>
  );
}

export default Navbar;
