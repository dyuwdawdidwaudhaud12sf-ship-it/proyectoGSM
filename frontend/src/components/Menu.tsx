import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import { AppBar, Drawer, IconButton, List, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FeedIcon from '@mui/icons-material/Feed';
import { useSelector } from 'react-redux'
import { RootState } from '../store/index'
import { authActions } from '../store/authSlice';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShieldIcon from '@mui/icons-material/Shield';
import HelpIcon from '@mui/icons-material/Help';

function Menu() {
    const userData = useSelector((state: RootState) => state.authenticator)
    console.log(userData)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [MenuLado, SetMenuDeLado] = useState(false);

    const AbrirOCerrarMenu = (open: boolean) => () => {
        SetMenuDeLado(open);
    };


    const esadmin = userData.userRol == 'admin'

    const DrawerList = (
        <Box sx={{ width: 250, backgroundColor: "black" }} role="MenuLado" onClick={AbrirOCerrarMenu(false)}>
            <List>
                <Link to={'/home'} style={{ textDecoration: 'green', color: 'green' }}>
                    <ListItem disablePadding>
                        <Tooltip title="página de inicio" placement="right" arrow>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon sx={{ fontSize: 50, color: 'green', mr: 3 }} />
                                    <Typography variant="h6" color="textPrimary" sx={{ flexGrow: 1, textAlign: 'center', fontSize: 30 }}>Inicio</Typography>
                                </ListItemIcon>
                            </ListItemButton>
                        </Tooltip >
                    </ListItem>
                </Link>

                {esadmin && (<Link to={'/reports'} style={{ textDecoration: 'green', color: 'green' }}>
                    <ListItem disablePadding>
                        <Tooltip title="Generar y ver informes" placement="right" arrow>
                            <ListItemButton>
                                <ListItemIcon>
                                    <FeedIcon sx={{ fontSize: 50, color: 'green', mr: 3 }} />
                                    <Typography variant="h6" color="textPrimary" sx={{ flexGrow: 1, textAlign: 'center', fontSize: 30 }}>Informes</Typography>
                                </ListItemIcon>
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                </Link>)}

                <Link to={'/Manual de uso.pdf'} target='_blank' style={{ textDecoration: 'green', color: 'green' }}>
                    <ListItem disablePadding>
                        <Tooltip title="Manual de uso de la aplicación" placement="right" arrow>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HelpIcon sx={{ fontSize: 50, color: 'green', mr: 3 }} />
                                    <Typography variant="h6" color="textPrimary" sx={{ flexGrow: 1, textAlign: 'center', fontSize: 30 }}>Ayuda</Typography>
                                </ListItemIcon>
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                </Link>

                <Link to={'/'} style={{ textDecoration: 'green', color: 'green' }}>
                    <ListItem disablePadding>
                        <Tooltip title="Cerrar sesión" placement="right" arrow>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ExitToAppIcon sx={{ fontSize: 50, color: 'green', mr: 3 }} />
                                    <Typography variant="h6" color="textPrimary" sx={{ flexGrow: 1, textAlign: 'center', fontSize: 30 }}>Salir</Typography>
                                </ListItemIcon>
                            </ListItemButton>
                        </Tooltip>
                    </ListItem>
                </Link>
            </List>
        </Box>
    )

    return (
        <>
            <AppBar position="static" sx={{ width: 1920, mb: 4 }}>
                <Toolbar>
                    <Tooltip title="Abrir menu de navegación" placement="right" arrow>
                        <IconButton onClick={AbrirOCerrarMenu(true)}>
                            <MenuIcon color="secondary" sx={{ fontSize: 35 }} />
                        </IconButton>
                    </Tooltip>
                    <Typography variant="h6" color="textPrimary" sx={{ flexGrow: 1, textAlign: 'center', fontSize: 35 }}>{userData.userName}</Typography>
                    {esadmin ? (<ShieldIcon sx={{ fontSize: 50, color: 'green' }} />) : (<PersonOutlineIcon sx={{ fontSize: 50, color: 'green' }} />)}
                </Toolbar>
            </AppBar >

            <Drawer slotProps={{ paper: { sx: { backgroundColor: 'black' } } }} anchor="left" open={MenuLado} onClose={AbrirOCerrarMenu(false)}>{DrawerList}</Drawer>
        </>
    );
}
export default Menu