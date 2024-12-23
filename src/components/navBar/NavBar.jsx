import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/material";
import iconUser from '../../assets/icon/iconUser.png'
import { LogoutUser } from "../../services/auth.service";
import { useAuth } from '../../context/authContext';
import { showToast } from "../../utils/notification";

const NavBar = () => {
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { logoutContext } = useAuth();


  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
     const logoutUserSesion = await LogoutUser()
     if (logoutUserSesion.status == 200) {
      showToast('Cerro sesión correctamente', 'success')
      logoutContext()
     }else{
      showToast('Ocurrio un error al cerrar sesión', 'error')
     }
      
  };

  return (
    <AppBar position="static" className="bg-gray-800">
      <Toolbar className="flex justify-between bg-black ">
        <div className="flex gap-1">
            <Typography variant="h7" className="text-white font-extrabold text-3xl">
            TASK
            </Typography>
            <Typography variant="h7" className="text-[#68FF02] font-bold text-base">
            APP
            </Typography>
        </div>

        <Box className="flex items-center">
          <Tooltip title="Menú">
            <IconButton onClick={handleOpenMenu}>
              <Avatar src={iconUser} alt="icon" />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            className="mt-1"
          >
              <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
