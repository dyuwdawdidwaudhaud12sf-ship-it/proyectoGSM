import { Box, Button, Container, Grid, Paper, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom'

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

    const enviar = (e: any) => {
        console.log(data);
        e.preventDefault();

        const usuarioadmin = "admin";
        const usuariocontraseña = "1234";

        if (data.usuario === usuarioadmin && data.contrasena === usuariocontraseña) {
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
                    <form onSubmit={enviar}>
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
