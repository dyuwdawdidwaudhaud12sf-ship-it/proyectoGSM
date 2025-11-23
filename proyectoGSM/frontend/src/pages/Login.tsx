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
        user: '',
        passwd: '',
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

    async function isVerifiedUser() {
        fetch(`http://localhost:3030/login?user=${data.user}&password=${data.passwd}`)
            .then(response => response.json())
            .then(response => {
                if (response.data.length !== 0) {
                    setAlerta(false);
                    dispatch(authActions.login({
                        name: response.data.nombre,  
                        rol: response.data.rol  
                    })); navigate('/Home');
                } else {
                    setAlerta(true);
                }
            })
    }


    const Acceder = (e: any) => {
        e.preventDefault();
        isVerifiedUser();
    };


    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Box   >
                <Paper>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="h1">Sistema de acceso</Typography>
                        <LockIcon sx={{ fontSize: 40, mb: 2 }} />
                    </Grid>
                    <form onSubmit={Acceder}>
                        <Grid container spacing={2} sx={{ width: 700, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Grid>
                                <TextField sx={{ width: 700 }} label="usuario" name="user" value={data.user} onChange={Datos} required fullWidth />
                            </Grid>
                            <Grid>
                                <TextField sx={{ width: 700 }} label="contraseña" type="password" name="passwd" value={data.passwd} onChange={Datos} required fullWidth />
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