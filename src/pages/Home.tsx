import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux'
import type { RootState } from '../Store/index';
import { authActions } from '../Store/authSlice';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function home() {

    const userData = useSelector((state: RootState) => state.authenticator)
    console.log(userData)


    const navigate = useNavigate()

    const dispatch = useDispatch()

    const Salir = (e: any) => {
        e.preventDefault();
        dispatch(authActions.logout())
        navigate('/')
    }

    return (
        <>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h1">pagina Home de gabriel</Typography>
                <Divider sx={{ width: 1000, mb: 4 }} />
                <Typography variant="h2">Soy {userData.userName} </Typography>
                <Typography variant="h2">mi rol es el de {userData.userRol}</Typography>
                <Divider sx={{ width: 1000, mb: 4 }} />
                <Button variant="contained" color="primary" onClick={Salir} sx={{ width: 700, mb: 4 }}>Salir</Button>
            </Container>
        </>
    );
}
export default home
