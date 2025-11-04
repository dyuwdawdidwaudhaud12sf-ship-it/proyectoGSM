import { Button, Card, CardContent, Divider, Grid, TextField } from '@mui/material';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';

function Login() {



    return (
        <>
            <header>
                <Container>
                    <Grid container sx={{ width: 600 }}>
                        <Typography variant='h1'>Página Login de Gabriel Santana Melian</Typography>
                    </Grid>
                    <Divider sx={{ mb: 4 }} />
                </Container>
            </header>
            <main>
                <Container sx={{ flexDirection: 'column', alignItems: "center", justifyContent: "center" }}>
                    <Grid sx={{ mb: 2 }}>
                        <Card sx={{ width: 600 }}>
                            <Typography color="textSecondary" variant='h3'>Ingrese los datos para acceder</Typography>
                            <Divider />
                            <CardContent>
                                <Grid container spacing={6}>
                                    <Grid>
                                        <TextField fullWidth required label="Nombre" helperText="Nombre" />
                                    </Grid>
                                    <Grid >
                                        <TextField fullWidth required label="Contraseña" type="password" helperText="Contraseña" />
                                    </Grid>
                                </Grid >
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 4, width: 600 }}>
                        <Grid>
                            <Button sx={{ width: 270 }} variant="contained" color="secondary" >Acceder</Button>
                        </Grid>
                        <Grid>
                            <Button fullWidth variant="outlined" color="primary" >Crear un nuevo usuario</Button>
                        </Grid>
                    </Grid>
                </Container>
            </main>
            <footer>
                <Container sx={{ flexDirection: 'column', alignItems: "center", justifyContent: "center" }}>
                    <Card sx={{ width: 600 }}>
                        <CardContent>
                            <Grid>
                                <Typography color="textPrimary" variant='body1'>No nos hacemos responsables si su cuenta se vuelve innacesible por motivos ajenos a la página como:</Typography>
                                <Typography color="textSecondary" variant='caption'>olvidarse la contraseña o usuario, por dar la contraseña y usuario a personas desconocidas, etc..</Typography>
                                <Typography color="textPrimary" variant='body1'>Si pierde su cuenta y desea continuar usando la pagina, cree una nueva</Typography>
                            </Grid >
                        </CardContent>
                    </Card>
                </Container>
            </footer>
        </>
    )
}

export default Login

