import { Box, Button, Container, Grid, Paper, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../Store/authSlice';

function Login() {
    const [data, setData] = useState({
        usuario: '',
        contrasena: '',
    });

    const [Alerta, setAlerta] = useState(false);


    const Datos = (e: any) => {
        const { name, value, type, checked } = e.target;
        setData({
            ...data,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const Acceder = (e: any) => {
        console.log(data);
        e.preventDefault();

        const usuarioadmin = "admin";
        const usuariocontraseña = "1234";

        const usuarioordinario1 = "maria";
        const usuariocontraseña2 = "4321";

        const usuarioordinario2 = "gaben";
        const usuariocontraseña3 = "42236";

        if (data.usuario === usuarioadmin && data.contrasena === usuariocontraseña) {
            dispatch(authActions.login({
                name: data.usuario,
                rol: 'administrador'
            }))
            setAlerta(false)
            navigate('/Home')
        } else if (data.usuario === usuarioordinario1 && data.contrasena === usuariocontraseña2) {
            dispatch(authActions.login({
                name: data.usuario,
                rol: 'usuario'
            }))
            setAlerta(false)
            navigate('/Home')
        } else if (data.usuario === usuarioordinario2 && data.contrasena === usuariocontraseña3) {
            dispatch(authActions.login({
                name: data.usuario,
                rol: 'Tecnico'
            }))
            setAlerta(false)
            navigate('/Home')
        } else {
            setAlerta(true)
        }
    }

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Box  >
                <Paper>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h1">Sistema de acceso</Typography>
                        <LockIcon sx={{ fontSize: 40, mb: 2 }} />
                    </Grid>
                    <form onSubmit={Acceder}>
                        <Grid container spacing={2} sx={{ width: 700, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Grid>
                                <TextField sx={{ width: 700 }} label="usuario" name="usuario" value={data.usuario} onChange={Datos} required fullWidth />
                            </Grid>
                            <Grid>
                                <TextField sx={{ width: 700 }} label="contrasena" type="password" name="contrasena" value={data.contrasena} onChange={Datos} required fullWidth />
                            </Grid>
                            <Grid>
                                <Button type="submit" variant="contained" color="primary" sx={{ width: 700 }}>Acceder</Button>
                            </Grid>
                        </Grid>
                    </form>
                    {Alerta && <Alert severity="error" sx={{ mt: 2 }}>Usuario o contraseña incorrecto</Alert>}
                </Paper>
            </Box>
        </Container>
    );
}
export default Login
